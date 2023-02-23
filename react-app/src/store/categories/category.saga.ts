import axios from "axios";
import { call, all, put, takeLatest } from "typed-redux-saga/macro";
import {
	fetchCategoriesFailed,
	fetchCategoriesSuccess,
} from "./category.action";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { BASE_URL } from "../../utils/cache/api.cache";

export function* fetchCategoriesAsync() {
	try {
		const accessToken = localStorage.getItem("token");

		const getCategoriesAndDocuments = async (): Promise<Category[]> => {
			const fetchCategories = await axios
				.post(
					`${BASE_URL}/v1/categories`,
					{},
					{
						headers: { Authorization: `Bearer ${accessToken}` },
					}
				)
				.then((response) => {
					console.log("categories", response.data);

					return response.data;
				});
			return fetchCategories;
		};
		const categoriesArray = yield* call(getCategoriesAndDocuments);

		yield* put(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		yield* put(fetchCategoriesFailed(error as Error));
	}
}

export function* onFetchCategories() {
	yield* takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
		fetchCategoriesAsync
	);
}

export function* categoriesSaga() {
	yield* all([call(onFetchCategories)]);
}
