import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset}
  :root {
    --vh: 100%;
  }
`;

export default GlobalStyles;
