import { Formik } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import FormikControl from "../../common/Formik/FormikControl";
import { addLocationValues } from "../../constants/InitialValues";
import { addLocationValidation } from "../../validations/addLocationValidation";
import { addLocation } from "../../services/locationService";
import { useState } from "react";
import Loader from "../../common/Loder";
import { getCompanyID } from "../../services/AuthService";
import { useHistory, useLocation } from "react-router-dom";

const AddLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const addLocationFn = (values: any) => {
    const payload = {
      location_gln: values.locationGLN,
      parent_gln: values.parentGLN,
      internal_code: values.internalCode,
      location_name: values.locationName,
      address1: values.address1,
      address2: values.address2,
      loc_lat: values.latitude,
      loc_long: values.longitude,
      company: getCompanyID(),
      is_physical: values.active,
      is_active: values.physical,
    };
    setIsLoading(true);
    addLocation(payload)
      .then((res) => {
        setIsLoading(false);
        if (pathname.includes("distributor")) {
          history.push("/distributor/location-list");
        } else {
          history.push("/manufacturer/location-list");
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Row className="justify-content-md-center mt-4">
        <Col md="10">
          <Formik
            initialValues={addLocationValues}
            validationSchema={addLocationValidation}
            validateOnMount
            enableReinitialize
            onSubmit={(values, actions) => {
              addLocationFn(values);
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
                        name="locationGLN"
                        label="Location GLN"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="parentGLN"
                        label="Parent GLN"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="internalCode"
                        label="Internal Code"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="locationName"
                        label="Location Name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="address1"
                        label="Address 1"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="address2"
                        label="Address 2"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="latitude"
                        label="Location Latitude"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <FormikControl
                        control="input"
                        name="longitude"
                        label="Location Longitude"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <Form.Check
                        type="checkbox"
                        label="Active"
                        name="active"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Physical"
                        name="physical"
                      />
                    </div>
                  </div>

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
        </Col>
      </Row>
      {isLoading && <Loader />}
    </>
  );
};

export default AddLocation;
