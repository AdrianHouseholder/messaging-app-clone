import styles from "./MessagesScreen.module.css";
import { useMessagesContext } from "@contexts";
import MessageBox from "../../atoms/MessageBox/MessageBox.tsx";
import { ErrorBox } from "@/components";
import { useEffect, useRef } from "react";
import { useIsVisible } from "@hooks";

const MessagesScreen: React.FC = () => {
	const { messages, error, loadMessages } = useMessagesContext();
	const lastMessageRef = useRef<HTMLDivElement | null>(null);
	const isIntersecting = useIsVisible(lastMessageRef);

	useEffect(() => {
		if (isIntersecting && lastMessageRef.current) {
			console.log("Loading more messages...");
			void loadMessages();
		}
	}, [isIntersecting, loadMessages]);

	return (
		<div className={styles.root} id={"messages-screen"}>
			{!error && (
				<div className={styles.messages} id={"messages"}>
					{messages.map((message) => (
						<MessageBox message={message} key={message._id} />
					))}
					<span id={"last-message-ref"} ref={lastMessageRef} />
				</div>
			)}
			{!!error && <ErrorBox error={error} />}
		</div>
	);
};

export default MessagesScreen;
