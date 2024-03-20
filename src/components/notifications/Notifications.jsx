import classes from "./Notifications.module.css";
import dots from "/public/dots.png";

const Notifications = () => {
	return (
		<div className={classes.container}>
			<div className={classes.notifications}>

				<div className={classes.wrapper}>
					<div className={classes.title}>
						<h2>Notifications</h2>
					</div>
					<div className={classes.border}>
						<img className={classes.size} src={dots} alt="dots" />
					</div>
				</div>

				<div className={classes.read}>
					<div className={classes.inbox}>
						<button className={classes.components}>All</button>
					</div>

					<div className={classes.inbox}>
						<button className={classes.components}>
							Unread
						</button>
					</div>
				</div>

                <div>
                    
                </div>
			</div>
		</div>
	);
};

export default Notifications;
