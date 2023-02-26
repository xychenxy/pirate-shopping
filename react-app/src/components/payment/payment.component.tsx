import { useAuth0 } from "@auth0/auth0-react";
import { BasicButton } from "../buttons/basic-button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCartItems } from "../../store/cart/cart.selector";
import { fetchPaymentAsync } from "../../store/payment/payment.action";

export const Payment = () => {
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);

	const { isAuthenticated, loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/checkout",
			},
			authorizationParams: {
				prompt: "login",
			},
		});
	};

	const handlePayment = () => {
		dispatch(fetchPaymentAsync(cartItems));
	};

	return (
		<>
			{isAuthenticated ? (
				<BasicButton onClick={handlePayment}>Place Order</BasicButton>
			) : (
				<div>
					<h4>Please login to complete your order!</h4>
					<BasicButton onClick={handleLogin}>Login</BasicButton>
				</div>
			)}
		</>
	);
};
