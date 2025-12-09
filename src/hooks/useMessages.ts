import { useState, useCallback } from "react";
import { getMessages, sendMessage } from "../api";
import type { ErrorTypes, Message } from "@/types";
import dayjs from "dayjs";

const AUTHOR = import.meta.env.VITE_AUTHOR;
const LIMIT = 20;

export function useMessages() {
	const [canLoadMore, setCanLoadMore] = useState(true);
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<ErrorTypes | null>(null);
	const [oldestMessageTime, setOldestMessageTime] = useState<string | null>(
		dayjs().toISOString(),
	);

	const loadMessages = useCallback(async () => {
		if (isLoading || !canLoadMore) return;
		setIsLoading(true);
		try {
			const fetchedMessages = await getMessages(
				undefined,
				oldestMessageTime ?? undefined,
				LIMIT,
			);
			if (fetchedMessages.length === 0) {
				setCanLoadMore(false);
				setIsLoading(false);
				return;
			}
			const newOldestMessageTime = fetchedMessages[0].createdAt;
			setOldestMessageTime(newOldestMessageTime);
			fetchedMessages.reverse();
			setMessages((prev) => [...prev, ...fetchedMessages]);
		} catch (err) {
			setError(err instanceof Error ? (err.message as ErrorTypes) : "UNKNOWN");
		} finally {
			setIsLoading(false);
		}
	}, [oldestMessageTime, isLoading, canLoadMore]);

	const sendNewMessage = useCallback(
		async (text: string) => {
			setIsLoading(true);
			try {
				await sendMessage({
					message: text,
					author: AUTHOR,
				});
				const newestMessageTime = messages[0].createdAt;
				const newMessages = await getMessages(newestMessageTime, undefined, 20);
				setMessages((prev) => [...newMessages, ...prev]);
			} catch (err) {
				setError(
					err instanceof Error ? (err.message as ErrorTypes) : "UNKNOWN",
				);
			} finally {
				setIsLoading(false);
			}
		},
		[messages],
	);

	return {
		messages,
		isLoading,
		error,
		sendMessage: sendNewMessage,
		loadMessages,
		canLoadMore,
	};
}
