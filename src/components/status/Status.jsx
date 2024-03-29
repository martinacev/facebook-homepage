import { useState } from "react";
import classes from "./Status.module.css";
import mario from "/public/mark.jpg";
import image from "/public/programin-learn.jpg";
import share from "/public/share.png";
import pac from "/public/2pac.jpg";
import legend from "/public/legend.jpg";
import comment from "/public/comment.png";
import lajkce from "/public/lajkce.png";
import maci from "/public/maci.jpg";
import like from "/public/like.png";

const Status = () => {
	const [likeCounts, setLikeCounts] = useState({
		post1: { count: 0, liked: false },
		post2: { count: 0, liked: false },
	});

	const [comments, setComments] = useState([[], []]);

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

	const handleInputChange = () => {};

	const handleKeyPress = (e, postId) => {
		if (e.key === "Enter") {
			const newComments = [...comments];
			newComments[postId] = [...newComments[postId], e.target.value];
			setComments(newComments);
			e.target.value = "";
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.post}>
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
					<div className={classes.border}></div>
					<div className={classes.yourLike}>
						<img
							className={classes.finger}
							src={lajkce}
							alt="like"
						/>
						<span>{likeCounts.post1.count}</span>
					</div>
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
							<p className={classes.description}>
								{likeCounts.post1.liked ? "Unlike" : "Like"}
							</p>
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

					{comments[0].map((comment, index) => (
						<div key={index} className={classes.postComments}>
							<div className={classes.content}>
								<div className={classes.wrapimg}>
									<img
										className={classes.avatar}
										src={maci}
										alt="your-image"
									/>
								</div>
								<div className={classes.yourComments}>
									<div className={classes.wrapContent}>
										<p className={classes.profile}>
											Martin Acevski
										</p>
										<span className={classes.text}>
											{comment}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}

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
								onKeyPress={(e) => handleKeyPress(e, 0)}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.post}>
				<div className={classes.status}>
					<div className={classes.wrapper}>
						<img
							className={classes.profilePic}
							src={pac}
							alt="profile"
						/>
						<div className={classes.information}>
							<p className={classes.name}>Sergej Pohahontas</p>
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
							src={legend}
							alt="learn-programing-post"
						/>
					</div>
					<div className={classes.border}></div>
					<div className={classes.yourLike}>
						<img
							className={classes.finger}
							src={lajkce}
							alt="like"
						/>
						<span>{likeCounts.post2.count}</span>
					</div>
					<div className={classes.components}>
						<div
							onClick={() => toggleLike("post2")}
							className={classes.holder}
						>
							<img
								className={classes.emoji}
								src={like}
								alt="video call"
							/>
							<p className={classes.description}>
								{likeCounts.post2.liked ? "Unlike" : "Like"}
							</p>
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

					{comments[1].map((comment, index) => (
						<div key={index} className={classes.postComments}>
							<div className={classes.content}>
								<div className={classes.wrapimg}>
									<img
										className={classes.avatar}
										src={maci}
										alt="your-image"
									/>
								</div>
								<div className={classes.yourComments}>
									<span className={classes.text}>
										{comment}
									</span>
								</div>
							</div>
						</div>
					))}

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
								onChange={handleInputChange}
								onKeyPress={(e) => handleKeyPress(e, 1)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Status;
