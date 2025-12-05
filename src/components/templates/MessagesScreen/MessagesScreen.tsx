import styles from "./MessagesScreen.module.css";
import { useMessagesContext } from "@contexts";
import MessageBox from "../../atoms/MessageBox/MessageBox.tsx";
import { ErrorBox } from "@/components";

const MessagesScreen: React.FC = () => {
	const { messages, error } = useMessagesContext();
	return (
		<div className={styles.root} id={"messages-screen"}>
			{!error && (
				<div className={styles.messages}>
					{messages.map((message) => (
						<MessageBox message={message} key={message._id} />
					))}
				</div>
			)}
			{!!error && <ErrorBox error={error} />}
		</div>
	);
};

export default MessagesScreen;
