import React, { useContext, useState } from "react";
import { StyledHeader } from "./style";
import J from "../../imgs/logoJ.png";
import { AiOutlineMenu } from "react-icons/ai";
import { UserContext } from "../../contexts/userContext";

export const Header = () => {
    const { windowWidth } = useContext(UserContext);

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <StyledHeader>
            <header>
                <div>
                    <img src={J} alt="#toppage" />
                    {windowWidth > 600 ? (
                        <h1>
                            João Borchoski <span>Dev</span>
                        </h1>
                    ) : (
                        <h2>
                            Borchoski <span>Dev</span>
                        </h2>
                    )}
                </div>

                {windowWidth > 1000 ? (
                    <nav>
                        <button onClick={toTop}>SOBRE MIM</button>
                        <a href="https://github.com/Borchoski" target={"blank"}>
                            GITHUB
                        </a>
                        <a href="">CONTATO</a>
                    </nav>
                ) : (
                    <AiOutlineMenu size={30} color={"white"} />
                )}
            </header>
        </StyledHeader>
    );
};
