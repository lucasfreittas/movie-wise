import styled from "styled-components";

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.6rem;
    padding: 2.4rem;
    background-color: ${(props) => props.theme.colors.gray700};
    border-radius: 0.8rem;
`;

export const Avaliation = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Profile = styled.div`
    display: flex;
    gap: 1.6rem;

    > img {
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
        padding: 1px;
        background: ${(props) => props.theme.colors.gradientVertical};
    };

    > div {
        width: 100%;

        > h3 {
            font-size: ${(props) => props.theme.fontSize.sm};
            font-weight: ${(props) => props.theme.fontWeight.regular};
            line-height: ${(props) => props.theme.lineHeight.large};
            margin: 0;
        };

        > p {
            font-size: ${(props) => props.theme.fontSize.xs};
            font-weight: ${(props) => props.theme.fontWeight.regular};
            line-height: ${(props) => props.theme.lineHeight.large};
            color: ${(props) => props.theme.colors.gray400};
        };
    }
`;

export const StarsContainer = styled.div`
    display: flex;
    gap: 0.4rem;
    color: ${(props) => props.theme.colors.purple100};
`;

export const MovieInfo = styled.div`
    display: flex;
    gap: 2.4rem;

    > img {
        width: 10.8rem;
        height: 15.2rem;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    > div {
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray300};

        a {
            font-weight: ${(props) => props.theme.fontWeight.bold};
            color: ${(props) => props.theme.colors.purple100};
        };
    };
`;

export const CommentData = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: ${(props) => props.theme.fontSize.sm};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        line-height: ${(props) => props.theme.lineHeight.regular};
        margin: 0;
    };

    p {
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray400};
        margin-bottom: 1.6rem;
    };
`;