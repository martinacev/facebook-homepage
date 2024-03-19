import classes from "./Messages.module.css";
import mark from "/public/mark.jpg";
import doc from "/public/doc.jpg";
import bea from "/public/AI.jpg";

const Messages = () => {
	return (
		<div className={classes.container}>
			<div className={classes.chat}>
				<div className={classes.wrapper}>
					<div className={classes.inbox}>
						<button className={classes.components}>Inbox</button>
					</div>

					<div className={classes.inbox}>
						<button className={classes.components}>
							Communities
						</button>
					</div>
				</div>
			</div>

			<div className={classes.messages}>

				<div className={classes.friends}>
					<img className={classes.image} src={mark} alt="" />
					<div className={classes.name}>
						<h5>Mario Bozinovski</h5>
						<p className={classes.what}>Yes, i wait you</p>
					</div>
				</div>

				<div className={classes.friends}>
					<img className={classes.image} src={doc} alt="" />
					<div className={classes.name}>
						<h5>Мартин Апостоловски </h5>
						<p className={classes.what}>See you at office</p>
					</div>
				</div>

				<div className={classes.friends}>
					<img className={classes.image} src={bea} alt="" />
					<div className={classes.name}>
						<h5>BeaTin</h5>
						<p className={classes.what}>Funny 😂😂😂</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
