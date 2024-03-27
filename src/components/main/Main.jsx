import classes from "./Main.module.css";
import Story from "../story/Story";
import Post from "../post/Post";
import Status from "../status/Status";
import YourPost from "../yourPost/YourPost";
import { useState } from "react";
import Chat from "../chat/Chat";
import PropTypes from "prop-types";
import Notifications from "../notifications/Notifications";
import AddStatus from "../addStatus/AddStatus";

const Main = ({ isChatVisible, isNotificationsVisible }) => {
	const [popUp, setPopUp] = useState(false);
	const [postContent, setPostContent] = useState("");

	const handlePostContentChange = (content) => {
		setPostContent(content);
	};

	return (
		<div className={classes.mainContainer}>
			<div className={classes.container}>
				<Story />
				<Post onInputClick={() => setPopUp(true)} />
				<AddStatus postContent={postContent} />
				<Status />
				{popUp && (
					<YourPost
						onClose={() => setPopUp(false)}
						onContentChange={handlePostContentChange}
						onPost={() => {
							setPopUp(false); 
						}}
					/>
				)}
				{isChatVisible && <Chat />}
				{isNotificationsVisible && <Notifications />}
			</div>
		</div>
	);
};

Main.propTypes = {
	isChatVisible: PropTypes.bool.isRequired,
	isNotificationsVisible: PropTypes.bool.isRequired,
};

export default Main;
