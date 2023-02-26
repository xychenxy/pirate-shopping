import axios from "axios";
import { Dispatch } from "redux";
import { PAYMENT_REQUEST_PATH } from "../../utils/axios/request-path";
import { PaymentDispatchTypes, PAYMENT_ACTION_TYPES } from "./payment.types";
import { CartItem } from "../cart/cart.types";
import { CART_ACTION_TYPES } from "../cart/cart.types";

export const fetchPaymentAsync =
	(cartItems: CartItem[]) =>
	async (dispatch: Dispatch<PaymentDispatchTypes>) => {
		try {
			dispatch({ type: PAYMENT_ACTION_TYPES.FETCH_PAYMENT_START });

			await axios
				.post(
					PAYMENT_REQUEST_PATH,
					{ cart_items: cartItems },
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem(
								"token"
							)}`,
						},
					}
				)
				.then((response) => {
					dispatch({
						type: PAYMENT_ACTION_TYPES.FETCH_PAYMENT_SUCCESS,
						payload: response.data.message as string,
					});
					dispatch({
						type: CART_ACTION_TYPES.SET_CART_ITEMS,
						payload: [],
					});
				});
		} catch (error) {
			dispatch({
				type: PAYMENT_ACTION_TYPES.FETCH_PAYMENT_FAILED,
				payload: error as Error,
			});
		}
	};

export const resetPaymentStatus =
	() => (dispatch: Dispatch<PaymentDispatchTypes>) => {
		dispatch({
			type: PAYMENT_ACTION_TYPES.RESET_PAYMENT_STATUS,
		});
	};
