import dots from "/public/dots.png";
import stretch from "/public/stretch.png";
import write from "/public/Write.png";
import classes from "./HeaderChat.module.css";

const HeaderChat = () => {
	return (
		<div className={classes.header}>
			<div className={classes.title}>
				<h2 className={classes.description}>Chats</h2>
			</div>

			<div className={classes.options}>
				<div className={classes.border}>
					<img className={classes.size} src={dots} alt="dots" />
				</div>
				<div className={classes.border}>
					<img
						className={classes.size}
						src={stretch}
						alt="optionsChat"
					/>
				</div>
				<div className={classes.border}>
					<img className={classes.size} src={write} alt="pencil" />
				</div>
			</div>
		</div>
	);
};

export default HeaderChat;
