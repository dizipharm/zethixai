import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import { Modal, Button } from "react-bootstrap";
import { AnySchema } from "yup";
import styles from "./Modal.module.scss";

interface ModalProps {
  show: boolean;
  title: string;
  modalType: string;
  confirmBtn?: boolean;
  closeModal?: any;
  confirmModal?: any;
}

const ModalComponent = ({
  show,
  title,
  modalType,
  confirmBtn,
  closeModal,
  confirmModal,
}: ModalProps) => {
  const modalTypeFn = () => {
    if (modalType === "info") {
      return (
        <FontAwesomeIcon
          icon={faInfoCircle}
          className={`${styles.icon} ${styles.infoIcon}`}
        />
      );
    } else if (modalType === "success") {
      return (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${styles.icon} ${styles.successIcon}`}
        />
      );
    } else if (modalType === "error") {
      return (
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className={`${styles.icon} ${styles.errorIcon}`}
        />
      );
    }
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false} centered>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.iconDiv}> {modalTypeFn()}</div>
        <h3 className={styles.heading}>{title}</h3>
        <div className={styles.btnDiv}>
          <Button
            variant="outline-secondary"
            className={styles.btn}
            onClick={closeModal}
          >
            {modalType !== "info" ? "Close" : "Cancel"}
          </Button>
          {confirmBtn && (
            <Button
              variant="success"
              className={styles.btn}
              onClick={confirmModal}
            >
              Confirm
            </Button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
