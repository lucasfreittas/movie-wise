import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const TitleContainer = styled.header`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    width: 100%;
    max-width: 99.6rem;
    margin: 4rem 0 4rem 0;

    > h2 {
        font-size: ${(props) => props.theme.fontSize.xl};
        line-height: ${(props) => props.theme.lineHeight.regular};
    };
`;

export const HomeContent = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 6.4rem;
`;

export const RecentReviews = styled.section`
    width: 100%;
    max-width: 60.8rem;
    height: 100%;
`;

export const PopularMovies = styled.section`
    width: 32.4rem;
    height: 100%;
`;