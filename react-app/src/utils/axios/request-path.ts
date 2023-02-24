export const BASE_URL =
	import.meta.env.VITE_BACKEND_URL || window.location.origin;
export const VERSION = "v1";

export const CATEGORIES_REQUEST_PATH = `${BASE_URL}/${VERSION}/categories`;
export const DIRECTORY_REQUEST_PATH = `${BASE_URL}/${VERSION}/directory`;
