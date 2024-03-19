import { useState } from "react";
import "./App.css";
import Active from "./components/active/Active";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
	const [chatVisible, setChatVisible] = useState(false);

	const toggleChatVisibility = () => {
		setChatVisible(!chatVisible);
	};

	return (
		<div className="container">
			<Header toggleChatVisibility={toggleChatVisibility} />
			<div className="wrapper">
				<Footer />
				<Main isChatVisible={chatVisible} />
				<Active />
			</div>
		</div>
	);
}

export default App;
