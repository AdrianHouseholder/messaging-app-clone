import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.types";
import { useMessagesContext } from "@contexts";
import { MessageFooter } from "@/components";

const Layout: React.FC<LayoutProps> = () => {
	const { messages } = useMessagesContext();
	return (
		<div className={styles.root}>
			<div>
				{messages.map((message) => (
					<div key={message._id}>
						<span>{message._id}</span>
						<span>{message.author}</span>
						<span>{message.createdAt}</span>
						<span>{message.message}</span>
					</div>
				))}
			</div>
			<MessageFooter />
		</div>
	);
};

export default Layout;
