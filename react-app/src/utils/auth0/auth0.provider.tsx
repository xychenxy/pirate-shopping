import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const navigate = useNavigate();

	const onRedirectCallback = (appState: any) => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={import.meta.env.VITE_AUTH0_DOMAIN}
			clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
			authorizationParams={{
				redirect_uri: window.location.origin,
				audience: import.meta.env.VITE_AUTH0_AUDIENCE,
			}}
			onRedirectCallback={onRedirectCallback}
			// scope="read:current_user"
		>
			{children}
		</Auth0Provider>
	);
};
