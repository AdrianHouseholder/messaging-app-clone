import styles from "./MessageFooter.module.css";
import { useMessagesContext } from "@contexts";
import { useState } from "react";
import { Button, Input } from "@/components";

const MessageFooter: React.FC = () => {
	const { sendMessage } = useMessagesContext();
	const [text, setText] = useState("");
	const handleSend = async () => {
		await sendMessage(text);
		setText("");
	};
	return (
		<div className={styles.root}>
			<div className={styles.input}>
				<Input value={text} onChange={setText} onEnterKeyUp={handleSend} />
				<Button text={"Send"} onClick={handleSend} />
			</div>
		</div>
	);
};

export default MessageFooter;
