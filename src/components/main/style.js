import styled from "styled-components";

export const StyledMainDiv = styled.div`
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    margin: 90px 0 30px 0;

    @media (max-width: 1100px) {
        padding: 0 5%;
    }

    svg {
        color: #212529;
    }

    > div {
        display: flex;
        justify-content: space-between;

        gap: 30px;

        > section {
            background: #868e96;
            border-radius: var(--radius2);

            min-height: 30vh;
            max-height: 30vh;
            padding: 16px;

            @media (max-width: 1100px) {
                h2 {
                    font-size: 1.4rem !important;
                    line-height: 22px;
                }

                h1 {
                    font-size: 1.5rem !important;
                    line-height: 22px;
                }

                h3 {
                    line-height: 22px;
                }
            }
        }

        > section:nth-child(1) {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            gap: 16px;

            @media (max-width: 1100px) {
                width: 100%;
                max-height: 100%;
            }

            > section {
                display: flex;
                gap: 2rem;

                overflow: auto;

                @media (max-width: 1100px) {
                    gap: 1.5 rem;
                }

                > span {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }
            }

            > ul {
                display: flex;
                gap: 1rem;
                align-items: center;
                height: 80%;

                overflow: auto;

                @media (max-width: 1100px) {
                    li {
                        min-width: 60% !important;
                        min-height: 160px;
                    }

                    section {
                        min-width: 150px;
                    }
                }

                li {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 24%;
                    height: 90%;

                    gap: 16px;
                    padding: 8px;

                    border: 2px solid #212529;
                    border-radius: var(--radius2);

                    transition: all 0.5s;
                    cursor: pointer;

                    h3 {
                        font-size: 14px;
                        text-align: center;
                    }

                    a {
                        transition: all 0.5s;
                    }
                }

                li:hover {
                    border: 2px solid var(--color-primary);
                }
                li:hover a {
                    color: var(--color-primary);
                }

                section {
                    width: 24%;
                    height: 90%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    button {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                        align-items: center;
                    }
                }
            }
        }
        > section:nth-child(2) {
            width: 23%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 0;

            @media (max-width: 1100px) {
                display: none;
            }

            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;
