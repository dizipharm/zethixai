import React from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
// @ts-ignore
import logoIcon from "../../../assets/images/logo-icon.png";
// @ts-ignore
import aiDigitalLogo from "../../../assets/images/ai-dizital-logo.png";
import { setToken, setUserData, signIn } from "../../../services/AuthService";
import { Link } from "react-router-dom";
import { LoginValues } from "../../../constants/InitialValues";
import { loginValidation } from "../../../validations/AuthValidations";
import FormikControl from "../../../common/Formik/FormikControl";
import Loader from "../../../common/Loder";
import ErrorMsg from "../../../common/ErrorMessage";
import "../Authentication.styles.scss";

interface LoginProps {
  history: any;
}

interface LoginState {}

class Login extends React.Component<LoginProps, LoginState> {
  state = {
    errMsg: "",
    loading: false,
  };

  handleLogin = (values: any) => {
    this.setState({ loading: true });
    const user = {
      email: values.email,
      password: values.password,
    };
    signIn(user)
      .then((res) => {
        this.setState({ loading: false });
        const companyType = res.data.company.company_type;

        if (companyType === 0) {
          this.props.history.push("/manufacturer/dashboard");
        } else if (companyType === 1) {
          this.props.history.push("/distributor/scan-orders");
        } else {

        }


        window.location.reload();
        setToken(res.data.token);
        setUserData(res.data);
      })
      .catch((err) => {
        const error =
          err && err.response && err.response.data && err.response.data.message;
        this.setState({ errMsg: error, loading: false });
      });
  };

  handleForgotPassword = () => {
    this.props.history.push("/forgot-password");
  };

  render() {
    const { errMsg, loading } = this.state;
    return (
      <>
        <div className="mt-1 login-section">
          <div className="mb-3 auth-div">
            <Formik
              initialValues={LoginValues}
              validationSchema={loginValidation}
              validateOnMount
              enableReinitialize
              onSubmit={(values, actions) => {
                this.handleLogin(values);
              }}
            >
              {(formik) => {
                const { handleChange, handleSubmit, values } = formik;

                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <img className="auth-logo" src={logoIcon} />
                    <h3 className="auth-heading">Login to Zethix AI</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <FormikControl
                          control="input"
                          type="text"
                          name="email"
                          label="Email"
                          value={values.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <FormikControl
                          control="input"
                          type="password"
                          name="password"
                          label="Password"
                          value={values.password}
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

            <div className="mt-2">
              <a
                href="#"
                className="auth-href"
                onClick={this.handleForgotPassword}
              >
                Forgot Email ID or Password ?
              </a>
            </div>
          </div>

          <div className="text-center">
            <FontAwesomeIcon icon={faGooglePlay} /> &nbsp;
            <FontAwesomeIcon icon={faApple} />
          </div>

          <p className="auth-href">
            Don't have an account?{" "}
            <Link to={"/register"}>
              {" "}
              <strong> Signup now </strong>
            </Link>
          </p>

          <div className="mt-3 text-center">
            <p className="powered-by">Powered by &nbsp;</p>
            <img src={aiDigitalLogo} style={{ height: "18px" }} />
          </div>
        </div>
        {loading && <Loader />}
      </>
    );
  }
}

export default Login;
