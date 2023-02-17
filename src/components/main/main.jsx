import React, { useContext } from "react";
import { StyledMainDiv } from "./style";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillHtml5, AiOutlineGithub, AiFillApi } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaRegFolderOpen, FaNodeJs } from "react-icons/fa";
import { SiVercel, SiPostgresql } from "react-icons/si";
import { BsBook, BsArrowBarRight } from "react-icons/bs";
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
                        Hello, my name is{" "}
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
                        FullStack Developer
                        {""} training.
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
                        About{" "}
                        <span style={{ color: "var(--fixed-white)" }}>me</span>{" "}
                        :
                    </h2>
                    <h3 style={{ fontSize: "17px" }}>
                        <p>
                            My name is João, I'm 20 years old, I live in Paraná
                            and I started studying programming in June 2022.
                            friend showed me this world immediately immediately
                            I became interested and ended up falling in love.
                        </p>
                        <br />
                        <p>
                            I have always performed well with digital digital
                            technologies, and from the moment started my course
                            at Kenzie Academy I was enchanted by everything that
                            I saw in the course of my studies. I was I was
                            studying electrical engineering at UTF-PR in my city
                            (Ponta Grossa) and ended up canceling it with the to
                            study and work in an area that I really like:
                            programming.
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
                            Technologies
                        </span>{" "}
                        learneds :
                    </h2>
                    <h3 style={{ fontSize: "17px" }}>
                        Since the beginning of my course I have studied several
                        frames of web development, among them:
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
                        <span>
                            <SiPostgresql size={40} />
                            <p>PostgreSQL</p>
                        </span>
                        <span>
                            <FaNodeJs size={40} />
                            <p>Node.js</p>
                        </span>
                    </section>
                </section>
                <section>
                    <BsBook size={80} />
                </section>
            </div>
            <div>
                <section style={{ gap: "16px" }}>
                    <h2>
                        Here I show some of my{" "}
                        <span style={{ color: "var(--fixed-white)" }}>
                            projects
                        </span>{" "}
                        :{" "}
                    </h2>
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
                                <h3>Click here to see all projects</h3>
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
