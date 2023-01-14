import React from "react";
import { StyledBody } from "./styles/styledApp";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/indexHome";

function App() {
    return (
        <StyledBody>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repositories" />  
                <Route path="*" element={<Home />} />
            </Routes>
        </StyledBody>
    );
}

export default App;
