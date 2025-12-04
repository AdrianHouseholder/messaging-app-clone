import "./App.css";
import { MessagesProvider } from "./contexts";
import { Layout } from "@/components";

function App() {
	return (
		<MessagesProvider>
			<Layout />
		</MessagesProvider>
	);
}

export default App;
