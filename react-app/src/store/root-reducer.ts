import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
	directory: directoryReducer,
});
