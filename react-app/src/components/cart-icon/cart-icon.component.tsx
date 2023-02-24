import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-cart.svg";
import {
	CartIconContainer,
	ItemCount,
	ItemCountWrap,
} from "./cart-icon.styled";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
	selectIsCartOpen,
	selectCartCount,
} from "../../store/cart/cart.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const CartIcon = () => {
	const dispatch = useAppDispatch();
	const isCartOpen = useAppSelector(selectIsCartOpen);
	const cartCount = useAppSelector(selectCartCount);

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingCartIcon />

			<ItemCountWrap>
				<ItemCount>{cartCount > 100 ? "..." : cartCount}</ItemCount>
			</ItemCountWrap>
		</CartIconContainer>
	);
};

export default CartIcon;
