import classes from "./Main.module.css";
import Story from "../story/Story";
import Post from "../post/Post";
import Status from "../status/Status";
import YourPost from "../yourPost/YourPost";
import { useState } from "react";

const Main = () => {
	const [popUp, setPopUp] = useState(false);
	return (
		<div className={classes.mainContainer}>
			<div className={classes.container}>
				<Story />
				<Post onInputClick={() => setPopUp(true)} />
				<Status />
				{popUp && <YourPost onClose={() => setPopUp(false)} />}
			</div>
			{popUp && <div className={classes.backdrop}></div>}
		</div>
	);
};

export default Main;
