import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
// @ts-ignore
import logoIcon from "../../../assets/images/logo-icon.png";
// @ts-ignore
import aiDigitalLogo from "../../../assets/images/ai-dizital-logo.png";

import FormikControl from "../../../common/Formik/FormikControl";
import { registerValidation } from "../../../validations/AuthValidations";
import { registerValues } from "../../../constants/InitialValues";
import Loader from "../../../common/Loder";

import "../Authentication.styles.scss";
import { signUp } from "../../../services/AuthService";
import ErrorMsg from "../../../common/ErrorMessage";

interface RegisterProps {
  history: any;
}

interface RegisterState {}

class Register extends React.Component<RegisterProps, RegisterState> {
  state = {
    errMsg: "",
    loading: false,
  };

  handleSubmitRegister = (values: any) => {
    this.setState({ loading: true });

    const user = {
      email: values.email,
      password: values.password,
      first_name: values.firstName,
      last_name: values.lastName,
      contact_no1: values.primaryPhone,
      contact_no2: values.secondaryPhone,
      company_name: values.companyName,
      comapny_gln: values.companyGLN,
      regisration_no: values.regisrationNo,
      company_type: values.category,
      company_local_code: values.companyLocalCode,
    };

    signUp(user)
      .then((res) => {
        this.setState({ loading: false });

        this.props.history.push({
          pathname: "/register-success",
          state: {
            category: values.category,
            adminId: res?.data?.company?.admin,
          },
        });
      })
      .catch((err) => {
        const error =
          err && err.response && err.response.data && err.response.data.message;
        this.setState({ errMsg: error, loading: false });
      });
  };

  render() {
    const { errMsg, loading } = this.state;
    return (
      <>
        <div className="register-section">
          <div className="mt-4 mb-3 p-3 auth-div">
            <Formik
              initialValues={registerValues}
              validationSchema={registerValidation}
              validateOnMount
              enableReinitialize
              onSubmit={(values, actions) => {
                this.handleSubmitRegister(values);
              }}
            >
              {(formik) => {
                const { handleChange, handleSubmit, values } = formik;
                return (
                  <Form onSubmit={handleSubmit}>
                    <img className="auth-logo" src={logoIcon} />
                    <h3 className="auth-heading">Register to Zethix AI</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="firstName"
                          label="First Name"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="lastName"
                          label="Last Name"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="email"
                          label="Business Email"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="password"
                          name="password"
                          label="Password"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="primaryPhone"
                          label="Phone No.(Primary)"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="secondaryPhone"
                          label="Phone No.(Secondary)"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="companyName"
                          label="Company Name"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="companyGLN"
                          label="Company GLN"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="regisrationNo"
                          label="Registration Number"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="input"
                          type="text"
                          name="companyLocalCode"
                          label="Company Local Code"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormikControl
                          control="select"
                          name="category"
                          label="Category"
                          options={[
                            { _id: 0, optValue: 0, name: "Manufacturer" },
                            { _id: 1, optValue: 1, name: "Distributor" },
                            { _id: 2, optValue: 2, name: "HCP" },
                            { _id: 3, optValue: 3, name: "HCO" },
                            { _id: 4, optValue: 4, name: "Retailer" },
                            { _id: 5, optValue: 5, name: "Shipping Partner" },
                          ]}
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

          <div className="text-center">
            <FontAwesomeIcon icon={faGooglePlay} /> &nbsp;
            <FontAwesomeIcon icon={faApple} />
          </div>

          <p className="auth-href">
            Do you have an account?
            <Link to={"/login"}>
              <strong> Signin now </strong>
            </Link>
          </p>

          <div className="my-4 text-center">
            <p className="powered-by">Powered by &nbsp;</p>
            <img src={aiDigitalLogo} style={{ height: "18px" }} />
          </div>
        </div>
        {loading && <Loader />}
      </>
    );
  }
}

export default Register;
