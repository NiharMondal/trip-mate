"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
//react toastify css
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const persistor = persistStore(store);

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
				<ToastContainer autoClose={2500} />
			</PersistGate>
		</Provider>
	);
}
