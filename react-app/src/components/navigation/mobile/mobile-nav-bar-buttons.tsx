import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/signup-button";

import { MobileNavBarButtonsContainer } from "./mobile-nav-bar.styled";

export const MobileNavBarButtons = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<MobileNavBarButtonsContainer>
			{!isAuthenticated && (
				<>
					<SignupButton />
					<LoginButton />
				</>
			)}
			{isAuthenticated && (
				<>
					<LogoutButton />
				</>
			)}
		</MobileNavBarButtonsContainer>
	);
};
