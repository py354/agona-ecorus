import React from 'react';
import styles from "./styles/App.module.sass"
import {Routes, Route} from "react-router-dom";
import {NotFound} from "./pages/NotFound/NotFound";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {About} from "./pages/About/About";
import {MainPage} from "./pages/MainPage/MainPage";
import {Market} from "./pages/Market/Market";

function App() {
  return (
      <div className={styles.container}>
          <Header/>
          <main>
              <Routes>
                  <Route path='/' element={<MainPage/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/market' element={<Market/>}></Route>
                  <Route path='*' element={<NotFound/>}>
                  </Route>
              </Routes>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
