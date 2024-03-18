import classes from "./Chat.module.css";
import HeaderChat from "./headerChat/HeaderChat";
import Messages from "./messages/Messages";
import SearchBar from "./searchBar/SearchBar";

const Chat = () => {
	return (
		<div className={classes.container}>
			<div className={classes.chat}>
				<HeaderChat />
				<SearchBar />
				<Messages />
			</div>
		</div>
	);
};

export default Chat;
