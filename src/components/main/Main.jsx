import classes from "./Main.module.css";
import Story from "../story/Story";
import Post from "../post/Post";
import Status from "../status/Status";
import YourPost from "../yourPost/YourPost";

const Main = () => {
	return (
		<div className={classes.mainContainer}>
			<div className={classes.container}>
				<Story />
				<Post />
				<Status />
				<YourPost />
			</div>
		</div>
	);
};

export default Main;
