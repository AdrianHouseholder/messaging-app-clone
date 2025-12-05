import styles from "./ErrorBox.module.css";
import type { ErrorBoxProps } from "./ErrorBox.types";

const ErrorBox: React.FC<ErrorBoxProps> = ({ error }) => {
	return (
		<div className={styles.error}>
			{error === "UNAUTHORIZED" && <p>Credentials not provided!</p>}
			{error === "SERVICE_UNAVAILABLE" && <p>Could not connect to the API!</p>}
		</div>
	);
};

export default ErrorBox;
