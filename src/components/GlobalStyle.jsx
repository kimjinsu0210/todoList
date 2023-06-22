import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  font-family: "Gamja Flower", cursive;
}
p {
  border-top: 1px solid rgba(0, 0, 0, 0.301);
}
button {
  box-shadow: 0px 3px 5px 0px #000000;
  transition: scale 0.3s;
}
button:hover {
  scale: 1.15;
}
body {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OTY_eJw9TGaOnfFU5DppqYivC3dkDZnB9w&usqp=CAU");
  width: 100vw;
  height: 97vh;
  background-size: cover;
}
`
export default GlobalStyle;