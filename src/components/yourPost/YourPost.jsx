import classes from "./YourPost.module.css";
import maci from "/maci.jpg";
import key from "/key.png";
import cetri from "/CETRI.png";
import ONE from "/ONE.png";
import pet from "/pet.png";
import TOO from "/TOO.png";
import TRI from "/TRI.png";
import PropTypes from "prop-types";
import { useState } from "react";

const YourPost = ({ onClose, onContentChange, onPost }) => {
	const [localContent, setLocalContent] = useState("");

	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.header}>
					<div className={classes.combine}>
						<div className={classes.remove}>
							<button
								className={classes.delete}
								onClick={onClose}
							>
								✖
							</button>
						</div>
					</div>
					<div className={classes.border}></div>
				</div>

				<div className={classes.public}>
					<div className={classes.wrapper}>
						<img
							className={classes.profilePic}
							src={maci}
							alt="profile"
						/>
						<div className={classes.information}>
							<p className={classes.name}>Martin Acevski</p>
							<div className={classes.time}>
								<img
									className={classes.key}
									src={key}
									alt="key"
								/>
								<p className={classes.text}>Only me</p>
							</div>
						</div>
					</div>
					<div className={classes.input}>
						<div className={classes.box}>
							<div className={classes.input}>
								<div className={classes.box}>
									<textarea
										placeholder="What's on your mind?"
										className={`${classes.field}`}
										value={localContent}
										onChange={(e) =>
											setLocalContent(e.target.value)
										}
									></textarea>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.tools}>
						<div className={classes.addPost}>
							<div className={classes.post}>
								<p className={classes.txt}>Add to your post</p>
							</div>
							<div className={classes.emoji}>
								<div className={classes.bg}>
									<img
										className={classes.tools}
										src={ONE}
										alt="maci"
									/>
								</div>
								<div className={classes.bg}>
									<img
										className={classes.tools}
										src={TOO}
										alt="maci"
									/>
								</div>
								<div className={classes.bg}>
									<img
										className={classes.tools}
										src={TRI}
										alt="maci"
									/>
								</div>
								<div className={classes.bg}>
									<img
										className={classes.tools}
										src={cetri}
										alt="maci"
									/>
								</div>
								<div className={classes.bg}>
									<img
										className={classes.tools}
										src={pet}
										alt="maci"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.btn}>
						<button
							onClick={() => {
								onContentChange(localContent); 
								onPost(); 
							}}
							className={classes.push}
						>
							Post
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

YourPost.propTypes = {
	onClose: PropTypes.func.isRequired,
	onContentChange: PropTypes.func.isRequired,
	postContent: PropTypes.string.isRequired,
	onPost: PropTypes.func.isRequired,
};
export default YourPost;
