import React, {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    InputHTMLAttributes,
} from "react";
import cn from "classnames/bind";
import styles from "./UI.module.sass";

const cx = cn.bind(styles);

export function ButtonAuth(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={cx(styles.button, styles.btnGreen)} />;
}
export function ButtonPartner(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={cx(styles.button, styles.btnGray)} />;
}

export function LinkAuth(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a className={styles.link} {...props} />;
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input className={styles.input} {...props} />;
}
