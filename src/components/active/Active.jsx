import Birthdays from "../birthdays/Birthdays";
import Pages from "../pages/Pages";
import Promotions from "../promotions/Promotions";
import classes from "./Active.module.css";

const Active = () => {
	return (
		<div className={classes.container}>
			<Promotions />
			<Pages />
			<Birthdays />
		</div>
	);
};

export default Active;
