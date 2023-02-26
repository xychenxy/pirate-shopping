import React from "react";
import { MobileMenuToggleButton } from "./mobile-menu-toggle-button";
import { MobileNavBarBrand } from "./mobile-nav-bar-brand";
import { MobileNavBarButtons } from "./mobile-nav-bar-buttons";
import { MobileNavBarTabs } from "./mobile-nav-bar-tabs";
import { MobileNavBarCart } from "./mobile-nav-bar-cart";

import {
	MobileNavBarContainer,
	MobileNavBarNav,
	MobileNavBarMenuContainer,
} from "./mobile-nav-bar.styled";

const MobileMenuState = {
	CLOSED: "closed",
	OPEN: "open",
};

export const MobileNavBar = () => {
	const [mobileMenuState, setMobileMenuState] = React.useState(
		MobileMenuState.CLOSED
	);

	const isMobileMenuOpen = () => {
		return mobileMenuState === MobileMenuState.OPEN;
	};

	const closeMobileMenu = () => {
		document.body.classList.remove("mobile-scroll-lock");
		setMobileMenuState(MobileMenuState.CLOSED);
	};

	const openMobileMenu = () => {
		document.body.classList.add("mobile-scroll-lock");
		setMobileMenuState(MobileMenuState.OPEN);
	};

	const toggleMobileMenu = () => {
		if (isMobileMenuOpen()) {
			closeMobileMenu();
		} else {
			openMobileMenu();
		}
	};

	return (
		<MobileNavBarContainer>
			<MobileNavBarNav>
				<MobileNavBarBrand handleClick={closeMobileMenu} />
				<MobileNavBarCart handleClick={closeMobileMenu} />
				<MobileMenuToggleButton handleClick={toggleMobileMenu} />
				{isMobileMenuOpen() && (
					<MobileNavBarMenuContainer>
						<MobileNavBarTabs handleClick={closeMobileMenu} />
						<MobileNavBarButtons />
					</MobileNavBarMenuContainer>
				)}
			</MobileNavBarNav>
		</MobileNavBarContainer>
	);
};
