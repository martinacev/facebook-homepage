import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./Footer.module.css";
import PropTypes from "prop-types";

const MenuItem = ({ icon, text }) => (
	<div className={classes.myProfile}>
		<img
			className={`${classes.profilep} ${
				text === "Martin Acevski" ? classes.specialProfile : ""
			}`}
			src={icon}
			alt={text}
		/>
		<p className={classes.name}>{text}</p>
	</div>
);

MenuItem.propTypes = {
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

const Footer = () => {
	const menuItems = [
		{ icon: "/maci.jpg", text: "Martin Acevski" },
		{ icon: "/friends.png", text: "Friends" },
		{ icon: "/memories.png", text: "Memories" },
		{ icon: "/saved.png", text: "Saved" },
		{ icon: "/groupFuter.png", text: "Group" },
		{ icon: "/videoFooter.png", text: "Video" },
	];

	const shortcuts = [
		{
			icon: "/itsektor.jpg",
			text: "Сојуз Комитет на Програмери на Република Македонија",
		},
		{ icon: "/avtoapaza.jpg", text: "AVTOPAZAR MAKEDONIJA" },
		{
			icon: "/istoProgramiranje.jpg",
			text: "Работа и Вработување во ИТ Сектор",
		},
		{
			icon: "/lastjob.jpg",
			text: "Сојуз Комитет на Програмери на Република Македонија",
		},
	];

	return (
		<div className={classes.container}>
			<div className={classes.content}>
				{menuItems.map((item, index) => (
					<MenuItem key={index} icon={item.icon} text={item.text} />
				))}
				<button className={classes.more}>
					<KeyboardArrowDownIcon
						sx={{
							color: "white",
							backgroundColor: "#3a3b3c;",
							borderRadius: "20px",
							width: "30px",
							height: "30px",
						}}
					/>
					<p className={classes.name}>See more</p>
				</button>
				<div className={classes.border}></div>

				<div className={classes.shortCuts}>
					<p className={classes.title}>Your shortcuts</p>
					{shortcuts.map((shortcut, index) => (
						<MenuItem
							key={index}
							icon={shortcut.icon}
							text={shortcut.text}
						/>
					))}
					<button className={classes.more}>
						<KeyboardArrowDownIcon
							sx={{
								color: "white",
								backgroundColor: "#3a3b3c;",
								borderRadius: "20px",
								width: "30px",
								height: "30px",
							}}
						/>
						<p className={classes.name}>See more</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
