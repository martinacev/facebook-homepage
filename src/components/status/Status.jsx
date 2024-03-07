import classes from "./Status.module.css";
import mario from "/public/mark.jpg";
import image from "/public/programin-learn.jpg";
import share from "/public/share.png";
import comment from '/public/comment.png';
import like from '/public/like.png'


const Status = () => {
	return (
		<div className={classes.container}>
			<div className={classes.status}>
				<div className={classes.wrapper}>
					<img
						className={classes.profilePic}
						src={mario}
						alt="profile"
					/>
					<div className={classes.information}>
						<p className={classes.name}>Mario Bozidarovski</p>
						<p className={classes.time}>38m</p>
					</div>

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

						<div className={classes.cross}>
							<p className={classes.simbol}>✕</p>
						</div>
					</div>
				</div>

				<div className={classes.image}>
					<img
						className={classes.photo}
						src={image}
						alt="learn-programing-post"
					/>
				</div>
				
				<div className={classes.components}>
					<div className={classes.holder}>
						<img
							className={classes.emoji}
							src={like}
							alt="video call"
						/>
						<p className={classes.description}>Like</p>
					</div>
					<div className={classes.holder}>
						<img
							className={classes.emoji}
							src={comment}
							alt="gallery"
						/>
						<p className={classes.description}>Comment</p>
					</div>
					<div className={classes.holder}>
						<img
							className={classes.emoji}
							src={share}
							alt="activity"
						/>
						<p className={classes.description}>Send</p>
					</div>
				</div>
				<div className={classes.border}></div>
			</div>
		</div>
	);
};

export default Status;
