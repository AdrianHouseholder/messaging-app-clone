import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { getMessages, sendMessage } from "./api";
import type { Message } from "./types";

const AUTHOR = "Adrian Ruiz Householder";

function App() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [text, setText] = useState<string>("");

	const loadMessages = useCallback(async () => {
		const messages: Message[] = await getMessages();
		setMessages(messages);
	}, []);

	const newMessage = useCallback(
		async (message: string) => {
			await sendMessage({
				message: message,
				author: AUTHOR,
			});
			void loadMessages();
		},
		[loadMessages],
	);

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
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button type="button" onClick={() => newMessage(text)}>
				Send
			</button>
		</>
	);
}

export default App;
