import styled from "styled-components";

export const MovieCardContainer = styled.div`
    display: flex;
    gap: 1.6rem;
    width: 100%;
    padding: 1.6rem 2rem;
    background-color: ${(props) => props.theme.colors.gray700};
    border-radius: 8px;

    > img {
        width: 6.4rem;
        height: 9.4rem;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const MovieContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const MovieTitle = styled.header`
    width: 100%;

    > h3 {
        font-size: ${(props) => props.theme.fontSize.sm};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        line-height: ${(props) => props.theme.lineHeight.regular};
        margin: 0;
    };

    > p {
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray400};
    };
`;