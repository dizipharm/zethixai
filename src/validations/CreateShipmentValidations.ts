import * as Yup from "yup";

const shipmentValidation = Yup.object().shape({
  custodionName: Yup.string().required("Required"),
  shipper: Yup.string().required("Required"),
  packageType: Yup.string().required("Required"),
  innerPackType: Yup.string().required("Required"),
  netWeight: Yup.string().required("Required"),
  grossWeight: Yup.string().required("Required"),
  packageDimensions: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
});

export { shipmentValidation };
