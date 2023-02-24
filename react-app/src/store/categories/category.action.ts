import axios from "axios";
import { Dispatch } from "redux";
import { BASE_URL } from "../../utils/cache/api.cache";
import {
	CATEGORIES_ACTION_TYPES,
	Category,
	CategoriesDispatchTypes,
} from "./category.types";

export const fetchCategoriesAsync =
	() => async (dispatch: Dispatch<CategoriesDispatchTypes>) => {
		try {
			dispatch({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START });

			await axios
				.post(
					`${BASE_URL}/v1/categories`,
					{},
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem(
								"token"
							)}`,
						},
					}
				)
				.then((response) => {
					dispatch({
						type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
						payload: response.data as Category[],
					});
				});
		} catch (error) {
			dispatch({
				type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
				payload: error as Error,
			});
		}
	};
