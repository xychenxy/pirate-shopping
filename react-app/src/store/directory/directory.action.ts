import axios from "axios";
import { Dispatch } from "redux";
import { DIRECTORY_REQUEST_PATH } from "../../utils/axios/request-path";
import {
	DirectoryDispatchTypes,
	DIRECTORY_ACTION_TYPES,
	DirectoryCategory,
} from "./directory.types";

export const fetchDirectoryAsync =
	() => async (dispatch: Dispatch<DirectoryDispatchTypes>) => {
		try {
			dispatch({ type: DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_START });

			await axios.get(DIRECTORY_REQUEST_PATH).then((response) => {
				dispatch({
					type: DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_SUCCESS,
					payload: response.data as DirectoryCategory[],
				});
			});
		} catch (error) {
			dispatch({
				type: DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_FAILED,
				payload: error as Error,
			});
		}
	};
