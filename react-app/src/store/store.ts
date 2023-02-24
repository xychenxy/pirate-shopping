import {
	configureStore,
	MiddlewareArray,
	Middleware,
	AnyAction,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";

/**
 * types
 */
export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
	import.meta.env.MODE === "development" && logger,
	thunk,
	// composeWithDevTools,
].filter((middleware): middleware is Middleware => Boolean(middleware));

export const store = configureStore({
	reducer: persistedReducer,
	devTools: import.meta.env.MODE === "development",
	middleware: new MiddlewareArray().concat(middleWares),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
