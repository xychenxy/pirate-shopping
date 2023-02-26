import styled from "styled-components";
import { COLORS } from "../../utils/constant/colors";

export const CheckoutContainer = styled.div`
	width: 65%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	font-size: 1.6rem;

	@media screen and (max-width: 800px) {
		width: 90%;
		font-size: 1.4rem;
	}
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	max-width: 800px;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;

export const Total = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;

type PaymentContainerProps = { isCartEmpty: boolean } & React.CSSProperties;
export const PaymentContainer = styled.div<PaymentContainerProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 3rem;

	button {
		pointer-events: ${(props) => (props.isCartEmpty ? "none" : null)};

		width: 200px;
		background-color: ${(props) =>
			props.isCartEmpty ? "grey" : COLORS.PRIMARY_COLOR_SPACE_CADET};

		&:hover {
			background-color: ${COLORS.WHITE};
			color: ${COLORS.PRIMARY_COLOR_SPACE_CADET};
			border: 1px solid ${COLORS.PRIMARY_COLOR_SPACE_CADET};
		}
	}
`;

export const MessageContainer = styled.div`
	button {
		width: 200px;
		color: ${COLORS.PRIMARY_COLOR_SPACE_CADET};
	}
`;
