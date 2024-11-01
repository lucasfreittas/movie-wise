// styles/styled.d.ts
import "styled-components";

// Defina a estrutura do seu tema
interface Colors {

    green100: string;
    green200: string;
    green300: string;

    purple100: string;
    purple200: string;

    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;

    gradientHorizontal: string;
    gradientVertical: string;
}

interface LineHeight {
    regular: string;
    large: string;
}

interface FontSize {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

interface FontWeight {
    regular: string;
    bold: string;
}

interface Theme {
    colors: Colors;
    lineHeight: LineHeight;
    fontSize: FontSize
    fontWeight: FontWeight
}


// Extenda o módulo styled-components
declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
