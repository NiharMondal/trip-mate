import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	queries: {
		search: "",
		destination: "",
		minBudget: "",
		maxBudget: "",
		sortBy: "",
		order:"",
	},
};

export const querySlice = createSlice({
	name: "query",
	initialState,
	reducers: {
		updateQueries: (state, action) => {
			state.queries = { ...state.queries, ...action.payload };
		},

		clearQueries: (state) => {
			state.queries = {
				search: "",
				destination: "",
				maxBudget: "",
				minBudget: "",
				sortBy: "",
				order: "",
			};
		},
	},
});


export const {clearQueries, updateQueries} = querySlice.actions;
export default querySlice.reducer;