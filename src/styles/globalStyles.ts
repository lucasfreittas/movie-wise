import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, sans-serif;
        background: ${(props) => props.theme.colors.gray800};
        color: ${(props) => props.theme.colors.gray100};
        font-family: "Nunito Sans", sans-serif;
        font-weight: ${(props) => props.theme.fontWeight.regular};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    h1, h2, h3, h4{
        font-family: "Nunito Sans", sans-serif;
        font-weight: ${(props) => props.theme.fontWeight.bold};
    };

    a{
        text-decoration: none;
    };

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        border: none;
    };
`;
