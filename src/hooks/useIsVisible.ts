import type { RefObject } from "react";
import { useEffect, useState } from "react";

export function useIsVisible(ref: RefObject<HTMLDivElement | null>) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		if (!ref || !ref.current) return;
		const observer = new IntersectionObserver(([entry]) => {
			console.log("is intersecting:", entry.isIntersecting);
			setIntersecting(entry.isIntersecting);
		});

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}
