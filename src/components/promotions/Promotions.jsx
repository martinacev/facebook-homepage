import classes from './Promotions.module.css';
import shoes from "/public/shoes.webp";
import steelseries from '/public/steelseries.jpg';

const Promotions = () => {
    return (
        <div className={classes.box}>
				<p className={classes.title}>Sponsored</p>

				<div className={classes.promoShoes}>
					<img
						className={classes.shoes}
						src={shoes}
						alt="shoes model"
					/>

					<div className={classes.information}>
						<p className={classes.height}>shoes.com</p>
					</div>
				</div>

				<div className={classes.promoShoes}>
					<img
						className={classes.shoes}
						src={steelseries}
						alt="shoes model"
					/>

					<div className={classes.information}>
						<p className={classes.height}>steelseries.com</p>
					</div>
				</div>
			</div>
    )
}

export default Promotions;