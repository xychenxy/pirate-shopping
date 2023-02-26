import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import CartIcon from "../../cart-icon/cart-icon.component";
import CardDropDown from "../../cart-dropdown/cart-dropdown.component";
import { useAppSelector } from "../../../store/hooks";

export const NavBarCart = () => {
	const isCartOpen = useAppSelector(selectIsCartOpen);

	return (
		<>
			<CartIcon />
			{isCartOpen && <CardDropDown />}
		</>
	);
};
