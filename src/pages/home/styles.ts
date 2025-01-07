import styled from "styled-components";

export const HomeContainer = styled.section`
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

export const HomeContent = styled.main`
     display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 99.6rem;
    justify-self: center;
    gap: 4rem;
`;

export const ReviewsContent = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 60.8rem;
    gap: 4rem;
`;

export const LastReview = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;

    > .SectionTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.4rem;

        h3 {
            strong {
                color: ${(props) => props.theme.colors.gray100};
            }
        } 

        > button {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            background: none;
            color: ${(props) => props.theme.colors.purple100};
            font-size: ${(props) => props.theme.fontSize.xs};
            font-weight: ${(props) => props.theme.fontWeight.bold};
            line-height: ${(props) => props.theme.lineHeight.large};
         }
    }
`;

export const RecentReviews = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    max-width: 60.8rem;
    height: 100%;

    .titleRecentReviews {
        margin-bottom: 0.4rem;
    }
`;

export const PopularMovies = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 99.6%;
    height: 100%;
    gap: 1.6rem;
    
    > .MovieWrapper{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        width: 100%;
        
    }

    > .SectionTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: ${(props) => props.theme.fontSize.sm};
        }

        strong {
            color: ${(props) => props.theme.colors.green100};
        }

        > button {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            background: none;
            color: ${(props) => props.theme.colors.purple100};
            font-size: ${(props) => props.theme.fontSize.xs};
            font-weight: ${(props) => props.theme.fontWeight.bold};
            line-height: ${(props) => props.theme.lineHeight.large};
         }
    }
`;