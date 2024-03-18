import classes from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<div className={classes.searchFb}>
			<input
				className={classes.search}
				type="text"
				placeholder="Search Messenger"
			/>
		</div>
	);
};

export default SearchBar;
