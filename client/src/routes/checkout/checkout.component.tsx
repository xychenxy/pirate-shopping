import { useSelector } from "react-redux";
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from "./checkout.styled";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				{["Product", "Description", "Quantity", "Price", "Remove"].map(
					(name: string, index: number) => (
						<HeaderBlock key={index}>
							<span>{name}</span>
						</HeaderBlock>
					)
				)}
			</CheckoutHeader>
			{cartItems.map((cartItem, index) => (
				<CheckoutItem cartItem={cartItem} key={index} />
			))}
			<Total>Total: ${cartTotal}</Total>
			<PaymentForm />
		</CheckoutContainer>
	);
};
export default Checkout;
