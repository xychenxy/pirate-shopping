import styled from "styled-components";

type BackgroundImageProps = {
	imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
	height: 90px;
	padding: 1rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
	border-radius: 3%;

	h2 {
		font-weight: bold;
		font-size: 22px;
		color: #4a4a4a;
		text-transform: uppercase;
		margin: 0;
	}

	p {
		font-weight: lighter;
		font-size: 16px;
		margin: 0;
		margin-top: 0.5rem;
	}
`;

export const DirectoryItemContainer = styled.div`
	min-width: 350px;
	height: 240px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	border-radius: 5%;

	&:hover {
		cursor: pointer;

		${BackgroundImage} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		${Body} {
			transition: opacity 1s;
			opacity: 0.9;
		}
	}

	@media screen and (max-width: 800px) {
		height: 200px;
		min-width: 300px;
	}
`;
