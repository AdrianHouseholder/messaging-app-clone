import styles from "./MessagesScreen.module.css";
import type { MessagesScreenProps } from "./MessagesScreen.types";
import { useMessagesContext } from "@contexts";

const MessagesScreen: React.FC<MessagesScreenProps> = () => {
	const { messages } = useMessagesContext();
	return (
		<div className={styles.root}>
			{messages.map((message) => (
				<div key={message._id}>
					<span>{message._id}</span>
					<span>{message.author}</span>
					<span>{message.createdAt}</span>
					<span>{message.message}</span>
				</div>
			))}
		</div>
	);
};

export default MessagesScreen;
