import type { ButtonProps } from "./Button.types";
import "./Button.module.css";

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
	return (
		<button type={"button"} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
