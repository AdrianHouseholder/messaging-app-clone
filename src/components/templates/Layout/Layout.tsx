import styles from "./Layout.module.css";
import { MessageFooter, MessagesScreen } from "@/components";

const Layout: React.FC = () => {
	return (
		<div className={styles.root}>
			<MessagesScreen />
			<MessageFooter />
		</div>
	);
};

export default Layout;
