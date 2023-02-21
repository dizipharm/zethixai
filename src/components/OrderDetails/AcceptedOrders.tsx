import { useState } from "react";
import ModalComponent from "../../react-components/Modal/Modal";
import { createShippment } from "../../services/orderService";
import OrderTable from "./OrderTable";
import Loader from "../../common/Loder";
import { Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import { createShipmentValues } from "../../constants/InitialValues";
import { shipmentValidation } from "../../validations/CreateShipmentValidations";
import FormikControl from "../../common/Formik/FormikControl";
import ErrorMsg from "../../common/ErrorMessage";

interface acceptedOrdersProps {
  data: Array<any>;
  orderType: string;
  shipperList: Array<any>;
  locationListData: Array<any>;
  viewSingleOrderFn: (orderID: string) => void;
  ordersListFn: any;
}

const AcceptedOrders = ({
  data,
  orderType,
  viewSingleOrderFn,
  shipperList,
  locationListData,
  ordersListFn,
}: acceptedOrdersProps) => {
  const [modalShow, setModalShow] = useState(false);
  const [statusModalShow, setStatusModalShow] = useState(false);
  const [purchaseOrder, setPurchaseOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const closeShipmentModal = () => setModalShow(false);
  const closeStatusModal = () => setStatusModalShow(false);

  const openShipmentModal = (value: string) => {
    setModalShow(true);
    setPurchaseOrder(value);
  };

  const createShippmentFn = (values: any) => {
    setIsLoading(true);
    const payload = {
      purchase_order: purchaseOrder,
      custodion_name: values.custodionName,
      shipper: values.shipper,
      pack_type: values.packageType,
      inner_pack_type: values.innerPackType,
      pack_net_weight: values.netWeight,
      pack_gross_weight: values.grossWeight,
      pack_dimensions: values.packageDimensions,
      pickup_loc_gln: values.location,
    };

    createShippment(payload)
      .then((res) => {
        setIsLoading(false);
        setModalShow(false);
        setStatusModalShow(true);
        setStatus("success");
        ordersListFn("ACCEPTED");
      })
      .catch((err) => {
        setIsLoading(false);
        setStatusModalShow(true);
        setStatus("error");
      });
  };

  return (
    <>
      <OrderTable
        data={data}
        orderType={orderType}
        viewSingleOrderFn={viewSingleOrderFn}
        openShipmentModal={openShipmentModal}
      />

      {status === "success" && (
        <ModalComponent
          show={statusModalShow}
          title="Dispatched successfully"
          modalType="success"
          closeModal={closeStatusModal}
        />
      )}

      <Modal
        show={modalShow}
        onHide={closeShipmentModal}
        className="order-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5>Create Shipment</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={createShipmentValues}
            validationSchema={shipmentValidation}
            validateOnMount
            enableReinitialize
            onSubmit={(values, actions) => {
              createShippmentFn(values);
            }}
          >
            {(formik) => {
              const { handleChange, handleSubmit, values } = formik;

              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="custodionName"
                        label=" Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormikControl
                        control="select"
                        name="shipper"
                        label="Shipper"
                        options={shipperList}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="packageType"
                        label="Package Type"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="innerPackType"
                        label="Inner Pack Type"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="netWeight"
                        label="Net Weight"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="grossWeight"
                        label="Gross Weight"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="packageDimensions"
                        label="Package Dimensions"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="select"
                        name="location"
                        label="Location"
                        options={locationListData}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <ErrorMsg errMsg={"Something went wrong !"} />
                  )}

                  <div className="text-center auth-button-div">
                    <button
                      className="btn secondary-btn float-end"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>

      {isLoading && <Loader />}
    </>
  );
};

export default AcceptedOrders;
