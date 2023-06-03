import React from "react"
import styles from "./UserInfo.module.sass"
import {Icon} from "../../Icon/Icon";
import Ava from "../../../assets/ava.png"

import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../store/store'
import {turnOnLogin} from "../../../store/AuthModal";
import {AuthModal} from "../../Authorization/Modal";
import {useNavigate} from "react-router-dom";

export const UserInfo = () => {
    const dispatch = useDispatch()

    const profile = {
        showBalance: useSelector((state: RootState) => state.showProfile.balance),
        showEmail: useSelector((state: RootState) => state.showProfile.email)
    }

    const navigate = useNavigate()
    const onClick = (localStorage.getItem('token')) ?
        () => navigate('/account') :
        () => dispatch(turnOnLogin())


    return (
        <>
            <div className={styles.block} onClick={onClick}>
                <div className={styles.place}>
                    <div className={styles.pin}><Icon name='pin'/></div>
                    <span className={styles.city}>Казань</span>
                </div>
                <div className={styles.money}>
                    <div>
                        <Icon name={"currency"}/>
                    </div>
                    <span className={styles.balance}>{profile.showBalance}</span>

                </div>
                <div className={styles.avatar}>
                    <div><img src={Ava} alt={"avatar"}/></div>
                    <button className={styles.text2}>{profile.showEmail}</button>
                </div>
            </div>
            <AuthModal/></>
    )
}
