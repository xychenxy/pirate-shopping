import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
	signInFailed,
	signInSuccess,
	signOutFailed,
	signOutSuccess,
	signUpFailed,
} from "./user.action";

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
	const { payload } = action;
	if (signInSuccess.match(action)) {
		return { ...state, currentUser: payload };
	}
	if (signOutSuccess.match(action)) {
		return { ...state, currentUser: null };
	}
	if (
		signInFailed.match(action) ||
		signOutFailed.match(action) ||
		signUpFailed.match(action)
	) {
		return { ...state, error: payload };
	}

	return state;
};
