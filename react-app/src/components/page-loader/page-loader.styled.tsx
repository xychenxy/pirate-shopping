import styled, { keyframes } from "styled-components";

const spin = keyframes`
   from {
     transform: rotate(0deg);
   }   to {
     transform: rotate(360deg);
   }
`;

export const Loader = styled.div`
	height: 5rem;
	width: 5rem;

	margin: auto;

	animation: ${spin} 2s infinite linear;
`;

export const PageLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100%;
	width: 100%;
`;
