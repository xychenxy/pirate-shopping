import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButtonWrap } from "./buttons.styled";

export const LogoutButton = () => {
	const { logout } = useAuth0();

	const handleLogout = () => {
		localStorage.clear();
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		});
	};

	return <LogoutButtonWrap onClick={handleLogout}>Log Out</LogoutButtonWrap>;
};
