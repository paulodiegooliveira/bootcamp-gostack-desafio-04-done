import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%
    }

    ul{
      list-style: none;
      width: 100%;
    }

    body {
        background: #F2F2F2;
        /* background: #7159c1; */
        -webkit-font-smoothing: antialia sed !important ;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
