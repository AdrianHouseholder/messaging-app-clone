import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.types";
import { MessageFooter, MessagesScreen } from "@/components";

const Layout: React.FC<LayoutProps> = () => {
	return (
		<div className={styles.root}>
			<MessagesScreen />
			<MessageFooter />
		</div>
	);
};

export default Layout;
