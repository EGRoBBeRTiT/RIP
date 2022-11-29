import { COLORS } from "constants/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Dancing Script",
            "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;

        &,
        * {
            &::-webkit-scrollbar {
                width: 12px;
            }
        }
        &,
        * {
            &::-webkit-scrollbar-track {
                background: ${COLORS.BackgroundDark};
            }
        }

        &,
        * {
            &::-webkit-scrollbar-thumb {
                background: ${COLORS.BorderColor};
                border-radius: 10px;
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    h1,
    h2,
    h3,
    h4,
    span,
    a,
    p {
        margin: 0;
        padding: 0;
        color: ${COLORS.TextColor2};
        text-decoration: none

    }

    * {
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }

    input,
    textarea,
    select {
        -webkit-appearance: none;
        outline:none;
    }

`;
