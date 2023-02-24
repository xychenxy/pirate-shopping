import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./utils/global-styled/global-styled.utils";

import { PageLoader } from "./components/page-loader/page-loader.component";
import { CallbackPage } from "./routes/callback-page/callback-page.component";
import { ProfilePage } from "./routes/profile-page/profile-page.component";
import { AuthenticationGuard } from "./components/authentication-guard/authentication-guard.component";
import { NotFoundPage } from "./routes/not-found-page/not-found-page.component";

const HomePage = lazy(() => import("./routes/home-page/home-page.component"));
const ShopPage = lazy(() => import("./routes/shop-page/shop-page.component"));
const CheckoutPage = lazy(
	() => import("./routes/checkout-page/checkout-page.component")
);

function App() {
	const { isLoading, getAccessTokenSilently, isAuthenticated } = useAuth0();

	useEffect(() => {
		try {
			const fetchAccessToken = async () => {
				const newAccessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: import.meta.env.VITE_AUTH0_AUDIENCE,
						scope: "read:current_user",
					},
				});

				localStorage.setItem("token", newAccessToken);
			};
			if (isAuthenticated) {
				fetchAccessToken();
			}
		} catch (e: any) {
			console.log("error", e.message);
		}
	}, [getAccessTokenSilently, isAuthenticated]);

	if (isLoading) {
		return <PageLoader />;
	}

	return (
		<Suspense fallback={<Spinner />}>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="shop/*" element={<ShopPage />} />
				<Route path="checkout" element={<CheckoutPage />} />
				<Route
					path="profile"
					element={<AuthenticationGuard component={ProfilePage} />}
				/>
				<Route path="/callback" element={<CallbackPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
}

export default App;
