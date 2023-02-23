import styled from "styled-components";

import { Link } from "react-router-dom";
import { COLORS } from "../../utils/constant/colors";

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	@media screen and (max-width: 800px) {
		align-items: center;
	}
`;

export const Title = styled(Link)`
	font-size: 28px;
	margin-top: 4rem;
	margin-bottom: 5rem;
	cursor: pointer;
	color: ${COLORS.BLACK};
	text-align: center;
`;

export const ShopMore = styled(Link)`
	font-size: 1.6rem;
	margin-bottom: 2rem;
	cursor: pointer;
	color: ${COLORS.BLACK};
	text-align: center;

	span {
		border-bottom: 1px solid ${COLORS.BLACK};
	}
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 15px;
		grid-row-gap: 25px;
	}

	@media screen and (max-width: 400px) {
		grid-template-columns: 1fr;
		grid-row-gap: 25px;
	}
`;
