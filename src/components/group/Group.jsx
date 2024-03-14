import classes from "./Group.module.css";
import gang from "/public/gang.webp";
import family from "/public/family.jpg";

const Group = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.box}>
					<p className={classes.title}>Group conversations</p>
				</div>

				<div     className={classes.wrapper}>
					<div className={classes.group}>
						<img className={classes.pac} src={gang} alt="Friends" />
						<p className={classes.name}>Friends</p>
					</div>
				</div>

				<div className={classes.wrapper}>
					<div className={classes.group}>
						<img
							className={classes.pac}
							src={family}
							alt="Tupac Shakur"
						/>
						<p className={classes.name}>Family</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Group;
