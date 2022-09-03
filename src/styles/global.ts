import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-family: 'Nunito Sans', sans-serif;
}
body{
    background-color: #f5f8f9;
    max-height: 100vh;
}
`;
export default Global;
