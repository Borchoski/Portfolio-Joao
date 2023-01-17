import React from "react";
import { StyledBody } from "./styles/styledApp";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/indexHome";
import { UserProvider } from "./contexts/userContext";
import { Repos } from "./pages/repos/indexRepos";

function App() {
    return (
        <UserProvider>
            <StyledBody>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/repos" element={<Repos />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </StyledBody>
        </UserProvider>
    );
}

export default App;
