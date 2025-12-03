import "./App.css";
import { useState } from "react";
import { useMessages } from "./hooks";

function App() {
	const [text, setText] = useState<string>("");

	const { messages, isLoading, sendMessage } = useMessages();

	const handleSend = () => {
		if (text.trim()) {
			void sendMessage(text);
			setText("");
		}
	};

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
			<button type="button" onClick={() => handleSend()} disabled={isLoading}>
				Send
			</button>
		</>
	);
}

export default App;
