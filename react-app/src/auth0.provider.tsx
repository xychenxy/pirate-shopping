import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import react_cloud_key from "../auth/react_cloud_key.json";

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
			domain={react_cloud_key.auth0_domain}
			clientId={react_cloud_key.auth0_clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
				audience: react_cloud_key.auth0_audience,
			}}
			onRedirectCallback={onRedirectCallback}
			// scope="read:current_user"
		>
			{children}
		</Auth0Provider>
	);
};
