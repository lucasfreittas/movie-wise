import { createGlobalStyle } from "styled-components";

export const GlobalSytle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #f8f8f8;
        color: #333;
    }
`;