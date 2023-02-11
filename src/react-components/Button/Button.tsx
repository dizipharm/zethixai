import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Button.module.scss";

interface ButtonProps {
  name: string;
  btnSm?: string;
  btnIcon?: any;
  btnWidth?: string;
}

const ButtonComponent: React.FunctionComponent<ButtonProps> = ({
  name,
  btnSm,
  btnIcon,
  btnWidth,
}) => {
  return (
    <Button
      style={{ width: btnWidth }}
      className={` ${btnSm ? "btn-sm" : ""} ${styles.button} ${
        styles.buttonSmall
      }`}
    >
      {name}
      {btnIcon && (
        <>
          &nbsp; <FontAwesomeIcon icon={btnIcon} />
        </>
      )}
    </Button>
  );
};

export default ButtonComponent;

// const ButtonComponent = (props: ButtonProps) => {
//   const { name } = props;
//   return <Button className={styles.btn}>{name}</Button>;
// };

// export default ButtonComponent;
