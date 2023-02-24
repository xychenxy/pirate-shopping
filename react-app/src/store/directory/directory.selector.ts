import { createSelector } from "reselect";
import { DirectoryState } from "./directory.reducer";
import { RootState } from "../store";

const selectDirectoryReducer = (state: RootState): DirectoryState =>
	state.directory;
console.log("selectDirectoryReducer", selectDirectoryReducer);

export const selectDirectoryMap = createSelector(
	[selectDirectoryReducer],
	(slice) => slice.directory
);

export const selectDirectoryIsLoading = createSelector(
	[selectDirectoryReducer],
	(slice) => slice.isLoading
);
