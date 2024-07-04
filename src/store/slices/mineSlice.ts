import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {}
// 声明初始化状态的类型
const initialState: InitialStateProps = {};
export const mineSlice = createSlice({
	name: "mine",
	initialState,
	reducers: {},
	extraReducers() {},
});

export default mineSlice.reducer;
