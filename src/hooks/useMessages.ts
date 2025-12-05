import { useState, useCallback, useEffect } from "react";
import { getMessages, sendMessage } from "../api";
import type { Message } from "../types";
import type { ErrorTypes } from "@contexts";

const AUTHOR = import.meta.env.VITE_AUTHOR;

export function useMessages() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<ErrorTypes | null>(null);

	const loadMessages = useCallback(async () => {
		setIsLoading(true);
		try {
			const currentTime = new Date().toISOString();
			const fetchedMessages = await getMessages(undefined, currentTime, 50);
			setMessages(fetchedMessages);
		} catch (err) {
			setError(err instanceof Error ? (err.message as ErrorTypes) : "UNKNOWN");
		} finally {
			setIsLoading(false);
		}
	}, []);

	const sendNewMessage = useCallback(
		async (text: string) => {
			setIsLoading(true);
			try {
				await sendMessage({
					message: text,
					author: AUTHOR,
				});
				await loadMessages();
			} catch (err) {
				setError(
					err instanceof Error ? (err.message as ErrorTypes) : "UNKNOWN",
				);
			} finally {
				setIsLoading(false);
			}
		},
		[loadMessages],
	);

	useEffect(() => {
		void loadMessages();
	}, [loadMessages]);

	return {
		messages,
		isLoading,
		error,
		sendMessage: sendNewMessage,
	};
}
