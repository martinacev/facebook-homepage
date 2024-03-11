import classes from "./Contacts.module.css";
import Svg from "../componentsSvg/Svg";
import PropTypes from 'prop-types';

const contactsData = [
	{ image: "/public/mark.jpg", name: "Mario Bozidarovski" },
	{ image: "/public/doc.jpg", name: "Мартин Апостоловски" },
	{ image: "/public/goat.png", name: "Sergej Pohahontas" },
	{ image: "/public/majk.jpg", name: "Majk Anderson" },
	{ image: "/public/AI.jpg", name: "Bea tin" },
];

const ContactItem = ({ image, name }) => (
	<div className={classes.group}>
		<img className={classes.pac} src={image} alt="image" />
		<div className={classes.birthday}>
			<p className={classes.name}>{name}</p>
		</div>
	</div>
);

const Contacts = () => {
	return (
		<div className={classes.container}>
			<Svg />
			{contactsData.map((contact, index) => (
				<ContactItem key={index} {...contact} />
			))}
			<div className={classes.border}></div>
		</div>
	);
};

ContactItem.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
  };

export default Contacts;
