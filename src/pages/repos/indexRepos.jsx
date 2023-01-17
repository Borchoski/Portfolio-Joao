import React from "react";
import { Header } from "../../components/header/header";
import { StyledBodyHome } from "../home/styledHome";
import { StyledReposMain } from "./styledRepos";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export const Repos = () => {
    return (
        <StyledBodyHome>
            <Header sobre={""} />
            <StyledReposMain>
                <div>
                    <section>
                        <h2>Aqui estão todos os meus projetos</h2>
                    </section>
                    <section>
                        <AiOutlineFundProjectionScreen size={70} />
                    </section>
                </div>
            </StyledReposMain>
        </StyledBodyHome>
    );
};
