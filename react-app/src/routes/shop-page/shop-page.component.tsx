import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useAppDispatch } from "../../store/hooks";

import { PageLayout } from "../../components/page-layout/page-layout.component";

const Shop = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesAsync());
	}, []);

	return (
		<PageLayout>
			<Routes>
				<Route index element={<CategoriesPreview />} />
				<Route path=":category" element={<Category />} />
			</Routes>
		</PageLayout>
	);
};
export default Shop;
