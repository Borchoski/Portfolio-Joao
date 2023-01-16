import React from "react";
import { StyledHeader } from "./style";
import J from "../../imgs/logoJ.png";

export const Header = () => {
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
                    <h1>
                        João Borchoski <span>Dev</span>
                    </h1>
                </div>

                <nav>
                    <button onClick={toTop}>SOBRE MIM</button>
                    <a href="https://github.com/Borchoski" target={"blank"}>
                        GITHUB
                    </a>
                    <a href="">CONTATO</a>
                </nav>
            </header>
        </StyledHeader>
    );
};
