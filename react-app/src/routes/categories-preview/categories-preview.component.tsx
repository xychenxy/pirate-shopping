import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";
import { useAppSelector } from "../../store/hooks";

const CategoriesPreview = () => {
	const categoriesMap = useAppSelector(selectCategoriesMap);
	const isLoading = useAppSelector(selectCategoriesIsLoading);

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
