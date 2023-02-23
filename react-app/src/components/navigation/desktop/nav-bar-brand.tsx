import { NavLink } from "react-router-dom";
import { NavBarBrandContainer, NavBarBrandLogo } from "./nav-bars.styled";
import { ReactComponent as Logo } from "../../../assets/pirate-ship.svg";

export const NavBarBrand = () => {
	return (
		<NavBarBrandContainer>
			<NavLink to="/">
				<NavBarBrandLogo>
					<Logo />
				</NavBarBrandLogo>
			</NavLink>
		</NavBarBrandContainer>
	);
};
