import React from "react";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames/bind";
import styles from "./Header.module.sass";
import Logo from "../../assets/icon.svg";
import { UserInfo } from "./UserInfo/UserInfo";

const cx = cn.bind(styles);

interface Props {
    setToken: (token: string) => void;
}
export function Header({ setToken }: Props) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img src={Logo} alt="logo" />
                    </div>
                </Link>
                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            cx(styles.text, { activeLink: isActive })
                        }
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/collection-points"
                        className={({ isActive }) =>
                            cx(styles.text, { activeLink: isActive })
                        }
                    >
                        Пункты сбора
                    </NavLink>
                    <NavLink
                        to="/market"
                        className={({ isActive }) =>
                            cx(styles.text, { activeLink: isActive })
                        }
                    >
                        ЭкоМаркет
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            cx(styles.text, { activeLink: isActive })
                        }
                    >
                        О сервисе
                    </NavLink>
                </nav>
                <div>
                    <UserInfo setToken={setToken} />
                </div>
            </header>
        </div>
    );
}
