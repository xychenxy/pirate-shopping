import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../product-card/product-card.component";
import {
	Title,
	CategoryPreviewContainer,
	Preview,
	ShopMore,
} from "./category-preview.styled";

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ products, title }) => {
	return (
		<CategoryPreviewContainer>
			<Title to={title}>{title.toUpperCase()}</Title>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product, index) => (
						<ProductCard product={product} key={index} />
					))}
			</Preview>
			<ShopMore to={title}>
				<span>Show more</span>
			</ShopMore>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
