import * as Yup from "yup";

const registerValidation = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(3, "Length must be at least 3 characters"),
  lastName: Yup.string()
    .required("Required")
    .min(3, "Length must be at least 3 characters"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Length must be 8 characters"),
  primaryPhone: Yup.string()
    .required("Required")
    .min(11, "Length must be 11 characters")
    .max(11, "Length must be 11 characters"),
  secondaryPhone: Yup.string()
    .required("Required")
    .min(11, "Length must be 11 characters")
    .max(11, "Length must be 11 characters"),
  // companyName: Yup.string()
  //   .required("Required")
  //   .min(4, "Length must be 4 characters"),
  // companyGLN: Yup.string()
  //   .required("Required")
  //   .min(13, "Length must be 13 characters")
  //   .max(13, "Length must be 13 characters"),
  // regisrationNo: Yup.string()
  //   .required("Required")
  //   .min(8, "Length must be 8 characters")
  //   .max(8, "Length must be 8 characters"),
  // companyLocalCode: Yup.string()
  //   .required("Required")
  //   .min(7, "Length must be 7 characters")
  //   .max(7, "Length must be 7 characters"),
  category: Yup.string().required("Required"),
});

const loginValidation = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required"),
});

const forgotValidation = Yup.object().shape({
  email: Yup.string().email().required("Required"),
});

const changePwdValidation = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "Length must be 8 characters"),
  confirmPassword: Yup.string()
    .required("Required")
    .when("password", {
      is: (val: any) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});

export {
  registerValidation,
  loginValidation,
  forgotValidation,
  changePwdValidation,
};
