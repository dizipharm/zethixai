import { Formik, Form } from "formik";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// @ts-ignore
import logoIcon from "../../../assets/images/logo-icon.png";
import FormikControl from "../../../common/Formik/FormikControl";
import { forgotValues } from "../../../constants/InitialValues";
import { forgotPassword } from "../../../services/AuthService";
import { forgotValidation } from "../../../validations/AuthValidations";
import Loader from "../../../common/Loder";
import ErrorMsg from "../../../common/ErrorMessage";

import "../Authentication.styles.scss";

const ForgotPassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleforgot = (values: any) => {
    const email = values.email;
    setLoading(true);

    forgotPassword(email)
      .then((res) => {
        const resData = res.data;
        setLoading(false);
        history.push(`/change-password/${resData.token}`);
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
      <div className="mt-5 login-section">
        <div className="mb-3 p-3 auth-div">
          <Formik
            initialValues={forgotValues}
            validationSchema={forgotValidation}
            validateOnMount
            enableReinitialize
            onSubmit={(values, actions) => {
              handleforgot(values);
            }}
          >
            {(formik) => {
              const { handleChange, handleSubmit, values } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <img className="auth-logo" src={logoIcon} />
                  <h3 className="auth-heading">Forgot Password</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <FormikControl
                        control="input"
                        type="text"
                        name="email"
                        label="Email"
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
      {loading && <Loader />}
    </>
  );
};

export default ForgotPassword;
