import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../product-card/product-card.component";
import {
	Title,
	CategoryPreviewContainer,
	Preview,
} from "./category-preview.styled";

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ products, title }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product, index) => (
						<ProductCard product={product} key={index} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
