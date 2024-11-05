import styled from "styled-components";

import LoginBackground from '../../assets/login-background-photo.png'

export const LoginContent = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 2.4rem;
    gap: 2.4rem;
`;

export const BackgroundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77.662%;
    height: 100%;
    background: url(${LoginBackground.src}) no-repeat center/cover;
    border-radius: 0.8rem;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    > div h3 {
        font-size: ${(props) => props.theme.fontSize.xl};
    };

    > div p {
        font-size: ${(props) => props.theme.fontSize.sm};
        color: ${(props) => props.theme.colors.gray200};
        line-height: ${(props) => props.theme.lineHeight.large};
    };

    > div {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    };
`;

export const SocialLogin = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 2.4rem;
    background-color: ${(props) => props.theme.colors.gray600};
    border-radius: 0.8rem;
    width: 37.2rem;
    gap: 2rem;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: ${(props) => props.theme.lineHeight.large};
    color: ${(props) => props.theme.colors.gray200};
    margin-bottom: 1.6rem;

    &:hover{
        cursor: pointer;
        filter: brightness(1.4);
    }
`;