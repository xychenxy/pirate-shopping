import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";

import { PageLayout } from "../../components/page-layout/page-layout.component";

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesStart());
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
