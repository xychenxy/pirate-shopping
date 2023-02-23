import { useAuth0 } from "@auth0/auth0-react";
import { SignUpButtonWrap } from "./buttons.styled";

export const SignupButton = () => {
	const { loginWithRedirect } = useAuth0();

	const handleSignUp = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: "/",
			},
			authorizationParams: {
				prompt: "login",
				screen_hint: "signup",
			},
		});
	};

	return <SignUpButtonWrap onClick={handleSignUp}>Sign Up</SignUpButtonWrap>;
};
