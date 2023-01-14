import styled from "styled-components";

export const StyledHeader = styled.header`
    color: white;

    width: 100%;

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

            img{
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
