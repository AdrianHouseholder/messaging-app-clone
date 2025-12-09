export interface ButtonProps {
	text: string;
	title?: string;
	variant?: "primary" | "secondary";
	floating?: boolean;
	onClick: () => void;
}
