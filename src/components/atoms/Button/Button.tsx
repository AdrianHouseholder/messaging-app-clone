import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import "./Button.module.css";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
	onClick,
	text,
	variant = "primary",
	floating,
	title,
}) => {
	return (
		<button
			type={"button"}
			onClick={onClick}
			className={clsx(styles[variant], floating ? styles.floating : "")}
			title={title}
		>
			{text}
		</button>
	);
};

export default Button;
