import React from 'react'
import Modal from 'react-modal'

import styles from "./Auth.module.sass"
import {Login} from "./Login";
import {Registration} from "./Registration";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {turnOffModal} from "../../store/AuthModal";


export const AuthModal = () => {
    const {isOpenModal, currentForm} = useSelector((state: RootState) => state.showAuthModal)
    const dispatch = useDispatch()
    const closeModal = () => dispatch(turnOffModal())

    return (
        <Modal
            isOpen={isOpenModal}
            className={styles.wrapperAuth}
            overlayClassName={styles.overlay}
            onRequestClose={closeModal}
        >
            {currentForm === 'login' ?
                <Login closeModal={closeModal}/> :
                <Registration closeModal={closeModal}/>
            }
        </Modal>
    )
}

