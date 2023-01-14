import styled from "styled-components";

export const StyledHeader = styled.header`
    color: white;

    background: #212529;
    width: 100%;

    position: fixed;

    > header {
        padding: 0 15%;
        height: 80px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        > div:nth-child(1) {
            display: flex;
            align-items: center;

            span {
                color: var(--color-primary);
            }

            img {
                height: 80px;
            }
        }

        > nav {
            display: flex;
            gap: 60px;

            > a {
                font-size: 20px;
            }
        }
    }
`;
