import styled from "styled-components";
import { COLORS } from "../../utils/constant/colors";

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;

	img {
		width: 30%;
		border-radius: 5%;
	}

	/* color: ${COLORS.BLACK}; */
`;

export const ItemDetails = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;

	span {
		font-size: 16px;
	}
`;
