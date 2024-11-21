import styled from "styled-components";

interface MovieCardContainerProps {
    variant: 'mini' | 'default' | 'detailed' | 'expanded'; 
};

export const MovieCardContainer = styled.div<MovieCardContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.variant === 'detailed' ? 'row' : 'column'};
    justify-content: flex-start;
    padding: ${(props) => {
            switch (props.variant) {
            case 'mini':
                return '1.6rem 2rem';
            case 'detailed':
                return '2rem 2.4rem';
            case 'expanded':
                return '2.4rem 3.2rem';
            default:
                return '1.6rem 2rem';
            }
        }};
    gap: 2.4rem;
    width: 100%;
    background-color: ${(props) => 
        props.variant === 'detailed' ? props.theme.colors.gray600 : props.theme.colors.gray700};
    border-radius: 8px;
    
    &:hover{
        cursor: ${(props) => props.variant !== 'expanded' ? 'pointer' : 'default'};
    }
`;

export const MovieCardWrapper = styled.div<MovieCardContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:  ${(props) => props.variant === 'expanded' ? '3.2rem' : '1.6rem'};
    width: 100%;

    > img {
        width: ${(props) => {
            switch (props.variant) {
            case 'mini':
                return '6.4rem';
            case 'detailed':
                return '10.8rem';
            case 'expanded':
                return '17.1rem';
            default:
                return '10.8rem'; // Valor default
            }
        }};
       height: ${(props) => {
            switch (props.variant) {
            case 'mini':
                return '9.4rem';
            case 'detailed':
                return '15.2rem';
            case 'expanded':
                return '24.2rem';
            default:
                return '15.2rem'; // Valor default
            }
        }};
        object-fit: cover;
        border-radius: 4px;
    };
`;

export const MovieWrapper = styled.div<MovieCardContainerProps>`
    display: flex;
    justify-self: flex-start;
    flex-direction: ${(props) => props.variant === 'detailed' ? 'column' : 'row'};
`;

export const MovieContent = styled.div<MovieCardContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.variant === 'detailed' ? 'row' : 'column'};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const StarsMovieCardContainer = styled.div<MovieCardContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    > div{
        display: flex;
        gap: 0.4rem;
        color: ${(props) => props.theme.colors.purple100};

        > svg {
            width: ${(props) => props.variant === 'expanded' ? '2rem' : '1.6rem'};
            height: ${(props) => props.variant === 'expanded' ? '2rem' : '1.6rem'};
        };
    };

    > p {
        font-size: ${(props) => props.variant === 'expanded' ? props.theme.fontSize.sm : props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray300};
    };
`;

export const MovieTitle = styled.header<MovieCardContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;

    > span {
        font-size: ${(props) => props.variant === 'expanded' ? props.theme.fontSize.sm : props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray400};
    };

    > h3 {
        font-size: ${(props) => props.variant === 'expanded' ? props.theme.fontSize.md : props.theme.fontSize.sm};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        line-height: ${(props) => props.theme.lineHeight.regular};
    };

    > p {
        font-size: ${(props) => props.variant === 'expanded' ? props.theme.fontSize.sm : props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray400};
    };
`;

export const MovieDescription = styled.div`
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: ${(props) => props.theme.lineHeight.large};
    color: ${(props) => props.theme.colors.gray300};

    p{
        display: -webkit-box;
        -webkit-line-clamp: 5;  /* Limita o número de linhas visíveis */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const MovieData = styled.div`
    display: flex;
    padding: 2.4rem 0 0 0;
    gap: 5.6rem;
    border-top: 1px solid ${(props) => props.theme.colors.gray600};

    > div {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        
    };

    .genresContainer {
        display: flex;
        gap: 0.8rem;
    }

    p {
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray300};
    };

    h3 {
        font-size: ${(props) => props.theme.fontSize.sm};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        line-height: ${(props) => props.theme.lineHeight.regular};
        color: ${(props) => props.theme.colors.gray200};
    };
`;