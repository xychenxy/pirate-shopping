import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import { COLORS } from "../../utils/constant/colors";

const slideInFromLeft = keyframes`
0% {
	opacity: 0;
    transform: translateX(240px);
  }
  100% {
	opacity:1;
    transform: translateX(0);
  }
`;

export const CartDropdownContainer = styled(motion.div)`
	position: absolute;
	width: 240px;
	height: 100vh;
	min-height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 0;
	right: 0;
	z-index: 5;
	overflow: scroll;

	animation: 0.5s ease-out 0s 1 ${slideInFromLeft};

	button {
		&:hover {
			background-color: ${COLORS.WHITE};
			color: ${COLORS.PRIMARY_COLOR_SPACE_CADET};
			border: 1px solid ${COLORS.PRIMARY_COLOR_SPACE_CADET};
		}
	}

	svg {
		width: 24px;
		height: 24px;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	margin-top: 2rem;
	/* height: 240px; */
	display: flex;
	flex-direction: column;
`;

export const CartItemsWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

export const CloseIconWrap = styled.div`
	display: flex;
	justify-content: flex-end;

	cursor: pointer;
`;
