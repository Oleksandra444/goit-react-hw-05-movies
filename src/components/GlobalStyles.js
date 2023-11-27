import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {

    /* font-family: 'DM Sans';
font-style: normal; */
margin: 0;
padding: 0;
}

a {
text-decoration: none;
}

ul {
list-style: none;
margin: 0;
padding: 0;
}

.list {
list-style: none;
margin: 0;
padding: 0;
}

img {
display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
margin: 0;
}

.link {
text-decoration: none;
color: currentColor;
}

.button {
cursor:pointer}


`