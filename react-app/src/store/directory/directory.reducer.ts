import {
	DirectoryDispatchTypes,
	DIRECTORY_ACTION_TYPES,
	DirectoryCategory,
} from "./directory.types";

export type DirectoryState = {
	readonly directory: DirectoryCategory[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};
const DefaultState: DirectoryState = {
	directory: [],
	isLoading: false,
	error: null,
};

export const directoryReducer = (
	state = DefaultState,
	action: DirectoryDispatchTypes
): DirectoryState => {
	switch (action.type) {
		case DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_START:
			return {
				...state,
				isLoading: true,
			};
		case DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_SUCCESS:
			return {
				...state,
				directory: action.payload,
				isLoading: false,
			};
		case DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_FAILED:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
