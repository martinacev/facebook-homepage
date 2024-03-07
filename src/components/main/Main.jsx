import classes from "./Main.module.css";

import Story from "../story/Story";
import Post from "../post/Post";

const Main = () => {
	return (
		<div className={classes.container}>
			<Story />
             <Post />
		
		</div>
	);
};

export default Main;
