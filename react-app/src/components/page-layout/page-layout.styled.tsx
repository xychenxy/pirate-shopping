import styled from "styled-components";

export const PageLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100%;
	width: 100%;
`;

export const PageLayoutContainerContent = styled.div`
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
