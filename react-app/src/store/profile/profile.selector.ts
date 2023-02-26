import { createSelector } from "reselect";
import { RootState } from "../store";
import { ProfileStateProps } from "./profile.reducer";

const selectProfileReducer = (state: RootState): ProfileStateProps =>
	state.profile;

export const selectProfileIsLoading = createSelector(
	[selectProfileReducer],
	(slice) => slice.isLoading
);

export const selectProfileError = createSelector(
	[selectProfileReducer],
	(slice) => slice.error
);

export const selectProfileData = createSelector(
	[selectProfileReducer],
	(slice) => {
		return slice.profile;
	}
);
