import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
       background: #222222; 
       font-size: 14px;
       font-family: 'Sarala', sans-serif;
       -webkit-font-smoothing: antialiased;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6{
        color: #555555;
        font-weight: 700;
    }
`;
