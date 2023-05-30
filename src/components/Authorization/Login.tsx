import React, {useEffect} from 'react'
import Modal from 'react-modal'
import * as yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Formik, FormikHelpers} from 'formik'

import {Props} from "./modal";
import styles from "./Auth.module.sass"

import {ButtonAuth, ButtonPartner, Input, LinkAuth} from '../UI/UI'
import {Registration} from './Registration'

import {RootState} from '../../store/store'
import {turnOffRegistration, turnOnRegistration} from '../../store/Registration'
import {setBalance, setEmail} from '../../store/Profile'

import {useAuthorizationMutation, useLazyGetProfileQuery} from '../../services/auth'
import {AuthenticationRequest} from '../../models'
import {Icon} from "../Icon/Icon";

export const Login = ({modalAuth, closeModal}: Props) => {
    const [login, data] = useAuthorizationMutation()
    const [getProfile] = useLazyGetProfileQuery()

    const stateRegistration = useSelector((state: RootState) => state.showRegistration.isOpenModal)
    const dispatch = useDispatch()
    function openModalRegistration() {
        closeModal()
        dispatch(turnOnRegistration())
    }

    function setData(balanceFetch: number | undefined, emailFetch: string | undefined) {
        dispatch(setBalance(balanceFetch))
        dispatch(setEmail(emailFetch))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProfile(null)
                .then(prom => prom.data)
                .then(body => setData(body?.balance, body?.email))
        }
    }, [getProfile, setData])


    const initialValues: AuthenticationRequest = {
        login: '',
        password: '',
    }

    function onSubmitFormik(values: AuthenticationRequest, helpers: FormikHelpers<AuthenticationRequest>) {
        if (values.login !== '' && values.password !== '') {
            login(values)
                .then(res => {
                    if ('data' in res) {
                        localStorage.setItem('token', res.data.token as string)
                        helpers.resetForm()
                        closeModal()
                    }
                })
                .then(() => {
                    getProfile(null)
                        .then(prom => setData(prom?.data?.balance, prom?.data?.email))
                })
        }
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email('Неверный формат электронной почты').required('Поле обязательно для заполнения'),
        password: yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                'Пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы, а также цифры'
            )
            .required('Поле пароля обязательно для заполнения'),
    });

    return (
        <>
            <Modal
                isOpen={modalAuth}
                className={styles.wrapperAuth}
                overlayClassName={styles.overlay}
                onRequestClose={closeModal}
            >
                <Formik
                    <AuthenticationRequest>
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values, helpers) => onSubmitFormik(values, helpers)}>
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          errors
                      }) => (
                        <Form onSubmit={handleSubmit} className={styles.auth}>
                            <div className={styles.authHeader}>
                                <span>Вход</span>
                                <button type='submit' onClick={() => {
                                    closeModal()
                                }}>
                                    <Icon name="cross"></Icon>
                                </button>
                            </div>
                            <div className={styles.authMain}>
                                <div className={styles.fields}>
                                    <Input
                                        placeholder={'Номер телефона'}
                                        name={'login'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.login}
                                    />

                                    {errors.login && (
                                        <div className={styles.error}>
                                            {errors.login}
                                        </div>
                                    )}


                                    <Input
                                        placeholder={'Пароль'}
                                        name={'password'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />

                                    {errors.password && (
                                        <div className={styles.error}>
                                            {errors.password}
                                        </div>
                                    )}

                                    {data.isError &&
                                        <span className={styles.errorMessage}>Неверное имя пользователя или пароль</span>}
                                </div>
                                <div className={styles.login}>
                                    <ButtonAuth type='submit'>Войти</ButtonAuth>
                                    <div className={styles.smsLogin}>
                                        <LinkAuth onClick={() => {}}>{'Войти с помощью смс'}</LinkAuth>
                                        <LinkAuth onClick={() => openModalRegistration()}>{'Регистрация'}</LinkAuth>
                                    </div>
                                </div>
                                <ButtonPartner type={"button"}>Вход для партнёров</ButtonPartner>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>

            <Registration modalAuth={stateRegistration} closeModal={() => dispatch(turnOffRegistration())}/>
        </>
    )
}

