import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
	CartItemsWrap,
	CloseIconWrap,
} from "./cart-dropdown.styled";
import CartItem from "../cart-item/cart-item.component";
import {
	selectCartItems,
	selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { useCallback } from "react";
import { BasicButton } from "../buttons/basic-button";
import { COLORS } from "../../utils/constant/colors";
import { ReactComponent as CloseIcon } from "../../assets/close-square.svg";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CardDropDown = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};

	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = useCallback(() => {
		toggleIsCartOpen();
		navigate("/checkout");
	}, []);

	return (
		<CartDropdownContainer>
			<CartItemsWrap>
				<CloseIconWrap onClick={toggleIsCartOpen}>
					<CloseIcon />
				</CloseIconWrap>

				<CartItems>
					{cartItems.length ? (
						cartItems.map((item) => (
							<CartItem cartItem={item} key={item.id} />
						))
					) : (
						<EmptyMessage>Your cart is empty</EmptyMessage>
					)}
				</CartItems>
			</CartItemsWrap>

			<BasicButton
				onClick={goToCheckoutHandler}
				backgroundColor={COLORS.PRIMARY_COLOR_SPACE_CADET}
				width="100%"
			>
				Go To Checkout
			</BasicButton>
		</CartDropdownContainer>
	);
};

export default CardDropDown;
