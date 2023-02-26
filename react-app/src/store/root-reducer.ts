import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { paymentReducer } from "./payment/payment.reducer";
import { profileReducer } from "./profile/profile.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
	directory: directoryReducer,
	payment: paymentReducer,
	profile: profileReducer,
});
