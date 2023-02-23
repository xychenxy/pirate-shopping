import { useDispatch, useSelector } from "react-redux";
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

const CartIcon = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

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
