import React, { useContext } from "react";
import { StyledMainDiv } from "./style";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillHtml5, AiOutlineGithub, AiFillApi } from "react-icons/ai";
import { DiCss3, DiGithubFull } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaRegFolderOpen } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { BsBook, BsArrowBarRight } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoRepo } from "react-icons/go";
import minhaFoto from "../../imgs/minhaFoto.jpeg";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

export const Main = () => {
    const { userRepos } = useContext(UserContext);
    const navigate = useNavigate();
    const { widthWindow } = useContext(UserContext);

    return (
        <StyledMainDiv>
            <div>
                <section>
                    <h2
                        style={{
                            fontSize: "var(--font2)",
                        }}
                    >
                        Olá, me chamo{" "}
                    </h2>
                    <h1
                        style={{
                            fontSize: "var(--font1)",
                            color: "white",
                        }}
                    >
                        João Henrique{" "}
                        <span style={{ color: "var(--color-primary)" }}>
                            Borchoski
                        </span>{" "}
                    </h1>
                    <h3
                        style={
                            widthWindow > 600
                                ? {
                                      fontSize: "var(--font3)",
                                  }
                                : { fontSize: "1.4rem" }
                        }
                    >
                        Desenvolvedor FullStack
                        {""} em formação.
                    </h3>
                </section>
                <section>
                    <BsCodeSlash size={80} />
                </section>
            </div>
            <div>
                <section>
                    <h2
                        style={{
                            fontSize: "var(--font2)",
                        }}
                    >
                        Sobre mim:
                    </h2>
                    <h3 style={{ fontSize: "17px" }}>
                        <p>
                            Me chamo João, tenho 20 anos, moro no Paraná e
                            comecei a estudar programação em junho de 2022, um
                            amigo me mostrou esse mundo imediatamente me
                            interessei e acabei me apaixonando.
                        </p>
                        <br />
                        <p>
                            Desde sempre eu tenho bom desempenho com as
                            tecnologias digitais, e a partir do momento que
                            comecei meu curso na Kenzie Academy me encantei por
                            tudo que vi no decorrer dos meus estudos. Estava
                            cursando engenharia elétrica na UTF-PR em minha
                            cidade (Ponta Grossa) e acabei trancando com intuito
                            de cursar software e para estudar, trabalhar em uma
                            área que eu realmente gosto: a programação.
                        </p>
                    </h3>
                </section>
                <section>
                    <img src={minhaFoto} alt="" />
                </section>
            </div>
            <div>
                <section
                    style={{
                        gap: "1rem",
                    }}
                >
                    <h2>
                        <span style={{ color: "var(--fixed-white)" }}>
                            Tecnologias
                        </span>{" "}
                        conhecidas :
                    </h2>
                    <h3 style={{ fontSize: "17px" }}>
                        Desde o início do meu curso estudei vários frames do
                        desenvolvimento web, dentre eles:
                    </h3>
                    <section>
                        <span>
                            <AiFillHtml5 size={40} />
                            <p>HTML</p>
                        </span>

                        <span>
                            <DiCss3 size={40} />
                            <p>CSS</p>
                        </span>

                        <span>
                            <IoLogoJavascript size={40} />
                            <p>JS</p>
                        </span>

                        <span>
                            <AiOutlineGithub size={40} />
                            <p>Github</p>
                        </span>

                        <span>
                            <AiFillApi size={40} />
                            <p> API's </p>
                        </span>

                        <span>
                            <FaReact size={40} />
                            <p>React</p>
                        </span>

                        <span>
                            <SiVercel size={40} />
                            <p>Vercel</p>
                        </span>
                    </section>
                </section>
                <section>
                    <BsBook size={80} />
                </section>
            </div>
            <div>
                <section style={{ gap: "16px" }}>
                    <h2>Aqui mostro alguns dos meus projetos: </h2>
                    <ul>
                        {userRepos.map((element, i) => {
                            if (i !== 0 && i <= 3) {
                                return (
                                    <li
                                        onClick={() => {
                                            document.getElementById(i).click();
                                        }}
                                        key={i}
                                    >
                                        <FaRegFolderOpen
                                            size={50}
                                            className="svgPost"
                                        />
                                        <a
                                            href={element.html_url}
                                            target={"blank"}
                                            id={i}
                                        >
                                            <h3>{element.name}</h3>
                                        </a>
                                    </li>
                                );
                            }
                            return null;
                        })}
                        <section>
                            <button onClick={() => navigate("/repos")}>
                                <BsArrowBarRight size={50} />
                                <h3>Clique aqui para ver todos os projetos</h3>
                            </button>
                        </section>
                    </ul>
                </section>
                <section>
                    <GoRepo size={80} />
                </section>
            </div>
        </StyledMainDiv>
    );
};
