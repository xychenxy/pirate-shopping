export enum DIRECTORY_ACTION_TYPES {
	FETCH_DIRECTORY_START = "category/FETCH_DIRECTORY_START",
	FETCH_DIRECTORY_SUCCESS = "category/FETCH_DIRECTORY_SUCCESS",
	FETCH_DIRECTORY_FAILED = "category/FETCH_DIRECTORY_FAILED",
}

export type DirectoryCategory = {
	imageUrl: string;
	title: string;
};

export type DirectoryCategoryMap = {
	[key: string]: DirectoryCategory;
};

export interface IDirectoryStart {
	type: typeof DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_START;
}

export interface IDirectorySuccess {
	type: typeof DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_SUCCESS;
	payload: DirectoryCategory[];
}

export interface IDirectoryFailed {
	type: typeof DIRECTORY_ACTION_TYPES.FETCH_DIRECTORY_FAILED;
	payload: Error;
}

export type DirectoryDispatchTypes =
	| IDirectoryStart
	| IDirectoryFailed
	| IDirectorySuccess;
