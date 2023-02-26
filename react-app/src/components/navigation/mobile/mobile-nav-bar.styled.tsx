import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../../../utils/constant/colors";

export const MobileNavBarToggleContainer = styled.span`
	margin-left: 0.8rem;
	svg {
		height: 34px;
		width: 34px;
	}
`;

export const MobileNavBarBrandContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	height: 100%;

	/* responsive */

	margin-right: 1.6rem;
`;

export const MobileNavBarBrandLogo = styled.div`
	svg {
		height: 40px;
		width: 40px;
	}
`;

export const MobileNavBarButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 3.2rem;
	background-color: ${COLORS.BLACK};

	button {
		&:last-child {
			color: white;
		}
	}
`;

export const MobileNavBarTabNavLink = styled(NavLink)`
	display: flex;
	flex-direction: row;
	/*justify-content: center;*/

	font-weight: 500;
	font-size: 2rem;
	line-height: 16px;

	padding: 3.2rem 2.4rem;
	background-color: ${COLORS.BLACK};
	color: ${COLORS.WHITE};
	width: 100%;
	box-shadow: rgb(90 95 102) 0-1.5px 0 inset;

	&:last-child {
		margin-right: 0;
	}

	&.active {
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-color: var(--indigo);

		/* responsive */

		text-decoration-thickness: 4px;
		text-underline-offset: 8px;

		&:hover {
			color: ${COLORS.WHITE};
		}
	}

	@media only screen and (max-width: 640px) and (hover: none) {
		&:hover {
			color: ${COLORS.WHITE};
		}

		&.active {
			&:hover {
				color: ${COLORS.WHITE};
			}
		}
	}
`;

export const MobileNavBarTabsContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: column;
	width: 100%;
`;

export const MobileNavBarContainer = styled.div`
	position: fixed;
	display: none;

	justify-content: center;
	flex-shrink: 0;
	width: 100%;

	box-shadow: rgb(90 95 102) 0-1.5px 0 inset;

	z-index: 300;

	background-color: ${COLORS.BLACK};

	@media only screen and (max-width: 640px) {
		display: flex;
	}
`;

export const MobileNavBarNav = styled.nav`
	flex: 1;
	display: flex;
	align-items: center;
	flex-shrink: 0;

	/* responsive */

	height: 6.4rem;
	max-width: 1200px;

	padding: 0.8rem 1.6rem;
	margin: 0;
`;

const slideTopToDown = keyframes`
0% {
	opacity: 0;
    transform: translateY(-50%);
  }
  100% {
	opacity:1;
    transform: translateY(0);
  }
`;

export const MobileNavBarMenuContainer = styled.div`
	width: 100%;
	height: calc(100% - 6.4rem);
	position: fixed;
	left: 0;
	top: 6.4rem;
	${COLORS.BLACK};

	z-index: 300;

	animation: 0.5s ease-out 0s 1 ${slideTopToDown};
`;

export const MobileNavBarCartContainer = styled(NavLink)`
	color: white;

	svg {
		height: 24px;
		width: 24px;
	}

	span {
		margin-left: 0.5rem;
	}
`;
