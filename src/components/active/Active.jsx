import Promotions from "../promotions/Promotions";
import classes from "./Active.module.css";

const Active = () => {
	return (
		<div className={classes.container}>
			<Promotions />
		</div>
	);
};

export default Active;
