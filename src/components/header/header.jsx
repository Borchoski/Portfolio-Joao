import React, { useContext, useState } from "react";
import { StyledHeader } from "./style";
import J from "../../imgs/logoJ.png";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

export const Header = ({ sobre }) => {
    const { windowWidth } = useContext(UserContext);
    const [modal, setModal] = useState(false || null);

    const navigate = useNavigate();

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
                        {sobre === "sobre" ? (
                            <button onClick={toTop}>SOBRE MIM</button>
                        ) : (
                            <button onClick={() => navigate("/")}>HOME</button>
                        )}
                        <a href="https://github.com/Borchoski" target={"blank"}>
                            GITHUB
                        </a>
                        <a href="mailto:joaoborchoskidev@gmail.com?">EMAIL</a>
                    </nav>
                ) : (
                    <section>
                        {sobre !== "sobre" ? (
                            <AiOutlineHome
                                size={30}
                                color={"white"}
                                onClick={() => navigate("/")}
                            />
                        ) : null}
                        <AiOutlineMenu
                            size={30}
                            color={"white"}
                            onClick={() => setModal(!modal)}
                        />
                    </section>
                )}
            </header>
            <nav
                className={
                    !modal && modal === null ? null : modal ? "toDown" : "toUp"
                }
            >
                <a href="https://github.com/Borchoski" target={"blank"}>
                    GITHUB
                </a>
                <a href="mailto:joaoborchoskidev@gmail.com?">EMAIL</a>
            </nav>
        </StyledHeader>
    );
};
