"use client";
import dynamic from "next/dynamic";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const PersistGate = dynamic(
	() =>
		import("redux-persist/integration/react").then(
			(mod) => mod.PersistGate
		),
	{ ssr: false } // Disable SSR for this component
);
export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
}
