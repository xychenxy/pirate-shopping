import { NavBarBrand } from "./nav-bar-brand";
import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarTabs } from "./nav-bar-tabs";
import { NavBarCart } from "./nav-bar-cart";

import { NavBarContainer, NavBarWrap } from "./nav-bars.styled";

export const NavBar = () => {
	return (
		<NavBarContainer>
			<NavBarWrap>
				<NavBarBrand />
				<NavBarTabs />
				<NavBarCart />
				<NavBarButtons />
			</NavBarWrap>
		</NavBarContainer>
	);
};
