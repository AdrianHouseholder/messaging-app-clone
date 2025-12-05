import { useCallback } from "react";

export function useScrollTo(id: string, offset = 0) {
	return useCallback(() => {
		const container = document.getElementById(id);
		if (container) {
			container.scrollTo({
				top: container.scrollHeight + offset,
				behavior: "smooth",
			});
		}
	}, [id, offset]);
}
