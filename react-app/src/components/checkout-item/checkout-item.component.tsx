import { FC, memo } from "react";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

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
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);
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
			<BaseSpan> {name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>
					<MinusIcon />
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>
					<PlusIcon />
				</Arrow>
			</Quantity>
			<BaseSpan> ${price}</BaseSpan>
			<RemoveButton onClick={clearItemHandler}>
				<RemoveIcon />
			</RemoveButton>
		</CheckoutItemContainer>
	);
});
export default CheckoutItem;
