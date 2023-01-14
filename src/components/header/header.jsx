import React from "react";
import { StyledHeader } from "./style";
import J from "../../imgs/logoJ.png";


export const Header = () => {
    return (
        <StyledHeader>
            <header>
                <div>
                    <img src={J} alt="" />
                    <h1>
                        João Borchoski <span>Dev</span>
                    </h1>
                </div>

                <nav>
                    <a href="">SOBRE MIM</a>
                    <a href="">GITHUB</a>
                    <a href="">CONTATO</a>
                </nav>
            </header>
        </StyledHeader>
    );
};
