/**
 * redux的入口配置的store文件
 */
import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "@/store/slices/commonSlice";
import homeReducer from "@/store/slices/homeSlice";
import mineReducer from "@/store/slices/mineSlice";
import loginReducer from "@/store/slices/loginSlice";

const store = configureStore({
	reducer: {
		common: commonReducer,
		home: homeReducer,
		mine: mineReducer,
		login: loginReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
