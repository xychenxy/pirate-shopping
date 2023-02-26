import { PaymentDispatchTypes, PAYMENT_ACTION_TYPES } from "./payment.types";

export type PaymentStateProps = {
	isLoading: boolean;
	error: Error | null;
	message: string | null;
};

export const defaultState: PaymentStateProps = {
	isLoading: false,
	error: null,
	message: null,
};

export const paymentReducer = (
	state = defaultState,
	action: PaymentDispatchTypes
) => {
	switch (action.type) {
		case PAYMENT_ACTION_TYPES.FETCH_PAYMENT_START:
			return {
				...state,
				isLoading: true,
			};
		case PAYMENT_ACTION_TYPES.FETCH_PAYMENT_SUCCESS:
			return {
				...state,
				message: action.payload,
				isLoading: false,
			};
		case PAYMENT_ACTION_TYPES.FETCH_PAYMENT_FAILED:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		case PAYMENT_ACTION_TYPES.RESET_PAYMENT_STATUS:
			return {
				isLoading: false,
				error: null,
				message: null,
			};
		default:
			return state;
	}
};
