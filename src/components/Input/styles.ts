import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 2rem;
    border-radius: 8px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.gray500};

    > input {
        font-size: ${(props) => props.theme.fontSize.xs};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray200};
        background: transparent;
        border: none;
        width: 100%;

        &::placeholder{
            color: ${(props) => props.theme.colors.gray400};
        };

        &:focus{
            outline: none;
        }
    };

    > svg {
        color: ${(props) => props.theme.colors.gray500};
    };

    &:focus-within{
        border: 1px solid ${(props) => props.theme.colors.green200};

        > svg {
        color: ${(props) => props.theme.colors.green200};
    };
    };
`;