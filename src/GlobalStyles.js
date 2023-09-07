import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background-color: ${COLORS.offwhite};
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
`;
