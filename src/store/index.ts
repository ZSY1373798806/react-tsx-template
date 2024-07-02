/**
 * redux的入口配置的store文件
 */
import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";
import homeReducer from "@/pages/home/homeSlice";
import loginReducer from "@/pages/login/loginSlice";

const store = configureStore({
	reducer: {
		common: commonReducer,
		home: homeReducer,
		login: loginReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
