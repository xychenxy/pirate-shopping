import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constant/colors";

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
		text-rendering: geometricPrecision;
		/* -webkit-tap-highlight-color: rgba(0, 0, 0, 0); */
	}

	html,
	body {
			height: 100%;
			width: 100%;
			margin: 0;
			padding: 0;
		}

	body {
		color: ${COLORS.BLACK};
		font-family: "Inter", sans-serif;;

		/* -webkit-tap-highlight-color: rgba(0, 0, 0, 0); */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		overflow-y: scroll;
	}


	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Space Grotesk", sans-serif;
		font-weight: 600;
		/* color: rgba(255, 255, 255, 0.86); */
		color: ${COLORS.BLACK};
	}



	h1 {
		font-size: 3.2rem;
	}

	h2 {
		font-size: 2.8rem;
	}

	h3 {
		font-size: 2.4rem;
	}

	h4 {
		font-size: 2rem;
	}

	h5 {
		font-size: 1.6rem;
	}

	h6 {
		font-size: 1.4rem;
	}



	strong {
		font-weight: 500;
	}

	small {
		font-size: 1.2rem;
	}



	body,
	button,
	input,
	select,
	textarea {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}

	a {
		color: ${COLORS.PRIMARY_COLOR_SPACE_CADET};
		text-decoration: none;
	}

	figure {
		margin: 0;
	}
	img {
		vertical-align: middle;
	}

	code,
	pre {
		font-family: "Fira Code", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
		width: 100%;
	}

	code {
		color: ${COLORS.EMERALD};
	}

	#root {
		height: 100%;
		width: 100%;
	}

	@media only screen and (max-width: 640px) {
		.mobile-scroll-lock {
			overflow: hidden;
		}
	}

`;
