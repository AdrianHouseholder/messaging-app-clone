import "@/styles/global.scss";
import { MessagesProvider } from "@/contexts";
import { Layout } from "@/components";
import { useScrollTo } from "@hooks";
import { useEffect } from "react";

function App() {
	const scrollTo = useScrollTo("messages-screen", 200);
	useEffect(() => {
		setTimeout(() => {
			scrollTo();
		}, 100);
	}, [scrollTo]);
	return (
		<MessagesProvider>
			<Layout />
		</MessagesProvider>
	);
}

export default App;
