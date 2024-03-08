import classes from "./Birthdays.module.css";
import hbd from "/public/birthday.png";

const Birthdays = () => {
	return (
		<div className={classes.container}>
			<p className={classes.title}>Birthdays</p>
			<div className={classes.group}>
				<div className={classes.wrapper}>
					<img className={classes.pac} src={hbd} alt="Tupac Shakur" />
					<div className={classes.birthday}>
						<p className={classes.name}>
							Mario Bozidarovski{`'`}s
						</p>
						<p className={classes.day}>Birthday is today.</p>
					</div>
				</div>
			</div>
			<div className={classes.border}></div>
		</div>
	);
};

export default Birthdays;
