import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	MessageContainer,
	PaymentContainer,
	Total,
} from "./checkout-page.styled";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { PageLayout } from "../../components/page-layout/page-layout.component";
import { Payment } from "../../components/payment/payment.component";
import {
	selectPaymentError,
	selectPaymentIsLoading,
	selectPaymentMessage,
} from "../../store/payment/payment.selector";
import { useEffect } from "react";
import { BasicButton } from "../../components/buttons/basic-button";
import Spinner from "../../components/spinner/spinner.component";
import { resetPaymentStatus } from "../../store/payment/payment.action";

const Checkout = () => {
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);
	const cartTotal = useAppSelector(selectCartTotal);

	const message = useAppSelector(selectPaymentMessage);
	const error = useAppSelector(selectPaymentError);
	const isLoading = useAppSelector(selectPaymentIsLoading);

	const isCartEmpty = !cartItems.length;

	useEffect(() => {
		dispatch(resetPaymentStatus());
	}, []);

	return (
		<PageLayout>
			<CheckoutContainer>
				{error ? (
					<MessageContainer>
						<h3>Something went wrong with payment.</h3>
					</MessageContainer>
				) : message === "success" ? (
					<MessageContainer>
						<h3>Congratulation! Your order is processed now.</h3>
						<div>
							<h4>
								Following up your orders in{" "}
								<Link to={"/profile"}>
									<BasicButton>Profile</BasicButton>
								</Link>
							</h4>
						</div>
					</MessageContainer>
				) : isLoading ? (
					<Spinner />
				) : isCartEmpty ? (
					<MessageContainer>
						<h3>Your cart is empty!</h3>

						<Link to={"/shop"}>
							<BasicButton>Shop More</BasicButton>
						</Link>
					</MessageContainer>
				) : (
					<>
						<CheckoutHeader>
							{[
								"Product",
								"Description",
								"Quantity",
								"Price",
								"Remove",
							].map((name: string, index: number) => (
								<HeaderBlock key={index}>
									<span>{name}</span>
								</HeaderBlock>
							))}
						</CheckoutHeader>
						{cartItems.map((cartItem, index) => (
							<CheckoutItem cartItem={cartItem} key={index} />
						))}
						<Total>Total: ${cartTotal}</Total>
						{/* <PaymentForm /> */}
						<PaymentContainer isCartEmpty={isCartEmpty}>
							<Payment />
						</PaymentContainer>
					</>
				)}
			</CheckoutContainer>
		</PageLayout>
	);
};
export default Checkout;
