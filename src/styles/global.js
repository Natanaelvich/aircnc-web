import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
*{
    margin : 0;
    padding : 0;
    outline : 0;
    box-sizing : border-box;
}
html,body,#root{
    min-height : 100%;
}
body{
  background  : #000 url(${background}) no-repeat;
  background-size : cover;
  -webkit-font-smoothing: antialiased !important;
  font-family: Roboto, sans-serif;
}
body,input,button{
    font-family: Roboto, sans-serif;
    color : #222;
    font-size : 14px;
}
button{
    cursor: pointer; 
}
`;
