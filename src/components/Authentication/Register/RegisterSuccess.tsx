import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import {
  tradingPartnersList,
  addPartner,
} from "../../../services/tradingService";
import { useEffect, useState } from "react";
import ModalComponent from "../../../react-components/Modal/Modal";
import { faLastfmSquare } from "@fortawesome/free-brands-svg-icons";

interface Props {
  history: any;
  location: any;
}

const RegisterSuccess = ({ location, history }: Props) => {
  const category = location?.state?.category;
  const adminId = location?.state?.adminId;

  const [isLoading, setIsLoading] = useState(false);
  const [partnerList, setPartnerList] = useState<any[]>([]);
  const [partnersArray, setPartnersArray] = useState<any[]>([]);
  const [statusModalShow, setStatusModalShow] = useState(false);

  const tradingPartnersListFn = () => {
    setIsLoading(true);
    tradingPartnersList()
      .then((res) => {
        const resData = res.data;
        setPartnerList(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleCheckPartners = (e: any, value: string) => {
    const isChecked = e.target.checked;
    let index = partnersArray.indexOf(value);
    if (isChecked === true) {
      setPartnersArray([...partnersArray, value]);
    } else {
      partnersArray.splice(index, 1);
      setPartnersArray(partnersArray);
    }
  };

  const handleSubmitPartners = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      user: adminId,
      list: partnersArray,
    };
    addPartner(payload)
      .then((res) => {
        setIsLoading(false);
        setStatusModalShow(true);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const closeStatusModal = () => {
    setStatusModalShow(false);
    history.push("/login");
  };

  useEffect(() => {
    tradingPartnersListFn();
  }, []);

  return (
    <>
      <div className="register-success">
        <div className="success-icon">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div className="success-text">
          <p>Congratulations, your account has been successfully created.</p>{" "}
          <p>
            Your account will be activated in 1-2 business days after verifying
            your business credentials.
          </p>
          {category === "0" ? (
            <>
              <p>
                In meantime if you have any question, please write us at
                <strong> hello@tracephram.com</strong>
              </p>
              <button
                className="btn btn-success"
                onClick={() => history.push("/login")}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <p className="mb-1 fw-bold">Please select trading partners </p>
              <Form>
                {partnerList &&
                  partnerList.map((d: any, i: number) => {
                    return (
                      <Form.Check
                        key={i}
                        type="checkbox"
                        label={d.company_name}
                        value={d.admin}
                        onClick={(e: any) => handleCheckPartners(e, d.admin)}
                      />
                    );
                  })}
                <button
                  className="btn btn-success"
                  onClick={handleSubmitPartners}
                  disabled={!adminId}
                >
                  Submit
                </button>
              </Form>
            </>
          )}
        </div>
      </div>
      <ModalComponent
        show={statusModalShow}
        title="Added successfully"
        modalType="success"
        closeModal={closeStatusModal}
      />
    </>
  );
};

export default RegisterSuccess;
