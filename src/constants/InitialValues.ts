const registerValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  primaryPhone: "",
  secondaryPhone: "",
  // companyName: "",
  // companyGLN: "",
  // regisrationNo: "",
  // companyLocalCode: "",
  category: "",
};

const LoginValues = {
  email: "",
  password: "",
};

const forgotValues = {
  email: "",
};

const changePwdValues = {
  password: "",
  confirmPassword: "",
};

const createShipmentValues = {
  custodionName: "",
  shipper: "",
  packageType: "",
  innerPackType: "",
  netWeight: "",
  grossWeight: "",
  packageDimensions: "",
  location: "",
};

const addProductValues = {
  brandName: "",
  genericName: "",
  labelerName: "",
  gtin: "",
  productNDC: "",
  PackageNDC: "",
  unitPrice: "",
  dosage: "",
  dosageForm: "",
  packageDetails: "",
};

const uploadBulkProductValues = {
  file: "",
};

const addLocationValues = {
  locationGLN: "",
  parentGLN: "",
  internalCode: "",
  locationName: "",
  address1: "",
  address2: "",
  latitude: "",
  longitude: "",
  active: false,
  physical: false,
};

export {
  registerValues,
  LoginValues,
  forgotValues,
  changePwdValues,
  createShipmentValues,
  addProductValues,
  uploadBulkProductValues,
  addLocationValues,
};
