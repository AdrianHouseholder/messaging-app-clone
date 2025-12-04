import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useMessages } from "../hooks";
import type { Message } from "../types";

export type MessagesContextType = {
	messages: Message[];
	isLoading: boolean;
	error: Error | null;
	sendMessage: (text: string) => Promise<void>;
};

const MessagesContext = createContext<MessagesContextType | undefined>(
	undefined,
);

export function MessagesProvider({ children }: { children: ReactNode }) {
	const value = useMessages();
	return (
		<MessagesContext.Provider value={value}>
			{children}
		</MessagesContext.Provider>
	);
}

export function useMessagesContext() {
	const context = useContext(MessagesContext);
	if (context === undefined) {
		throw new Error(
			"useMessagesContext must be used within a MessagesProvider",
		);
	}
	return context;
}
