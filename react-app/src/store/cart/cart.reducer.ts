import { CartItem, CART_ACTION_TYPES, CartDispatchTypes } from "./cart.types";

export type CartState = {
	isCartOpen: boolean;
	cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: CartDispatchTypes
): CartState => {
	switch (action.type) {
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: action.payload,
			};
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: action.payload,
			};
		default:
			return state;
	}
};
