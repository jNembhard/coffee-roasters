import { createGlobalStyle } from "styled-components"
import BarlowRegular from "./fonts/Barlow/Barlow-Regular.ttf"
import BarlowBold from "./fonts/Barlow/Barlow-Bold.ttf"
import FrauncesBlack from "./fonts/Fraunces/Fraunces-Black.ttf"
import { variables } from "./variables"
import styled from "styled-components"

export const GlobalStyles = createGlobalStyle`
  ${variables}

  * {
    background-color: var(--lightCreamBG);
  }

  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Barlow", sans-serif;
    font-weight: var(--barlowRegular);
    color: var(--grey);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  nav {
    font-family: "Barlow", sans-serif;
    font-weight: var(--barlowBold);
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Fraunces", serif;
    font-weight: var(--frauncesBlack);
    color: var(--darkGreyBlue);
    text-rendering: optimizeLegibility;
  }

  p {
    font-family: "Barlow", sans-serif;
    font-weight: var(--barlowRegular);
    color: var(--darkGreyBlue);
    font-size: 15px;
    line-height: 25px;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${BarlowRegular}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: "Barlow";
    src: url(${BarlowBold}) format("truetype");
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: "Fraunces";
    src: url(${FrauncesBlack}) format("truetype");
    font-style: normal;
    font-weight: 900;
  }
`
