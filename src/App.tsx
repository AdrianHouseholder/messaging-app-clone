import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { getMessages } from "./api";
import type { Message } from "./types";

function App() {
	const [messages, setMessages] = useState<Message[]>([]);

	const loadMessages = useCallback(async () => {
		const messages: Message[] = await getMessages();
		setMessages(messages);
	}, []);

	useEffect(() => {
		void loadMessages();
	}, [loadMessages]);

	return (
		<>
			{messages.map((message) => (
				<div key={message._id}>
					<span>{message._id}</span>
					<span>{message.author}</span>
					<span>{message.createdAt}</span>
					<span>{message.message}</span>
				</div>
			))}
		</>
	);
}

export default App;
