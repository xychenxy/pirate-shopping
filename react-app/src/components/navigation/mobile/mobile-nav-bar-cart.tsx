import { MobileNavBarCartContainer } from "./mobile-nav-bar.styled";
import { ReactComponent as ShoppingCartIcon } from "../../../assets/shopping-cart-white.svg";
import { useAppSelector } from "../../../store/hooks";
import { selectCartCount } from "../../../store/cart/cart.selector";

type MobileNavBarCartProps = {
	handleClick: () => void;
};
export const MobileNavBarCart = ({ handleClick }: MobileNavBarCartProps) => {
	const cartCount = useAppSelector(selectCartCount);
	return (
		<MobileNavBarCartContainer onClick={handleClick} to="/checkout">
			<ShoppingCartIcon />
			<span>{cartCount > 100 ? "..." : cartCount}</span>
		</MobileNavBarCartContainer>
	);
};
