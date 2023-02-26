import { useAuth0 } from "@auth0/auth0-react";
import { NavBarTab } from "./nav-bar-tab";
import { NavBarTabsContainer } from "./nav-bars.styled";

export const NavBarTabs = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<NavBarTabsContainer>
			<NavBarTab path="/shop" label="Shop" />
			<NavBarTab path="/checkout" label="Checkout" />
			{isAuthenticated && (
				<>
					{/* <NavBarTab path="/protected" label="Protected" /> */}
					<NavBarTab path="/profile" label="Profile" />
					{/* <NavBarTab path="/admin" label="Admin" /> */}
				</>
			)}
		</NavBarTabsContainer>
	);
};
