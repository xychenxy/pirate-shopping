import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoader } from "../page-loader/page-loader.component";

export const AuthenticationGuard = ({ component }: { component: any }) => {
	const Component = withAuthenticationRequired(component, {
		onRedirecting: () => <PageLoader />,
	});

	return <Component />;
};
