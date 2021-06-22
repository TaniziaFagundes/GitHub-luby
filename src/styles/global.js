import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Helvetica Neue';
        text-decoration: none;   
       
    }

    :root{
        --body: #292929;
        --yellow: #FFCE00;
        --gray: #535353;
        --red:#EB2D2D;
        --redCad:#CC042A;
        --black:#1F1F1F;
        --green: #63BF1F;
        --grayBorder: #7070705A;
        --white: #FFFFFF;
        --menuItens: #A5A5A5;
        --cardFallow: #5252525D;

    }

    body{
        background-color: var(--body);
    }

`;
