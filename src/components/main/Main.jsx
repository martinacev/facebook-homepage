import classes from "./Main.module.css";

import Story from "../story/Story";
import Post from "../post/Post";
import Status from "../status/Status";

const Main = () => {
	return (
		<div className={classes.container}>
			<Story />
			<Post />
			<Status />
		</div>
	);
};

export default Main;
