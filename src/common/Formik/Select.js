import React from "react";
import { ErrorMessage } from "formik";
import TextError from "./TextError";
import { FloatingLabel, Form } from "react-bootstrap";

function Select(props) {
  const {
    name,
    optname,
    label,
    value,
    options,
    error,
    onChange,
    placeholder,
    ...rest
  } = props;

  return (
    <div className="form-react-bootstrap">
      <FloatingLabel controlId={name} label={label}>
        <Form.Select onChange={onChange}>
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option._id} value={option.optValue}>
              {optname ? option[optname] : option.name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      {/* <Field
        as="select"
        name={name}
        optname={optname}
        id={name}
        className="form-control"
        placeholder="aasd"
        {...rest}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option._id} value={option.optValue}>
            {optname ? option[optname] : option.name}
          </option>
        ))}
      </Field>
      <label className="form-label" htmlFor={name}>
        <span>{label}</span>
      </label> */}
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Select;
