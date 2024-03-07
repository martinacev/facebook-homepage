import classes from "./Story.module.css";

const Story = () => {
	return (
		<div className={classes.content}>
			<div className={classes.card}>
				<div className={classes.profile}>
					<p className={classes.text}>Martin Acevski</p>
				</div>
			</div>
			<div className={classes.card}>
				<div className={classes.person}>
					<p className={classes.text}>Mario Bozidarovski</p>
				</div>
			</div>
			<div className={classes.card}>
				<div className={classes.personThird}>
					<p className={classes.text}>Creative Hub</p>
				</div>
			</div>
			<div className={classes.card}>
				<div className={classes.istoProgramiranje}>
					<p className={classes.text}>Success</p>
				</div>
			</div>
		</div>
	);
};

export default Story;
