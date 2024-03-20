import { useState } from "react";
import "./App.css";
import Active from "./components/active/Active";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
	const [chatVisible, setChatVisible] = useState(false);
	const [notificationsVisible, setNotificationsVisible] = useState(false);

	const toggleChatVisibility = () => {
		setChatVisible(!chatVisible);
	};

	const toggleNotificationsVisibility = () => {
		setNotificationsVisible(!notificationsVisible);
	};

	return (
		<div className="container">
			<Header
				toggleChatVisibility={toggleChatVisibility}
				toggleNotificationsVisibility={toggleNotificationsVisibility}
			/>
			<div className="wrapper">
				<Footer />
				<Main
					isChatVisible={chatVisible}
					isNotificationsVisible={notificationsVisible}
				/>
				<Active />
			</div>
		</div>
	);
}

export default App;
