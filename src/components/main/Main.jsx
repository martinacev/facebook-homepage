import classes from "./Main.module.css";


const Main = () => {
	return (
		<div className={classes.container}>
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
		</div>
	);
};

export default Main;
