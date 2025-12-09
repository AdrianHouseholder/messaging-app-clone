export type ErrorTypes = "UNAUTHORIZED" | "SERVICE_UNAVAILABLE" | "UNKNOWN";
export type MessageDirection = "left" | "right";

export type Message = {
	_id: string;
	message: string;
	author: string;
	createdAt: string;
};

export type NewMessage = {
	message: string;
	author: string;
};
