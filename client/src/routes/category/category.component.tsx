import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Title, CategoryContainer } from "./category.styled";
import ProductCard from "../../components/product-card/product-card.component";
import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

type CategoryRouteParams = {
	category: string;
};
const Category = () => {
	const { category } = useParams<
		keyof CategoryRouteParams
	>() as CategoryRouteParams;

	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<Title>{category?.toUpperCase()}</Title>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
				</CategoryContainer>
			)}
		</>
	);
};

export default Category;
