import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { COLORS } from "../../../utils/constant/colors";

// ============================================= /
export const NavBarContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	flex-shrink: 0;
	width: 100%;

	z-index: 300;
	background-color: ${COLORS.WHITE};
	border-bottom: 1px solid ${COLORS.PRIMARY_COLOR_SPACE_CADET};

	@media only screen and (max-width: 640px) {
		display: none;
	}
`;

export const NavBarWrap = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	flex-shrink: 0;

	/* responsive */

	height: 80px;
	max-width: 1200px;

	padding: 0 24px;
	margin: 0;

	@media only screen and (max-width: 640px) {
		height: 6.4rem;

		padding: 0.8rem 1.6rem;
	}

	@media only screen and (max-width: 340px) {
		height: 6.4rem;

		padding: 0.8rem 1.6rem;
	}
`;

// ============================================= /
export const NavBarTabsContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

// ============================================= /
export const NavBarTabContainer = styled(NavLink)`
	display: flex;
	flex-direction: row;
	justify-content: center;

	margin-right: 24px;

	font-weight: 500;
	font-size: 16px;
	line-height: 16px;

	/* &:last-child {
		margin-right: 0;
	} */

	&:hover {
		color: ${COLORS.INDIGO};
	}

	&.active {
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-color: ${COLORS.INDIGO};

		/* responsive */

		text-decoration-thickness: 4px;
		text-underline-offset: 8px;
	}

	@media only screen and (max-width: 640px) {
		font-size: 1.5rem;

		&.active {
			text-decoration-line: none;
			color: ${COLORS.PINK};
		}
	}

	@media only screen and (max-width: 340px) {
		font-size: 1.3rem;

		&.active {
			text-decoration-line: none;
			color: ${COLORS.PINK};
		}
	}
`;

// ============================================= /
export const NavBarButtonsContainer = styled.div`
	display: flex;
	margin-left: 24px;

	@media only screen and (max-width: 640px) {
		margin-left: 24px;
	}

	@media only screen and (max-width: 340px) {
		margin-left: 24px;
	}
`;

// ============================================= /
export const NavBarBrandContainer = styled.div`
	display: flex;
	align-items: center;

	height: 100%;

	/* responsive */

	margin-right: 64px;

	@media only screen and (max-width: 640px) {
		display: flex;
		align-items: center;

		margin-right: 1.6rem;
	}

	@media only screen and (max-width: 340px) {
		display: flex;
		align-items: center;

		margin-right: 1.6rem;
	}
`;

export const NavBarBrandLogo = styled.div`
	svg {
		height: 40px;
		width: 40px;
	}
`;
