import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";
import { AboutPomodoro } from "../../pages/About";
import { useEffect } from "react";
import { History } from "../../pages/History";
import { Settings } from "../../pages/Settings";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});    
    }, [pathname]);

    return null;
}
export function Router() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={< History/>} />
            <Route path="/about-pomodoro" element={<AboutPomodoro />} />
             <Route path='/settings/' element={<Settings />} />
            <Route path="*" element={ <NotFound /> } />
            </Routes>
            <ScrollToTop/>
        </BrowserRouter>
    )
}