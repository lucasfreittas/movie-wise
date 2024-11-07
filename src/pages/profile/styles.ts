import styled from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    h3 {
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
    };
`;

export const TitleContainer = styled.header`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    width: 100%;
    max-width: 99.6rem;
    margin: 4rem 0 4rem 0;

    > h1 {
        font-size: ${(props) => props.theme.fontSize.xl};
        line-height: ${(props) => props.theme.lineHeight.regular};
    };
`;

export const MainContentProfile = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 6.4rem;
`;

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 60.8rem;
`;

export const RecentReviews = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    height: 100%;

    .titleRecentReviews {
        margin-bottom: 0.4rem;
    }
`;

export const ProfileDataContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 32.4rem;
    height: 100%;
    align-items: center;

    .UserProfile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.4rem;

        > h2{
            font-size: ${(props) => props.theme.fontSize.lg};
            line-height: ${(props) => props.theme.lineHeight.regular};
            font-weight: ${(props) => props.theme.fontWeight.bold};
        };

        > p{
            font-size: ${(props) => props.theme.fontSize.xs};
            line-height: ${(props) => props.theme.lineHeight.large};
            font-weight: ${(props) => props.theme.fontWeight.regular};
            color: ${(props) => props.theme.colors.gray400};
        };
    };

    img {
        width: 7.2rem;
        height: 7.2rem;
        border-radius: 100%;
        padding: 2px;
        background: ${(props) => props.theme.colors.gradientVertical};
        margin-bottom: 2rem;
    }
`;

export const Divisor = styled.div`
    width: 32px;  
    height: 4px;
    background: ${(props) => props.theme.colors.gradientVertical};
    border-radius: 2px;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    padding: 2rem 5.6rem;

    > div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.6rem;

        div {
            display: flex;
            flex-direction: column;

            > h3{
            font-size: ${(props) => props.theme.fontSize.sm};
            line-height: ${(props) => props.theme.lineHeight.regular};
            font-weight: ${(props) => props.theme.fontWeight.bold};
            };

            > p{
                font-size: ${(props) => props.theme.fontSize.xs};
                line-height: ${(props) => props.theme.lineHeight.large};
                font-weight: ${(props) => props.theme.fontWeight.regular};
                color: ${(props) => props.theme.colors.gray300};
            };
        }; 
    } 
`;