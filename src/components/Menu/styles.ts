import styled from "styled-components";

import MenuBackground from '../../assets/menu-background-photo.png';

interface IndicatorProps {
    position: string;
  }

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: url(${MenuBackground.src}) no-repeat center/cover;
    width: 23.2rem;
    height: 100%;
    min-width: 232px;
    border-radius: 1.6rem;
    padding: 2.4rem;
    margin-right: 1.6rem;

    > .LogoWise{
        margin: 1.6rem;
    };

    > .OptionsContainer{
        display: flex;
        gap: 1.6rem;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100%;
        padding: 4rem 0;
        position: relative;
    };  
`;

export const PageOption = styled.div`
    display: flex;
    gap: 1.6rem;
    padding: 0.8rem 0;
    align-items: center;

    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.gray400};
    line-height: ${(props) => props.theme.lineHeight.large};

    &.active {
    color: ${(props) => props.theme.colors.gray100};
  }
`;

export const ProfileToggle = styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;
    text-align: left;

    font-size: ${(props) => props.theme.fontSize.xs};
    color: ${(props) => props.theme.colors.gray200};
    line-height: ${(props) => props.theme.lineHeight.large};

    > .AvatarImage{
        border-radius: 100%;
        padding: 1px; // Tamanho da "borda"
        background: ${(props) => props.theme.colors.gradientVertical};// Gradiente como fundo
    }

`;

export const Indicator = styled.div<IndicatorProps>`
    position: absolute;
    left: -16px;
    top: ${(props) => {
        switch (props.position) {
            case '/':
                return '48px';
            case '/explore':
                return '106px'; 
            case '/profile':
                return '164px';
            default:
                return '0';
        }
    }};
    width: 4px;  
    height: 24px;
    background: ${(props) => props.theme.colors.gradientVertical};
    transition: all 0.3s ease;
    border-radius: 2px;
`;