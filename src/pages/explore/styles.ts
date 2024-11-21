import styled from "styled-components";

export const ExploreContainer = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const ExploreWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 99.6rem;
    justify-self: center;
`;

export const TitleContainer = styled.header`
    display: flex;
    gap: 1.6rem;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 4rem 0 4rem 0;

    > * {
        max-width: 43.3rem;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        > h1 {
            font-size: ${(props) => props.theme.fontSize.xl};
            line-height: ${(props) => props.theme.lineHeight.regular};
        };
    };
`;

export const TagsContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    overflow: auto;
`;

export const MoviesContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    margin-top: 4rem;
`;