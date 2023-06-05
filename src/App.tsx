import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./styles/App.module.sass";
import { NotFound } from "./pages/NotFound/NotFound";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About/About";
import { MainPage } from "./pages/MainPage/MainPage";
import { Market } from "./pages/Market/Market";
import { setBalance, setEmail } from "./store/Profile";
import { useLazyGetProfileQuery } from "./services/auth";

function App() {
    const dispatch = useDispatch();
    const [getProfile] = useLazyGetProfileQuery();
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            getProfile(null)
                .then((prom) => prom.data)
                .then((body) => {
                    dispatch(setBalance(body?.balance));
                    dispatch(setEmail(body?.email));
                });
        }
    }, [token]);

    return (
        <div className={styles.container}>
            <Header setToken={setToken} />
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
