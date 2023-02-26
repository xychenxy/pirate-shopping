import { CartItem } from "../cart/cart.types";
import { PROFILE_ACTION_TYPES, ProfileDispatchTypes } from "./profile.types";

type ItemProps = CartItem & {
	status: string;
};

export type ProfileDataProps = {
	created_at: {
		_seconds: number;
		_nanoseconds: number;
	};
	order_id: string;
	status: string;
	subtotal: number;
	items: ItemProps[];
};

export type ProfileStateProps = {
	isLoading: boolean;
	error: Error | null;
	profile: ProfileDataProps[] | [];
};

const defaultState: ProfileStateProps = {
	isLoading: false,
	error: null,
	profile: [],
};

export const profileReducer = (
	state = defaultState,
	action: ProfileDispatchTypes
) => {
	switch (action.type) {
		case PROFILE_ACTION_TYPES.FETCH_PROFILE_START:
			return {
				...state,
				isLoading: true,
			};
		case PROFILE_ACTION_TYPES.FETCH_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload,
				isLoading: false,
			};
		case PROFILE_ACTION_TYPES.FETCH_PROFILE_FAILED:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
