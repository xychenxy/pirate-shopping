import React from "react";
import { MobileMenuToggleButton } from "./mobile-menu-toggle-button";
import { MobileNavBarBrand } from "./mobile-nav-bar-brand";
import { MobileNavBarButtons } from "./mobile-nav-bar-buttons";
import { MobileNavBarTabs } from "./mobile-nav-bar-tabs";

import {
	MobileNavBarContainer,
	MobileNavBarNav,
	MobileNavBarMenuContainer,
} from "./mobile-nav-bar.styled";

const MobileMenuState = {
	CLOSED: "closed",
	OPEN: "open",
};

const MobileMenuIcon = {
	CLOSE: "close",
	MENU: "menu",
};

export const MobileNavBar = () => {
	const [mobileMenuState, setMobileMenuState] = React.useState(
		MobileMenuState.CLOSED
	);
	const [mobileMenuIcon, setMobileMenuIcon] = React.useState(
		MobileMenuIcon.MENU
	);

	const isMobileMenuOpen = () => {
		return mobileMenuState === MobileMenuState.OPEN;
	};

	const closeMobileMenu = () => {
		document.body.classList.remove("mobile-scroll-lock");
		setMobileMenuState(MobileMenuState.CLOSED);
		setMobileMenuIcon(MobileMenuIcon.MENU);
	};

	const openMobileMenu = () => {
		document.body.classList.add("mobile-scroll-lock");
		setMobileMenuState(MobileMenuState.OPEN);
		setMobileMenuIcon(MobileMenuIcon.CLOSE);
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
				<MobileMenuToggleButton
					icon={mobileMenuIcon}
					handleClick={toggleMobileMenu}
				/>

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
