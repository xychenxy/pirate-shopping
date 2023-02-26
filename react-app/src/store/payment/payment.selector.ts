import { createSelector } from "reselect";
import { RootState } from "../store";
import { PaymentStateProps } from "./payment.reducer";

const selectPaymentReducer = (state: RootState): PaymentStateProps =>
	state.payment;

export const selectPaymentIsLoading = createSelector(
	[selectPaymentReducer],
	(slice) => slice.isLoading
);

export const selectPaymentError = createSelector(
	[selectPaymentReducer],
	(slice) => slice.error
);

export const selectPaymentMessage = createSelector(
	[selectPaymentReducer],
	(slice) => slice.message
);
