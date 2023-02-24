import { createAction, withMatcher } from "../../utils/reducer/reducer.util";
import {
	CART_ACTION_TYPES,
	CartItem,
	CartDispatchTypes,
	ISetIsCartOpen,
	ISetCartItems,
} from "./cart.types";
import { CategoryItem } from "../categories/category.types";
import { ActionWithPayload } from "../../utils/reducer/reducer.util";
import { Dispatch } from "redux";

// helper function
const addCartItem = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
): CartItem[] => {
	// find if contains productToAdd
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	// if found, increase quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	// return new array with modified cartItems
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
	cartItems: CartItem[],
	cartItemToRemove: CartItem
): CartItem[] => {
	// find the item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	// check if quantity is equal to 1, if it is remove that from the cart
	if (existingCartItem && existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== cartItemToRemove.id
		);
	}
	// return back cart items with matching cart item reduce quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (
	cartItems: CartItem[],
	cartItemToClear: CategoryItem
): CartItem[] => {
	// find the item to clear
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<
	CART_ACTION_TYPES.SET_IS_CART_OPEN,
	boolean
>;

export type SetCartItems = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_ITEMS,
	CartItem[]
>;

// export const setIsCartOpen = withMatcher(
// 	(boolean: boolean): SetIsCartOpen =>
// 		createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
// );

export const setIsCartOpen =
	(boolean: boolean) => (dispatch: Dispatch<ISetIsCartOpen>) => {
		dispatch({
			type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
			payload: boolean,
		});
	};

export const setCartItems =
	(cartItems: CartItem[]) => (dispatch: Dispatch<ISetCartItems>) => {
		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: cartItems,
		});
	};

export const addItemToCart =
	(cartItems: CartItem[], productToAdd: CategoryItem) =>
	(dispatch: Dispatch<ISetCartItems>) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: newCartItems,
		});
	};

export const removeItemFromCart =
	(cartItems: CartItem[], cartItem: CartItem) =>
	(dispatch: Dispatch<ISetCartItems>) => {
		const newCartItems = removeCartItem(cartItems, cartItem);
		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: newCartItems,
		});
	};

export const clearItemFromCart =
	(cartItems: CartItem[], cartItem: CartItem) =>
	(dispatch: Dispatch<ISetCartItems>) => {
		const newCartItems = clearCartItem(cartItems, cartItem);
		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: newCartItems,
		});
	};
