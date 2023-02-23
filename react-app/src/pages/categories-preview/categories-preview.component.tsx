import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title, index) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview
							products={products}
							title={title}
							key={index}
						/>
					);
				})
			)}
		</>
	);
};

export default CategoriesPreview;
