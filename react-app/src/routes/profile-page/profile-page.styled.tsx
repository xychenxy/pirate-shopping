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

export const UserInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const UserImage = styled.img`
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

export const UserDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;
	margin-left: 2rem;

	p {
		font-size: 1.6rem;
		margin: 0;
		margin-top: 0.5rem;
	}
`;

export const PurchaseHistory = styled.div`
	overflow-x: auto;

	width: 80%;
	margin: 0 auto;
	margin-top: 5rem;

	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
		border: 1px solid #ddd;
	}

	tr {
		font-size: 1.6rem;
		margin: 0;
		border-bottom: 1px solid ${COLORS.BLACK};
		background-color: aliceblue;
	}

	tr,
	th,
	td {
		padding: 2rem;
		text-align: left;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	@media only screen and (max-width: 640px) {
		width: 95%;
	}
`;

export const ItemContainer = styled.div`
	border-bottom: 1px solid ${COLORS.ALUMINIUM};
`;
