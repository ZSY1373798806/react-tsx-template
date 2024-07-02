import { Router as RemixRouter } from "@remix-run/router/dist/router";
declare global {
	interface Window {
		ReactNativeWebView: {
			postMessage: (data: string) => void;
		};
		mall: {
			router: RemixRouter;
		};
	}
}
