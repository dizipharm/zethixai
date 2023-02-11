import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FloatingLabel, Form } from "react-bootstrap";

const Input = (props) => {
  const { label, name, type, onChange } = props;

  return (
    <div className="form-react-bootstrap">
      <FloatingLabel controlId={name} label={label}>
        <Form.Control
          type={type || "text"}
          name={name}
          placeholder={label}
          onChange={onChange}
        />
      </FloatingLabel>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Input;
