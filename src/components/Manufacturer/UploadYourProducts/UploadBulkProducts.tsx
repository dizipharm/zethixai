import { Formik } from "formik";
import { useState } from "react";
import { Col, Form, Nav, Row } from "react-bootstrap";
import FormikControl from "../../../common/Formik/FormikControl";
import { uploadBulkProductValues } from "../../../constants/InitialValues";
import { getCompanyID, getCompanyName } from "../../../services/AuthService";
import { addProduct } from "../../../services/productService";
import { uploadBulkProductValidation } from "../../../validations/addProductValidation";
import Loader from "../../../common/Loder";
import { useHistory } from "react-router-dom";
import ModalComponent from "../../../react-components/Modal/Modal";

const UploadBulkProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusModalShow, setStatusModalShow] = useState(false);

  const history = useHistory();

  const handleAddProduct = (values: any) => {};

  const closeStatusModal = () => {
    setStatusModalShow(false);
    history.push("/manufacturer/added-product-list");
  };

  return (
    <>
      <Row className="justify-content-md-center mt-4">
        <Formik
          initialValues={uploadBulkProductValues}
          validationSchema={uploadBulkProductValidation}
          validateOnMount
          enableReinitialize
          onSubmit={(values, actions) => {
            handleAddProduct(values);
          }}
        >
          {(formik) => {
            const { handleChange, handleSubmit, values } = formik;
            return (
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <FormikControl
                      control="input"
                      type="file"
                      name="file"
                      label="Upload your products"
                      onChange={handleChange}
                    />
                    <small style={{ marginTop: "-15px", display: "block" }}>
                      (Supported file to upload like csv,excel etc)
                    </small>
                  </div>
                </div>

                <div className="text-center ">
                  <button className="btn secondary-btn  " type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Row>

      <ModalComponent
        show={statusModalShow}
        title="Product added successfully"
        modalType="success"
        closeModal={closeStatusModal}
      />

      {isLoading && <Loader />}
    </>
  );
};

export default UploadBulkProducts;
