import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState =>
	state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

/**
 * input selector is state.categories.categories
 * output is categories.reduce() result
 * if input doesn't change, just return previous result, don't need to calculate again
 */
export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories): CategoryMap =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading
);
