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

export const ContentLayoutTitle = styled.h1`
	margin-top: 0;
	color: ${COLORS.WHITE};

	@media only screen and (max-width: 480px) {
		font-size: 2.4rem;
	}
`;

export const ContentLayoutBody = styled.div`
	font-size: 1.6rem;
	line-height: 2.4rem;
`;

export const PageLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100%;
	width: 100%;
`;

export const PageLayoutContent = styled.div`
	flex: 1;
	flex-basis: auto;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;

	margin-top: 8rem;
	max-width: 120rem;
	width: 100%;

	@media only screen and (max-width: 640px) {
		margin-top: 6.4rem;
	}
`;
