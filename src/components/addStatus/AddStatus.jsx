import classes from "./AddStatus.module.css";
import maci from "/public/maci.jpg";
import like from "/public/like.png";
import comment from "/public/comment.png";
import share from "/public/share.png";
import lajkce from "/public/lajkce.png";
import { useState } from "react";
import PropTypes from "prop-types";

const AddStatus = ({ postContent }) => {
	const [likeCounts, setLikeCounts] = useState({
		post1: { count: 0, liked: false },
	});

	const toggleLike = (postId) => {
		setLikeCounts((prevState) => ({
			...prevState,
			[postId]: {
				count: prevState[postId].liked
					? prevState[postId].count - 1
					: prevState[postId].count + 1,
				liked: !prevState[postId].liked,
			},
			[postId === "post1" ? "post2" : "post1"]:
				prevState[postId === "post1" ? "post2" : "post1"],
		}));
	};

	return (
		<div className={classes.container}>
			<div className={classes.addStatus}>
				<div className={classes.wrapper}>
					<img
						className={classes.profilePic}
						src={maci}
						alt="profile"
					/>
					<div className={classes.information}>
						<p className={classes.name}>Martin Acevski</p>
						<p className={classes.time}>Just now</p>
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
				<div className={classes.yourPost}>
					<span className={classes.field}>{postContent}</span>
				</div>
				<div className={classes.yourLike}>
					<img className={classes.finger} src={lajkce} alt="like" />
					<span>{likeCounts.post1.count}</span>
				</div>
				<div className={classes.border}></div>
				<div className={classes.components}>
					<div
						onClick={() => toggleLike("post1")}
						className={classes.holder}
					>
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
				<div className={classes.group}>
					<div className={classes.box}>
						<img
							className={classes.avatar}
							src={maci}
							alt="profile"
						/>
					</div>
					<div className={classes.input}>
						<input
							className={classes.search}
							type="text"
							placeholder="Write a comment..."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

AddStatus.propTypes = {
	postContent: PropTypes.string.isRequired,
};

export default AddStatus;
