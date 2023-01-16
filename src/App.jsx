import React from "react";
import { StyledBody } from "./styles/styledApp";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/indexHome";
import { UserProvider } from "./contexts/userContext";

function App() {
    return (
        <UserProvider>
            <StyledBody>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/repositories" />
                    <Route path="*" element={<Home />} />
                </Routes>
            </StyledBody>
        </UserProvider>
    );
}

export default App;
