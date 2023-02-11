import React from "react";
import Input from "./Input";
import SelectControl from "./Select";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "select":
      return <SelectControl {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
