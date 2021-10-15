import { css } from "styled-components"

export const theme = css`
  :root {
    --tablet: (min-width: 767px);
    --laptop: (min-width: 992px);
    --desktop: (min-width: 1440px);

    --darkCyan: #0e8784;
    --darkGreyBlue: #333d4b;
    --grey: #83888f;
    --lightCreamBG: #fefcf7;
    --paleOrange: #fdd6ba;

    --barlowRegular: 400;
    --barlowBold: 700;
    --frauncesBlack: 900;
  }
`
