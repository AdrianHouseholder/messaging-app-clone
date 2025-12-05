import styles from "./MessagesScreen.module.css";
import { useMessagesContext } from "@contexts";
import MessageBox from "../../atoms/MessageBox/MessageBox.tsx";

const MessagesScreen: React.FC = () => {
	const { messages } = useMessagesContext();
	return (
		<div className={styles.root} id={"messages-screen"}>
			<div className={styles.messages}>
				{messages.map((message) => (
					<MessageBox message={message} key={message._id} />
				))}
			</div>
		</div>
	);
};

export default MessagesScreen;
