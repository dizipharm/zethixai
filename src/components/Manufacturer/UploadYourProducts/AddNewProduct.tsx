import { Formik } from "formik";
import { useState } from "react";
import { Col, Form, Nav, Row } from "react-bootstrap";
import FormikControl from "../../../common/Formik/FormikControl";
import { addProductValues } from "../../../constants/InitialValues";
import { getCompanyID, getCompanyName } from "../../../services/AuthService";
import { addProduct } from "../../../services/productService";
import { addProductValidation } from "../../../validations/addProductValidation";
import Loader from "../../../common/Loder";
import { useHistory } from "react-router-dom";
import ModalComponent from "../../../react-components/Modal/Modal";

const AddNewProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusModalShow, setStatusModalShow] = useState(false);

  const history = useHistory();

  const handleAddProduct = (values: any) => {
    const payload = {
      product_ndc: values.PackageNDC,
      generic_name: values.genericName,
      labeler_name: values.labelerName,
      brand_name: values.brandName,
      active_ingredients: [
        {
          name: values.brandName,
          strength: values.dosage,
        },
      ],
      finished: true,
      packaging: [
        {
          package_ndc: values.PackageNDC,
          description: values.packageDetails,
          marketing_start_date: null,
          sample: true,
        },
      ],
      listing_expiration_date: null,
      openfda: {
        manufacturer_name: [getCompanyName()],
        spl_set_id: [],
        is_original_packager: [true],
        unii: [],
      },
      marketing_category: null,
      dosage_form: values.dosageForm,
      spl_id: null,
      product_type: null,
      route: [],
      marketing_start_date: null,
      product_id: null,
      brand_name_base: null,
      is_active: true,
      company: getCompanyID(),
      price: values.unitPrice,
      gtin: values.gtin,
    };
    setIsLoading(true);
    addProduct(payload)
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
    history.push("/manufacturer/added-product-list");
  };

  return (
    <>
      <Row className="justify-content-md-center mt-4">
        <Col md="10">
          <Formik
            initialValues={addProductValues}
            validationSchema={addProductValidation}
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
                        type="text"
                        name="brandName"
                        label="Brand Name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="text"
                        name="genericName"
                        label="Generic Name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="text"
                        name="labelerName"
                        label="Labeler Name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="text"
                        name="gtin"
                        label="GTIN"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="text"
                        name="dosage"
                        label="Dosage"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="text"
                        name="dosageForm"
                        label="Dosage Form"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="productNDC"
                        label="Product NDC"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="PackageNDC"
                        label="Package NDC"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="text"
                        name="unitPrice"
                        label="Unit Price"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="text"
                        name="packageDetails"
                        label="Package Details"
                        onChange={handleChange}
                      />
                    </div>

                    {/* <div className="col-md-6">
                      <FormikControl
                        control="input"
                        type="file"
                        name="regisrationNo"
                        label="Upload Product Image"
                        onChange={handleChange}
                      />
                    </div> */}
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
        </Col>
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

export default AddNewProduct;
