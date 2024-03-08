import classes from "./Pages.module.css";
import Amaru from "/public/2pac.jpg";
import other from "/public/switchh.png";
import create from "/public/gramofon.png";

const Pages = () => {
	return (
		<div className={classes.container}>
			<div className={classes.border}></div>
			<div className={classes.box}>
				<p className={classes.title}>Your Pages and profiles</p>

				<div className={classes.dots}>
					<div className={classes.background}>
						<svg
							viewBox="0 0 20 20"
							width="20"
							height="20"
							fill="currentColor"
						>
							<g transform="translate(-446 -350)">
								<path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
							</g>
						</svg>
					</div>
				</div>
			</div>
			<div className={classes.group}>
				<div className={classes.wrapper}>
					<img
						className={classes.pac}
						src={Amaru}
						alt="Tupac Shakur"
					/>
					<p className={classes.name}>Tupac Amaru Shakur</p>
				</div>
			</div>

			<div className={classes.events}>
				<div className={classes.wrapper}>
					<img
						className={classes.emoji}
						src={other}
						alt="switch page"
					/>
					<p className={classes.txt}>Switch to Page</p>
				</div>
			</div>

			<div className={classes.events}>
				<div className={classes.wrapper}>
					<img
						className={classes.emoji}
						src={create}
						alt="create promotion"
					/>
					<p className={classes.txt}>Create promotion</p>
				</div>
			</div>

			<div className={classes.border}></div>
		</div>
	);
};

export default Pages;
