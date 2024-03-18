import classes from "./Messages.module.css";
import mark from "/public/mark.jpg";

const Messages = () => {
	return (
		<div className={classes.container}>
			<div className={classes.chat}>
				<div className={classes.wrapper}>

					<div className={classes.inbox}>
						<button className={classes.components}>Inbox</button>
					</div>

					<div className={classes.inbox}>
						<button className={classes.components}>Communities</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
