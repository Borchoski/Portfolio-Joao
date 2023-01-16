import styled from "styled-components";

export const StyledHeader = styled.header`
    color: white;

    background: #212529;
    width: 100vw;

    position: fixed;

    @media (max-width: 1100px) {
    }

    > header {
        padding: 0 15%;
        height: 80px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 1100px) {
            padding: 0 5%;
        }

        > div:nth-child(1) {
            display: flex;
            align-items: center;

            span {
                color: var(--color-primary);
            }

            img {
                height: 80px;

                @media (max-width: 1100px) {
                    height: 60px;
                }
            }
        }

        > nav {
            display: flex;
            gap: 60px;

            > a {
                font-size: 20px;
            }
            button {
                font-size: 20px;
                color: var(--fixed-white);
            }
        }
    }
`;
