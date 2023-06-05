import React from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Form, Formik, FormikHelpers } from "formik";

import styles from "./Auth.module.sass";

import { ButtonAuth, ButtonPartner, Input, LinkAuth } from "../UI/UI";

import { setModal, destroyModal } from "../../store/Modal";

import { useAuthorizationMutation } from "../../services/auth";
import { AuthenticationRequest } from "../../models";
import { Icon } from "../Icon/Icon";
import { Registration } from "./Registration";

interface Props {
    setToken: (token: string) => void;
}

export function Login({ setToken }: Props) {
    const [login, data] = useAuthorizationMutation();

    const dispatch = useDispatch();

    const closeModal = () => dispatch(destroyModal());

    const turnOnRegistration = () =>
        dispatch(setModal(<Registration setToken={setToken} />));

    const initialValues: AuthenticationRequest = {
        login: "",
        password: "",
    };

    const onSubmit = (
        values: AuthenticationRequest,
        helpers: FormikHelpers<AuthenticationRequest>,
    ) => {
        login(values).then((res) => {
            if ("data" in res) {
                localStorage.setItem("token", res.data.token as string);
                setToken(res.data.token as string);
                helpers.resetForm();
                closeModal();
            }
        });
    };

    const validationSchema = yup.object().shape({
        login: yup.string().required("Поле обязательно для заполнения"),
        password: yup
            .string()
            .min(5, "Минимальная длина пароля - 5 символов")
            .required("Поле пароля обязательно для заполнения"),
    });

    return (
        <Formik<AuthenticationRequest>
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, helpers) => onSubmit(values, helpers)}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
                <Form onSubmit={handleSubmit} className={styles.auth}>
                    <div className={styles.authHeader}>
                        <span>Вход</span>
                        <button type="button" onClick={() => closeModal()}>
                            <Icon name="cross" />
                        </button>
                    </div>
                    <div className={styles.authMain}>
                        <div className={styles.fields}>
                            <Input
                                placeholder="Номер телефона"
                                name="login"
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
                                placeholder="Пароль"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />

                            {errors.password && (
                                <div className={styles.error}>
                                    {errors.password}
                                </div>
                            )}

                            {data.isError && (
                                <span className={styles.errorMessage}>
                                    Неверное имя пользователя или пароль
                                </span>
                            )}
                        </div>
                        <div className={styles.login}>
                            <ButtonAuth type="submit">Войти</ButtonAuth>
                            <div className={styles.links}>
                                <LinkAuth onClick={() => {}}>
                                    Войти с помощью смс
                                </LinkAuth>
                                <LinkAuth onClick={turnOnRegistration}>
                                    Регистрация
                                </LinkAuth>
                            </div>
                        </div>
                        <ButtonPartner type="button">
                            Вход для партнёров
                        </ButtonPartner>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
