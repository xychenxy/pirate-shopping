// import { setup } from "axios-cache-adapter";

// export const axiosApi = setup({
// 	baseURL: import.meta.env.VITE_BACKEND_URL || window.location.origin,
// 	cache: {
// 		maxAge: 60 * 60 * 1000, // 1 hour
// 		exclude: {
// 			methods: ["put", "patch", "delete"],
// 		},
// 	},
// });

export const BASE_URL =
	import.meta.env.VITE_BACKEND_URL || window.location.origin;
