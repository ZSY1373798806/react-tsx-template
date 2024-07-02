import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { getUserInfo } from "@/api";
import { UserInfoResponseProps } from "@/api/index.interface";

export const commonSlice = createSlice({
	name: "common",
	initialState: {
		userInfo: {
			name: "",
			phone: "",
		},
		token: "",
	},
	reducers: {
		setToken(state, action: PayloadAction<{ token: string }>) {
			state.token = action.payload.token;
		},
	},
	extraReducers(build) {
		build.addCase(
			fetchUserInfo.fulfilled,
			(state, action: PayloadAction<UserInfoResponseProps>) => {
				const data = action.payload ?? {};
				state.userInfo = data;
			}
		);
	},
});

export const fetchUserInfo = createAsyncThunk(
	"common/fetchUserInfo",
	async () => {
		const response = await getUserInfo();
		return response.data;
	}
);

export const { setToken } = commonSlice.actions;

export const userInfo = (state: RootState) => state.common.userInfo;

export default commonSlice.reducer;
