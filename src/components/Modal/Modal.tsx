import React from 'react'

import styles from "./Modal.module.sass"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {destroyModal} from "../../store/Modal";
import ReactModal from "react-modal";

export const Modal = () => {
    const {currentForm} = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    return (
        <ReactModal
            isOpen={currentForm !== null}
            className={styles.modalWrapper}
            overlayClassName={styles.overlay}
            onRequestClose={() => dispatch(destroyModal())}
        >
            {currentForm}
        </ReactModal>
    )
}

