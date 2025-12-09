import styles from "./MessageBox.module.css";
import type { MessageBoxProps } from "./MessageBox.types";
import clsx from "clsx";
import dayjs from "dayjs";

const AUTHOR = import.meta.env.VITE_AUTHOR;

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
	const isMe = message.author === AUTHOR;
	return (
		<div className={clsx(styles.wrapper, isMe ? styles.right : styles.left)}>
			<div className={clsx(styles.message, isMe ? styles.user : styles.other)}>
				{!isMe && <span className={styles.author}>{message.author}</span>}
				<span>{message.message}</span>
				<span className={styles.timestamp}>
					{`${dayjs(message.createdAt).format("D MMM YYYY HH:mm")}`}
				</span>
			</div>
		</div>
	);
};

export default MessageBox;
