import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import { store, persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.util";
import { Auth0ProviderWithNavigate } from "./auth0.provider";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<BrowserRouter>
					<Auth0ProviderWithNavigate>
						<Elements stripe={stripePromise}>
							<App />
						</Elements>
					</Auth0ProviderWithNavigate>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
