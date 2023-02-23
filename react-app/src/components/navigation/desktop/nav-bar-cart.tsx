import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import CartIcon from "../../cart-icon/cart-icon.component";
import CardDropDown from "../../cart-dropdown/cart-dropdown.component";

export const NavBarCart = () => {
	const isCartOpen = useSelector(selectIsCartOpen);

	return (
		<>
			<CartIcon />
			{isCartOpen && <CardDropDown />}
		</>
	);
};
