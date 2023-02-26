export enum PROFILE_ACTION_TYPES {
	FETCH_PROFILE_START = "category/FETCH_PROFILE_START",
	FETCH_PROFILE_SUCCESS = "category/FETCH_PROFILE_SUCCESS",
	FETCH_PROFILE_FAILED = "category/FETCH_PROFILE_FAILED",
}

export interface IProfileStart {
	type: typeof PROFILE_ACTION_TYPES.FETCH_PROFILE_START;
}

export interface IProfileSuccess {
	type: typeof PROFILE_ACTION_TYPES.FETCH_PROFILE_SUCCESS;
	payload: string;
}

export interface IProfileFailed {
	type: typeof PROFILE_ACTION_TYPES.FETCH_PROFILE_FAILED;
	payload: Error;
}

export type ProfileDispatchTypes =
	| IProfileStart
	| IProfileFailed
	| IProfileSuccess;
