import styled from "styled-components";

export const CategoryContainer = styled.div`
	/* display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px; */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;

	@media only screen and (max-width: 640px) {
		/* grid-template-columns: repeat(1, 1fr); */
	}
	/* 
	@media only screen and (max-width: 340px) {
		grid-template-columns: repeat(1, 1fr);
	} */
`;

export const Title = styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
`;
