import axios from "axios";
import { Dispatch } from "redux";
import { CATEGORIES_REQUEST_PATH } from "../../utils/axios/request-path";
import {
	CATEGORIES_ACTION_TYPES,
	Category,
	CategoriesDispatchTypes,
} from "./category.types";

export const fetchCategoriesAsync =
	() => async (dispatch: Dispatch<CategoriesDispatchTypes>) => {
		try {
			dispatch({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START });

			await axios.get(CATEGORIES_REQUEST_PATH).then((response) => {
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
