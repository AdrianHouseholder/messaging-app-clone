import "./Input.module.css";
import type { InputProps } from "./Input.types";
import { useEffect, useState } from "react";

const Input: React.FC<InputProps> = ({
	onChange,
	onBlur,
	onEnterKeyUp,
	placeholder = "Message",
	value: _value,
}) => {
	const [value, setValue] = useState<string>(_value);
	useEffect(() => {
		setValue(_value);
	}, [_value]);
	return (
		<input
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange?.(e.target.value)}
			onBlur={() => {
				onBlur?.(value);
			}}
			onKeyUp={(e) => {
				e.key === "Enter" && onEnterKeyUp?.();
			}}
		/>
	);
};

export default Input;
