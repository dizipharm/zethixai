import * as Yup from "yup";

const addLocationValidation = Yup.object().shape({
  locationGLN: Yup.number()
    .typeError("Only numbers allowed")
    .required("Required"),
  parentGLN: Yup.number()
    .typeError("Only numbers allowed")
    .required("Required"),
  internalCode: Yup.string().required("Required"),
  locationName: Yup.string().required("Required"),
  address1: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
  latitude: Yup.number().typeError("Only numbers allowed").required("Required"),
  longitude: Yup.number()
    .typeError("Only numbers allowed")
    .required("Required"),
});

export { addLocationValidation };
