import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "b koodak", sans-serif;
  background: rgba(255, 255, 255, 0.5);
  overflow-x: hidden;
}

h1,
h2 {
  color: rgb(54, 54, 54);
}

h1 {
  font-size: 4.5rem;
}

h2 {
  font-size: 3rem;
}

h3,
h4 {
  font-weight: 400;
  color: rgb(100, 100, 100);
}

h3 {
  font-size: 2.4rem;
}

h4 {
  font-size: 1.7rem;
}

p {
  font-size: 1.7rem;
  line-height: 200%;
  color: #949494;
}

a {
  text-decoration: none;
  color: #949494;
  transition: all .3s ease-out;

  &:hover {
    color: #EF5661;
  }
}

img {
  display: block;
}

`;

export default GlobalStyle;
