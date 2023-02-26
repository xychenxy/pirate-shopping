import { PaymentStateProps } from "./payment.reducer";
import { ISetCartItems } from "../cart/cart.types";

export enum PAYMENT_ACTION_TYPES {
	FETCH_PAYMENT_START = "category/FETCH_PAYMENT_START",
	FETCH_PAYMENT_SUCCESS = "category/FETCH_PAYMENT_SUCCESS",
	FETCH_PAYMENT_FAILED = "category/FETCH_PAYMENT_FAILED",
	RESET_PAYMENT_STATUS = "category/RESET_PAYMENT_STATUS",
}

export interface IPaymentStart {
	type: typeof PAYMENT_ACTION_TYPES.FETCH_PAYMENT_START;
}

export interface IPaymentSuccess {
	type: typeof PAYMENT_ACTION_TYPES.FETCH_PAYMENT_SUCCESS;
	payload: string;
}

export interface IPaymentFailed {
	type: typeof PAYMENT_ACTION_TYPES.FETCH_PAYMENT_FAILED;
	payload: Error;
}

export interface IPaymentReset {
	type: typeof PAYMENT_ACTION_TYPES.RESET_PAYMENT_STATUS;
}

export type PaymentDispatchTypes =
	| IPaymentStart
	| IPaymentFailed
	| IPaymentSuccess
	| IPaymentReset
	| ISetCartItems;
