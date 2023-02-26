import styled from "styled-components";
import { COLORS } from "../../utils/constant/colors";

export type ButtonWrapProp = {
	backgroundColor?: string;
	width?: string;
};
export const ButtonWrap = styled.button<ButtonWrapProp>`
	cursor: pointer;

	border: 0;
	border-radius: 0.8rem;

	font-family: "Inter", sans-serif;
	font-weight: 600;
	color: ${(props) => (props.color ? props.color : COLORS.WHITE)};
	border: ${(props) =>
		props.backgroundColor ? `0.1rem solid ${props.backgroundColor}` : 0};
	background-color: ${(props) => props.backgroundColor};

	cursor: pointer;
	user-select: none;

	transition: background 0.3s ease-out, color 0.3s ease-out;

	/* responsive */

	min-width: 10rem;
	width: ${(props) => (props.width ? props.width : "10rem")};
	padding: 1.6rem 1.6rem;

	font-size: 1.6rem;
	line-height: 2.4rem;

	@media only screen and (max-width: 480px) {
		/* responsive */

		min-width: 0.8rem;
		padding: 1rem 1.2rem;

		font-size: 1.3rem;
		line-height: 2.2rem;
	}
`;

export const LoginButtonWrap = styled(ButtonWrap)`
	min-width: 8.4rem;

	border: 0.1rem solid ${COLORS.INDIGO};
	color: ${COLORS.PRIMARY_COLOR_SPACE_CADET};
	background-color: transparent;
	width: 50%;
	font-size: 1.6rem;

	margin-right: 1.6rem;

	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: 600;
	line-height: 3.2rem;
	padding: 0.8rem 0;
	border-radius: 0.8rem;
	text-align: center;

	cursor: pointer;
	user-select: none;

	transition: background 0.3s ease-out, color 0.3s ease-out;

	&:last-child {
		margin-right: 0;
	}

	@media only screen and (min-width: 641px) {
		padding: 0.8rem 1.2rem;

		font-size: 1.4rem;
		line-height: 1.6rem;
	}
`;

export const LogoutButtonWrap = styled(LoginButtonWrap)``;

export const SignUpButtonWrap = styled(LoginButtonWrap)`
	min-width: 8.4rem;

	border: 0.1rem solid ${COLORS.WHITE};
	color: ${COLORS.WHITE};
	background: ${COLORS.INDIGO};
	width: 50%;
	font-size: 1.6rem;

	margin-right: 1.6rem;

	font-style: normal;
	font-weight: 500;
	line-height: 3.2rem;
	padding: 0.8rem 0;
	border-radius: 0.8rem;
	text-align: center;

	cursor: pointer;
	user-select: none;

	&:last-child {
		margin-right: 0;
	}

	@media only screen and (min-width: 641px) {
		padding: 0.8rem 1.2rem;

		font-size: 1.4rem;
		line-height: 1.6rem;
	}
`;
