import styled from "styled-components";

export const StyledMainDiv = styled.div`
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    margin-top: 90px;


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

            height: 250px;
            padding: 16px;
        }

        > section:nth-child(1) {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            > section {
                display: flex;
                gap: 36px;

                > span {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }
            }
        }
        > section:nth-child(2) {
            width: 23%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            > img {
                width: 120%;
            }
        }
    }
`;
