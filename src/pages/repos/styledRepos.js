import styled from "styled-components";

export const StyledReposMain = styled.div`
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    margin: 90px 0 30px 0;

    @media (max-width: 1100px) {
        padding: 0 5%;
    }

    > div {
        display: flex;

        gap: 30px;

        > section {
            border-radius: var(--radius2);
            background: #868e96;
            padding: 16px;

            min-height: 7vh;
            max-height: 7vh;
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
        }
    }

    > ul {
        border-radius: var(--radius2);
        background: #868e96;
        padding: 32px;

        display: flex;
        justify-content: space-evenly;
        gap: 48px;
        flex-wrap: wrap;

        > li {
            min-height: 30vh;
            width: 30%;
            max-width: 45%;
            min-width: 300px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            gap: 16px;
            padding: 24px 16px;

            border: 2px solid #212529;
            border-radius: var(--radius2);

            background: #9ea4ab;

            transition: all 0.5s;

            @media (max-width: 1100px) {
                min-height: 30vh;
                max-height: 100vh;
            }

            > p {
                font-size: var(--font5);
            }

            > section {
                display: flex;
                justify-content: space-between;
                align-items: center;

                width: 100%;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    height: 40px;
                    width: 45%;

                    border-radius: var(--radius2);

                    transition: all 0.5s;
                }
            }
        }

        li:hover {
            background: #868e96;
        }
        li:hover a:nth-child(2) {
            background: #787f87 !important;
        }

        a:hover {
            scale: 1.1;
        }
    }
`;
