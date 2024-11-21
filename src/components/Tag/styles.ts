import styled from "styled-components";

export const TagContainer = styled.div`
    width: fit-content;
    padding: 0.4rem 1.6rem;
    border-radius: 56px;
    border: 1px solid ${(props) => props.theme.colors.purple100};
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: ${(props) => props.theme.lineHeight.large};
    color: ${(props) => props.theme.colors.purple100};
    background-color: transparent;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    &:hover{
        color: ${(props) => props.theme.colors.gray100};
        background-color: ${(props) => props.theme.colors.purple200};
        cursor: pointer;
    };

    &.clicked{
        border: 1px solid transparent;
        color: ${(props) => props.theme.colors.gray100};
        background-color: ${(props) => props.theme.colors.purple200};
    };
`;