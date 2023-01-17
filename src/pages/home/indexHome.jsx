import React from "react";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";
import { StyledBodyHome } from "./styledHome";

export const Home = () => {
    return (
        <StyledBodyHome>
            <Header sobre={'sobre'}/>
            <Main />
        </StyledBodyHome>
    );
};
