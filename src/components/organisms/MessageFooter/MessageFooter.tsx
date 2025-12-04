import styles from "./MessageFooter.module.css";
import type { MessageFooterProps } from "./MessageFooter.types";
import { useMessagesContext } from "@contexts";
import { useState } from "react";

const MessageFooter: React.FC<MessageFooterProps> = () => {
	const { sendMessage, isLoading } = useMessagesContext();

	const [text, setText] = useState("");
	const handleSend = async () => {
		await sendMessage(text);
		setText("");
	};

	return (
		<div className={styles.root}>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button type="button" onClick={() => handleSend()} disabled={isLoading}>
				Send
			</button>
		</div>
	);
};

export default MessageFooter;
