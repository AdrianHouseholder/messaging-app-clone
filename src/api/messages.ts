import type { Message } from "../types";

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

export async function getMessages(after?: string, before?: string, limit = 20) {
	const params = new URLSearchParams();
	if (after) params.append("after", after);
	if (before) params.append("before", before);
	params.append("limit", limit.toString());

	const response = await fetch(`${API_URL}/messages?${params.toString()}`, {
		headers: {
			Authorization: `Bearer ${TOKEN}`,
		},
	});

	if (response.status !== 200) {
		throw new Error("Failed to fetch messages");
	}
	return (await response.json()) as Message[];
}
