import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {}
// 声明初始化状态的类型
const initialState: InitialStateProps = {};
export const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {},
	extraReducers() {},
});

export default homeSlice.reducer;
