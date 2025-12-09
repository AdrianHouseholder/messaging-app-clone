import styles from "./MessagesScreen.module.css";
import { useMessagesContext } from "@contexts";
import MessageBox from "../../atoms/MessageBox/MessageBox.tsx";
import { Button, ErrorBox } from "@/components";
import { useEffect, useRef } from "react";
import { useIsVisible } from "@hooks";

const MessagesScreen: React.FC = () => {
	const { messages, error, loadMessages } = useMessagesContext();
	const lastMessageRef = useRef<HTMLDivElement | null>(null);
	const bottomRef = useRef<HTMLDivElement | null>(null);
	const shouldLoadMore = useIsVisible(lastMessageRef);
	const isBottomVisible = useIsVisible(bottomRef);

	useEffect(() => {
		if (shouldLoadMore && lastMessageRef.current) {
			void loadMessages();
		}
	}, [shouldLoadMore, loadMessages]);

	return (
		<div className={styles.root} id={"messages-screen"}>
			{!error && (
				<div className={styles.messages} id={"messages"}>
					{!isBottomVisible && (
						<Button
							onClick={() => {
								bottomRef.current?.scrollIntoView({ behavior: "smooth" });
							}}
							text={"↓"}
							variant={"secondary"}
							title={"Scroll to bottom"}
							floating
						/>
					)}
					<span id={"bottom"} ref={bottomRef} />
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
