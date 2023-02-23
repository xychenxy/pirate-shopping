import { useAuth0 } from "@auth0/auth0-react";
import { LoginButtonWrap } from "./buttons.styled";

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/",
			},
			authorizationParams: {
				prompt: "login",
			},
		});
	};

	return <LoginButtonWrap onClick={handleLogin}>Log In</LoginButtonWrap>;
};
