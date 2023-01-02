import React from "react";
import { StyledBody } from "./styles/styledApp";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <StyledBody>
            <Routes>
                <Route path="/"/>
                <Route path="/repositories"/>
                <Route path="*"/>
            </Routes>
        </StyledBody>
    );
}

export default App;
