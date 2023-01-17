import styled from "styled-components";

export const StyledReposMain = styled.div`
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    margin: 90px 0 30px 0;

    > div {
        display: flex;

        gap: 30px;

        > section {
            border-radius: var(--radius2);
            min-height: 10vh;
            max-height: 10vh;
            background: #868e96;
            padding: 16px;
        }

        > section:nth-child(1) {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            gap: 16px;
        }

        > section:nth-child(2) {
            width: 23%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 0;
        }
    }
`;
