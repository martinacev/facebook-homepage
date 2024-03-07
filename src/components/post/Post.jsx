import classes from "./Post.module.css";
import pp from "/public/maci.jpg";
import call from "/public/call.png";
import photo from "/public/photo.png";
import smile from "/public/smile.png";

const Post = () => {
	return (
		<div className={classes.post}>
			<div className={classes.compile}>
				<div className={classes.box}>
					<img className={classes.image} src={pp} alt="profile" />
				</div>
				<div className={classes.input}>
					<input
						className={classes.search}
						type="text"
						placeholder="What's on your mind, Martin?"
					/>
					
				</div>
			</div>
			<div className={classes.border}></div>
			<div className={classes.components}>
				<div className={classes.holder}>
					<img
						className={classes.emoji}
						src={call}
						alt="video call"
					/>
					<p className={classes.description}>Live video</p>
				</div>
				<div className={classes.holder}>
					<img className={classes.emoji} src={photo} alt="gallery" />
					<p className={classes.description}>Photo/video</p>
				</div>
				<div className={classes.holder}>
					<img className={classes.emoji} src={smile} alt="activity" />
					<p className={classes.description}>Feeling/activity</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
