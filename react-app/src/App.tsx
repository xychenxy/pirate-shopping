import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styled";

import { PageLoader } from "./components/page-loader/page-loader.component";
import { CallbackPage } from "./pages/callback-page/callback-page.component";
import { ProfilePage } from "./pages/profile-page/profile-page.component";
import { AuthenticationGuard } from "./components/authentication-guard/authentication-guard.component";
import { NotFoundPage } from "./pages/not-found-page/not-found-page.component";

const Home = lazy(() => import("./pages/home/home.component"));
const Shop = lazy(() => import("./pages/shop/shop.component"));
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));

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
				<Route path="/" element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="checkout" element={<Checkout />} />
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
