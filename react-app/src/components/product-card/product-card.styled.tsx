import styled from "styled-components";
import { COLORS } from "../../utils/constant/colors";

export const ProductCartContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	max-width: 285px;
	max-height: 350px;
	margin-bottom: 4rem;
	margin-left: 2rem;
	margin-right: 2rem;
	img {
		width: 100%;
		height: 95%;
		object-fit: cover;
		margin-bottom: 5px;
		border-radius: 5%;
		opacity: 1;
		transition: opacity 1s;

		&:hover {
			opacity: 0.5;
		}
	}

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 230px;

		&:hover {
			transition: background-color 1s color 1s;

			background-color: ${COLORS.BLACK};
			color: ${COLORS.WHITE};
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;

		button {
			display: block;
			opacity: 0.9;
			min-width: unset;
			padding: 0 10px;

			&:hover {
				img {
					opacity: unset;
				}

				button {
					opacity: unset;
				}
			}
		}
	}

	@media screen and (max-width: 400px) {
		width: 80vw;
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const Price = styled.span`
	width: 10%;
`;
