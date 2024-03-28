import classes from "./Inbox.module.css";
import bea from "/public/AI.jpg";

const Inbox = () => {
	return (
		<div className={classes.container}>
			<div className={classes.chat}>
				<div className={classes.header}>
					<div className={classes.information}>
						<div className={classes.avatar}>
							<img
								className={classes.profilePic}
								src={bea}
								alt="image"
							/>
						</div>
						<div className={classes.person}>
							<p className={classes.name}>Bea Tin</p>
							<p className={classes.time}>Active now</p>
						</div>
					</div>
					<div className={classes.wrapper}>
						<div className={classes.svg}>
							<svg
								viewBox="0 0 12 13"
								width="16"
								height="16"
								fill="gray"
							>
								<g stroke="none">
									<path
										d="M109.492 925.682a1.154 1.154 0 0 0-.443-.81 10.642 10.642 0 0 0-1.158-.776l-.211-.125c-.487-.29-.872-.514-1.257-.511a3.618 3.618 0 0 0-.693.084c-.304.07-.6.302-.88.69a3.365 3.365 0 0 0-.297.494l.449.22-.507-.202-.13-.074a8.53 8.53 0 0 1-3.04-3.043l-.071-.124.019-.057v-.001c.168-.083.334-.183.492-.297.162-.117.552-.432.681-.842.063-.2.075-.407.086-.59l.007-.116c.029-.389-.197-.764-.482-1.237l-.153-.256c-.322-.55-.6-.933-.775-1.158a1.155 1.155 0 0 0-.811-.443c-.36-.031-1.066.01-1.748.608-1.018.896-1.326 2.25-.845 3.714a11.734 11.734 0 0 0 2.834 4.612 11.732 11.732 0 0 0 4.61 2.833c.455.149.897.222 1.32.222.94 0 1.777-.364 2.395-1.067.599-.681.639-1.387.608-1.748"
										transform="translate(-450 -1073) translate(352.5 157)"
									></path>
								</g>
							</svg>
						</div>
						<div className={classes.svg}>
							<svg
								viewBox="0 0 12 13"
								width="16"
								height="16"
								fill="gray"
							>
								<g transform="translate(-450 -1073)">
									<path d="M461.583 1076.078a.732.732 0 0 0-.774.073l-.612.466a.498.498 0 0 0-.197.398v4.97c0 .157.072.304.197.398l.612.466a.736.736 0 0 0 .774.073.749.749 0 0 0 .417-.677v-5.49a.75.75 0 0 0-.417-.677m-4.562-1.557h-5.043A1.98 1.98 0 0 0 450 1076.5v6.021a1.98 1.98 0 0 0 1.978 1.979h5.043a1.98 1.98 0 0 0 1.979-1.979v-6.021a1.98 1.98 0 0 0-1.978-1.979"></path>
								</g>
							</svg>
						</div>
						<div className={classes.svg}>
							<svg
								viewBox="0 0 12 13"
								width="20"
								height="20"
								fill="gray"
							>
								<g transform="translate(-450 -1073)">
									<path d="M452.25 1080.5h8a.75.75 0 1 0 0-1.5h-8a.75.75 0 1 0 0 1.5z"></path>
								</g>
							</svg>
						</div>
						<div className={classes.svg}>
							<svg
								viewBox="0 0 12 13"
								width="20"
								height="20"
								fill="gray"
							>
								<g transform="translate(-450 -1073)">
									<g>
										<path
											d="m98.095 917.155 7.75 7.75a.75.75 0 0 0 1.06-1.06l-7.75-7.75a.75.75 0 0 0-1.06 1.06z"
											transform="translate(353.5 159)"
										></path>
										<path
											d="m105.845 916.095-7.75 7.75a.75.75 0 1 0 1.06 1.06l7.75-7.75a.75.75 0 0 0-1.06-1.06z"
											transform="translate(353.5 159)"
										></path>
									</g>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inbox;
