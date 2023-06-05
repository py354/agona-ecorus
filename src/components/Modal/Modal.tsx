import React from "react";

import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import styles from "./Modal.module.sass";
import { RootState } from "../../store/store";
import { destroyModal } from "../../store/Modal";

export function Modal() {
  const { currentForm } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  return (
    <ReactModal
      isOpen={currentForm !== null}
      className={styles.modalWrapper}
      overlayClassName={styles.overlay}
      onRequestClose={() => dispatch(destroyModal())}
    >
      {currentForm}
    </ReactModal>
  );
}
