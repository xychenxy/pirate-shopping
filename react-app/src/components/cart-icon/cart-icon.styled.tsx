import styled from "styled-components";

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	svg {
		width: 24px;
		height: 24px;
	}
`;

export const ItemCountWrap = styled.div`
	height: 30px;
`;

export const ItemCount = styled.p`
	font-size: 1.2rem;
`;
