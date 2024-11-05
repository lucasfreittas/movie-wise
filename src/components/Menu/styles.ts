import styled from "styled-components";

import MenuBackground from '../../assets/menu-background-photo.png';

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