import { Formik, Form } from "formik";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import logoIcon from "../../../assets/images/logo-icon.png";
import FormikControl from "../../../common/Formik/FormikControl";
import { changePwdValues } from "../../../constants/InitialValues";
import { changePassword } from "../../../services/AuthService";
import { changePwdValidation } from "../../../validations/AuthValidations";
import Loader from "../../../common/Loder";

import "../Authentication.styles.scss";
import ErrorMsg from "../../../common/ErrorMessage";

const ChangePassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isChanged, setChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleChangePassword = (values: any) => {
    setLoading(true);
    const payload = {
      ftoken: id,
      password: values.password,
      repeat: values.confirmPassword,
    };
    changePassword(payload)
      .then((res) => {
        setChanged(true);
        setLoading(false);
      })
      .catch((err) => {
        const error =
          err && err.response && err.response.data && err.response.data.message;
        setErrMsg(error);
        setLoading(false);
      });
  };

  return (
    <>
      {!isChanged ? (
        <div className="mt-5 login-section">
          <div className="mb-3 p-3 auth-div">
            <Formik
              initialValues={changePwdValues}
              validationSchema={changePwdValidation}
              validateOnMount
              enableReinitialize
              onSubmit={(values, actions) => {
                handleChangePassword(values);
              }}
            >
              {(formik) => {
                const { handleChange, handleSubmit, values } = formik;
                return (
                  <Form onSubmit={handleSubmit}>
                    <img className="auth-logo" src={logoIcon} />
                    <h3 className="auth-heading">Change Password</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <FormikControl
                          control="input"
                          type="password"
                          name="password"
                          label="Password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <FormikControl
                          control="input"
                          type="password"
                          name="confirmPassword"
                          label="Confirm Password"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <ErrorMsg errMsg={errMsg} />

                    <div className="text-center auth-button-div">
                      <button className="btn btn-lg auth-button" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      ) : (
        <div className="register-success">
          <div className="success-icon">
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <div className="success-text">
            Your pawword has been changed successfully. <br />
            <button
              className="btn btn-success"
              onClick={() => history.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      )}

      {loading && <Loader />}
    </>
  );
};

export default ChangePassword;
