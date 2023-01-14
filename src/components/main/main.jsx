import React from "react";
import { StyledMainDiv } from "./style";
import { BsCodeSlash } from "react-icons/bs";

export const Main = () => {
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
                        João Henrique Borchoski{" "}
                    </h1>
                    <h3
                        style={{
                            fontSize: "var(--font3)",
                        }}
                    >
                        Desenvolvedor FullStack em formação.
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
                    <h3>
                        Me chamo João, tenho 20 anos, moro no Paraná e comecei a
                        estudar programação em junho de 2022, um amigo me
                        mostrou esse mundo da programação e eu fique apaixonado.
                        Desde sempre eu me dei bem com computadores e coisas
                        digitais e desde o momento que comecei meu curso na
                        Kenzie Academy foi um 'amor' imadiato com tudo que vi
                        desde o momento que inicie o estudo. Estava fazendo
                        engenharia eletrica na UTF-PR aqui da minha cidade e
                        acabei trancando para estudar e travalhar em uma area
                        que eu realmente gosto... a programação.
                    </h3>
                </section>
                <section>
                    <h2> foto </h2>
                </section>
            </div>
        </StyledMainDiv>
    );
};
