import Birthdays from "../birthdays/Birthdays";
import Contacts from "../contacts/Contacts";
import Group from "../group/Group";
import Pages from "../pages/Pages";
import Promotions from "../promotions/Promotions";
import classes from "./Active.module.css";

const Active = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<Promotions />
				<Pages />
				<Birthdays />
				<Contacts />
				<Group />
			</div>
		</div>
	);
};

export default Active;
