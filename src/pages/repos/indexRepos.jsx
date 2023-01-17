import React from "react";
import { Header } from "../../components/header/header";
import { StyledBodyHome } from "../home/styledHome";
import { StyledReposMain } from "./styledRepos";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const Repos = () => {
    const { userRepos } = useContext(UserContext);
    console.log(userRepos[1]);

    return (
        <StyledBodyHome>
            <Header sobre={""} />
            <StyledReposMain>
                <div>
                    <section>
                        <h1>Aqui estão todos os meus projetos</h1>
                    </section>
                    <section>
                        <AiOutlineFundProjectionScreen size={70} />
                    </section>
                </div>
                <ul>
                    {userRepos.map((element, i) => {
                        return (
                            <li>
                                <h3>{element?.name}</h3>
                                <p>{element?.description}</p>
                                <section>
                                    <a
                                        href={element?.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            background:
                                                "rgba(107, 211, 235, 0.8)",
                                        }}
                                    >
                                        Repository
                                    </a>
                                    {element?.homepage !== "" ? (
                                        <a
                                            style={{
                                                background: "#868e96",
                                            }}
                                            href={element?.homepage}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Demo
                                        </a>
                                    ) : null}
                                </section>
                            </li>
                        );
                    })}
                </ul>
            </StyledReposMain>
        </StyledBodyHome>
    );
};
