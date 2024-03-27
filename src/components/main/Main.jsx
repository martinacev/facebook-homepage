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
	const [posts, setPosts] = useState([]);

	const handlePostContentChange = (content) => {
		setPosts([...posts, content]);
		setPopUp(false);
	};

	return (
		<div className={classes.mainContainer}>
			<div className={classes.container}>
				<Story />
				<Post onInputClick={() => setPopUp(true)} />
				{posts
					.map((content, index) => (
						<AddStatus key={index} postContent={content} />
					))
					.reverse()}
				<Status />
				{popUp && (
					<YourPost
						onClose={() => setPopUp(false)}
						onContentChange={handlePostContentChange}
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
