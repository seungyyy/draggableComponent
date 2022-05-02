import { createGlobalStyle } from "styled-components"; 

const globalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  article,
  section {
    display: block;
  }
  ol, ul, li {
    list-style: none;
  }
`;

export default globalStyle