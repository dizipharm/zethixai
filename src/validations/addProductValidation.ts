import * as Yup from "yup";

const addProductValidation = Yup.object().shape({
  brandName: Yup.string().required("Required"),
  genericName: Yup.string().required("Required"),
  labelerName: Yup.string().required("Required"),
  gtin: Yup.string().required("Required"),
  productNDC: Yup.string().required("Required"),
  PackageNDC: Yup.string().required("Required"),
  unitPrice: Yup.string().required("Required"),
  dosage: Yup.string().required("Required"),
  dosageForm: Yup.string().required("Required"),
  packageDetails: Yup.string().required("Required"),
});

const uploadBulkProductValidation = Yup.object().shape({
  file: Yup.string().required("Required"),
});

export { addProductValidation, uploadBulkProductValidation };
