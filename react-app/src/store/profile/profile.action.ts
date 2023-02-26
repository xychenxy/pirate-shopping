import axios from "axios";
import { Dispatch } from "redux";
import { PROFILE_REQUEST_PATH } from "../../utils/axios/request-path";
import { ProfileDispatchTypes, PROFILE_ACTION_TYPES } from "./profile.types";

export const fetchProfileAsync =
	(email: string) => async (dispatch: Dispatch<ProfileDispatchTypes>) => {
		try {
			dispatch({ type: PROFILE_ACTION_TYPES.FETCH_PROFILE_START });

			await axios
				.get(`${PROFILE_REQUEST_PATH}/${email}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
				})
				.then((response) => {
					dispatch({
						type: PROFILE_ACTION_TYPES.FETCH_PROFILE_SUCCESS,
						payload: response.data,
					});
				});
		} catch (error) {
			dispatch({
				type: PROFILE_ACTION_TYPES.FETCH_PROFILE_FAILED,
				payload: error as Error,
			});
		}
	};
