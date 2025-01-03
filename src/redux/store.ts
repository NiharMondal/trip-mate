import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/base.api";
import authReducer from "./slice/authSlice";
import queryReducer from "./slice/querySlice";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
	key: "auth",
	version: 1,
	storage,
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,

		auth: authPersistedReducer,
		query: queryReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

