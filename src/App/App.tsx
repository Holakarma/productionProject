import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";

const App = () => {
    const {theme,toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <button onClick={()=>{
                toggleTheme()
            }}>
                click
            </button>
            <Link to="/about">about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                        <Route path="/about" element={<AboutPageAsync/>}>

                        </Route>
                        <Route path="/" element={<MainPageAsync/>}>

                        </Route>

                </Routes>
            </Suspense>
        </div>
    );
};

export default App;