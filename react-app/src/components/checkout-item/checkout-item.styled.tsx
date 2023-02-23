import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		/* width: 100%; */
		/* height: 100%; */
		width: 6rem;
		border-radius: 5%;
	}
`;

export const BaseSpan = styled.span`
	width: 23%;
`;

export const Quantity = styled.div`
	width: 23%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const Arrow = styled.div`
	cursor: pointer;

	svg {
		height: 20px;
		width: 20px;
	}
`;

export const Value = styled.div`
	margin: 0 10px;
`;

export const RemoveButton = styled.div`
	width: 8%;
	text-align: center;
	cursor: pointer;

	svg {
		width: 24px;
		height: 24px;
	}
`;
