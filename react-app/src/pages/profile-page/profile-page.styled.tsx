import styled from "styled-components";
import { COLORS } from "../../utils/constant/colors";

export const ContentLayout = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;

	width: 100%;
	min-height: 640px;

	/* responsive */

	padding: 48px;

	@media only screen and (max-width: 480px) {
		padding: 1.6rem;
	}
`;

export const ContentLayoutBody = styled.div`
	font-size: 1.6rem;
	line-height: 2.4rem;
`;

export const ProfileGridContainer = styled.div`
	display: flex;
	flex-direction: column;

	/* responsive */

	margin-top: 48px;

	@media only screen and (max-width: 480px) {
		margin-top: 2.4rem;
	}
`;

export const ProfileGridContainerHeader = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 16px;
`;

export const ProfileGridContainerImage = styled.img`
	border: solid 2px ${COLORS.AQUA};
	border-radius: 50%;

	/* responsive */

	height: 80px;
	width: 80px;

	@media only screen and (max-width: 480px) {
		height: 5.6rem;
		width: 5.6rem;

		border-radius: 50%;

		border: solid 0.13rem ${COLORS.AQUA};
	}
`;

export const ProfileGridContainerHeadline = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const ProfileGridContainerProfileTitle = styled.h2`
	margin-top: 0;
	margin-bottom: 0;

	color: ${COLORS.WHITE};
	@media only screen and (max-width: 480px) {
		font-size: 1.6rem;
	}
`;

export const ProfileGridContainerProfileDescription = styled.span`
	font-size: 1.3rem;
`;
