import React, {ButtonHTMLAttributes, InputHTMLAttributes, ReactNode} from 'react'
import styles from './UI.module.sass'
import cn from 'classnames/bind'

const cx = cn.bind(styles)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const ButtonAuth = ({children, onClick, type, disabled}: ButtonProps) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={cx(styles.button, styles.buttonGreen)}>
            {children}
        </button>
    )
}

export const ButtonPartner = ({children, onClick, type, disabled}: ButtonProps) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={cx(styles.button, styles.buttonGray)}>
            {children}
        </button>
    )
}

interface LinkProps {
    children: ReactNode;
    onClick?: () => void;
}


export const LinkAuth = ({children, onClick}: LinkProps) => {
    return (
        <a className={styles.link} onClick={onClick}>
            {children}
        </a>
    )
}

export const Input = ({
    placeholder,
    name,
    type,
    onChange,
    onBlur,
    value,
    onClick
}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            name={name}
            type={type}
            className={styles.input}
            placeholder={placeholder}

            onChange={onChange}
            onBlur={onBlur}
            value={value}
            onClick={onClick}
        />
    )
}




















