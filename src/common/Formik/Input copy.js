import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FloatingLabel, Form } from "react-bootstrap";

const Input = (props) => {
  const { label, name, value, type, touched, errors, onChange } = props;

  return (
    <div className="form-group form-field">
      <Form.Group md="" controlId="validationFormik01">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type || "text"}
          name={name}
          placeholder={""}
          onChange={onChange}
          isInvalid={touched[name] && !!errors[name]}
        />
        <Form.Control.Feedback type="invalid">
          {errors[name]}
        </Form.Control.Feedback>
      </Form.Group>
    </div>
  );
};

export default Input;
