import styled from "styled-components";

export const StyledHeader = styled.header`
    color: white;

    background: #212529;
    width: 100vw;

    position: fixed;

    @media (max-width: 1100px) {
    }

    > nav {
        position: absolute;
        top: -7rem;
        left: 0;

        background: white;
        width: 100vw;
        height: 7rem;

        background: #212529;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        a {
            border-radius: var(--radius2);
            background: #868e96;
            color: #212529;
            font-weight: 600;

            width: 35%;
            height: 50%;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @keyframes slide-down {
        from {
            top: -7rem;
        }
        to {
            top: 5rem;
        }
    }
    .toDown {
        animation: slide-down 500ms forwards;
    }

    @keyframes slide-up {
        from {
            top: 5rem;
        }
        to {
            top: -7rem;
        }
    }
    .toUp {
        animation: slide-up 500ms forwards;
    }

    > header {
        padding: 0 15%;
        height: 5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 1100px) {
            padding: 0 5%;
        }

        > section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
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
