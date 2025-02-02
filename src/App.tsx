import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={router} fallbackElement="loading..." />
		</Provider>
	);
};

export default App;
