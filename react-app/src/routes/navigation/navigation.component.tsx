import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	NavigationContainer,
	LogoContainer,
	NavLink,
	NavLinks,
} from "./navigation.styled";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

import LoginButton from "../../components/sign-in-form/login.form.component";
import LogoutButton from "../../components/sign-in-form/signout.form.component";

const Navigation = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutHandler = () => dispatch(signOutStart());
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutHandler}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<LoginButton />
					<LogoutButton />
					<CartIcon />
					{isCartOpen && <CardDropDown />}
				</NavLinks>
			</NavigationContainer>

			<Outlet />
		</Fragment>
	);
};

export default Navigation;
