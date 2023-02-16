import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from "./checkout-item.styled";
import {
	clearItemFromCart,
	removeItemFromCart,
	addItemToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";

type CheckoutItemProps = {
	cartItem: CartItem;
};
const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const { name, imageUrl, price, quantity } = cartItem;

	const clearItemHandler = () => {
		dispatch(clearItemFromCart(cartItems, cartItem));
	};

	const removeItemHandler = () => {
		dispatch(removeItemFromCart(cartItems, cartItem));
	};

	const addItemHandler = () => {
		dispatch(addItemToCart(cartItems, cartItem));
	};

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpan> {name} </BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan> {price}</BaseSpan>{" "}
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
});
export default CheckoutItem;
