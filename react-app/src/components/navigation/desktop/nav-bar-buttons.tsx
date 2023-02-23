import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/signup-button";

import { NavBarButtonsContainer } from "./nav-bars.styled";

export const NavBarButtons = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<NavBarButtonsContainer>
			{!isAuthenticated && (
				<>
					<LoginButton />
					<SignupButton />
				</>
			)}
			{isAuthenticated && (
				<>
					<LogoutButton />
				</>
			)}
		</NavBarButtonsContainer>
	);
};
