const WebSocketState = {
	CONNECTING: 0, // 连接正在建立中
	OPEN: 1, // 连接已建立并且可用
	CLOSING: 2, // 连接正在关闭中
	CLOSED: 3, // 连接已关闭或无法建立
};

class WebSocketSingleton {
	websocket: WebSocket | null;
	receive: Function | null;
	messageHandlers: Function[];
	constructor() {
		this.websocket = null;
		this.receive = null;
		this.messageHandlers = []; // 用于存储消息处理函数的数组
	}

	static instance: WebSocketSingleton | null;

	static getInstance() {
		if (!WebSocketSingleton.instance) {
			WebSocketSingleton.instance = new WebSocketSingleton();
		}
		return WebSocketSingleton.instance;
	}

	connect(url: string) {
		return new Promise((resolve, reject) => {
			console.log(this.websocket);
			if (this.websocket && this.websocket.readyState === WebSocketState.OPEN) {
				resolve(true);
			} else {
				this.websocket = new WebSocket(url);
			}

			this.websocket.onopen = () => {
				console.log("onopen");
				console.log("打开时间：", new Date().toLocaleTimeString());
				resolve(true);
			};

			this.websocket.onerror = (error) => {
				console.log("onerror", error);
				console.log("报错时间：", new Date().toLocaleTimeString());
				reject(error);
			};

			this.websocket.onclose = (error) => {
				console.log("onclose", error);
				console.log("关闭时间：", new Date().toLocaleTimeString());
				reject(error);
			};

			this.websocket.onmessage = (event) => {
				this.handleMessage(event.data); // 调用消息处理函数处理收到的消息
			};
		});
	}

	send(data: Object) {
		console.log(JSON.stringify(data));
		if (this.websocket) {
			this.websocket.send(JSON.stringify(data));
		} else {
			throw new Error("WebSocket is not connected.");
		}
	}

	close() {
		if (this.websocket) {
			this.websocket.close();
			this.websocket = null;
		}
	}

	handleMessage(data: unknown) {
		// 遍历消息处理函数数组，依次调用每个处理函数
		this.messageHandlers.forEach((handler: Function) => {
			handler(data);
		});
	}

	addMessageHandler(handler: Function) {
		this.messageHandlers = [];
		this.messageHandlers.push(handler);
	}
}
export default WebSocketSingleton;

/**
 * demo
 * @param url Websocket连接地址
 */
/* eslint-disable */
const socketDemo = async (url: string) => {
	const socket = WebSocketSingleton.getInstance();
	await socket.connect(url);
	socket.send("xxx");
	if (socket.websocket) {
		socket.addMessageHandler((msgData: string) => {
			if (msgData !== "连接成功") {
				// TODO
			}
		});
	}
};
