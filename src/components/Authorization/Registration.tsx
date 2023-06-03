import {useRegistrationMutation} from '../../services/auth'
import {RegisterBody} from '../../models/profile'
import {turnOnLogin} from '../../store/Modal'


import React from 'react'
import * as yup from 'yup'
import {useDispatch} from 'react-redux'
import {Form, Formik, FormikHelpers} from 'formik'

import {FormProps} from "./modal";
import styles from "./Auth.module.sass"

import {ButtonAuth, Input} from '../UI/UI'
import {Icon} from "../Icon/Icon";

export const Registration = ({closeModal}: FormProps) => {
    const [register, result] = useRegistrationMutation()
    const dispatch = useDispatch()

    const initialValues: RegisterBody = {
        email: '',
        phone_number: '',
        password: '',
        balance: '',
    }

    function onSubmitFormik(values: RegisterBody, helper: FormikHelpers<RegisterBody>) {
        register(values)
        helper.resetForm()
        closeModal()
        dispatch(turnOnLogin())
    }

    const validationRegister = yup.object({
        email: yup.string().email('Неправильный формат почты').required(),
        phone_number: yup.string()
            .matches(
                /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
                'Некорректный формат номера телефона'
            )
            .required('Поле номера телефона обязательно для заполнения'),
        password: yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                'Пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы, а также цифры'
            )
            .required('Поле пароля обязательно для заполнения'),
        balance: yup.number().positive("Баланс должен быть положительным числом").required()
    })


    return (
        <Formik
            <RegisterBody>
            validationSchema={validationRegister}
            initialValues={initialValues}
            onSubmit={(values, helper) => onSubmitFormik(values, helper)}>
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  errors
              }) => (
                <Form onSubmit={handleSubmit} className={styles.auth}>
                    <div className={styles.authHeader}>
                        <span>Регистрация</span>
                        <button onClick={closeModal} type={'button'}>
                            <Icon name="cross"></Icon>
                        </button>
                    </div>
                    <div className={styles.authMain}>
                        <div className={styles.fields}>
                            <Input
                                name={'email'}
                                placeholder={'Почта'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />

                            {errors.email && (
                                <div className={styles.error}>
                                    {errors.email}
                                </div>
                            )}

                            <Input
                                name={'phone_number'}
                                placeholder={'Номер телефона'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone_number}
                            />

                            {errors.phone_number && (
                                <div className={styles.error}>
                                    {errors.phone_number}
                                </div>
                            )}
                            <Input
                                name={'password'}
                                type={'password'}
                                placeholder={'Пароль'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />

                            {errors.password && (
                                <div className={styles.error}>
                                    {errors.password}
                                </div>
                            )}

                            <Input
                                name={'balance'}
                                placeholder={'Баланс'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.balance}

                            />

                            {errors.balance && (
                                <div className={styles.error}>
                                    {errors.balance}
                                </div>
                            )}

                            <div className={styles.login}>
                                <ButtonAuth
                                    disabled={result.isLoading}
                                    type={'submit'}
                                >
                                    Зарегистрироваться
                                </ButtonAuth>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

