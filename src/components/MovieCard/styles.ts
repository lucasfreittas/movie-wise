import styled from "styled-components";

interface MovieCardContainerProps {
    variant: 'mini' | 'default' | 'detailed' | 'expanded'; 
};

export const MovieCardContainer = styled.div<MovieCardContainerProps>`
    display: flex;
    justify-content: flex-start;
    gap: 2.4rem;
    width: 100%;
    padding: ${(props) => props.variant === 'detailed' ? '2.0rem 2.4rem' : '1.6rem 2.0rem'};
    background-color: ${(props) => 
        props.variant === 'detailed' ? props.theme.colors.gray600 : props.theme.colors.gray700};
    border-radius: 8px;
    
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
    flex-direction: column;
    justify-self: flex-start;
`;

export const MovieContent = styled.div<MovieCardContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.variant === 'detailed' ? 'row' : 'column'};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const MovieTitle = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;

    > span {
        font-size: ${(props) => props.theme.fontSize.xs};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: ${(props) => props.theme.lineHeight.large};
        color: ${(props) => props.theme.colors.gray300};
        margin-bottom: 1.2rem;
    };

    > h3 {
        font-size: ${(props) => props.theme.fontSize.sm};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        line-height: ${(props) => props.theme.lineHeight.regular};
    };

    > p {
        font-size: ${(props) => props.theme.fontSize.xs};
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
`;