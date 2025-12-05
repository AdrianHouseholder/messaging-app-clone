export interface InputProps {
	value: string;
	onChange?: (value: string) => void;
	onBlur?: (value: string) => void;
	onEnterKeyUp?: () => void;
	placeholder?: string;
}
