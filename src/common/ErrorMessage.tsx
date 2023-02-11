import React from "react";

const ErrorMsg = ({ errMsg, className }: any) => {
  return (
    <div className={`${className ? className : " "} error-msg`}>{errMsg}</div>
  );
};

export default ErrorMsg;
