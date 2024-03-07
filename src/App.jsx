import "./App.css";
import Active from "./components/active/Active";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
	return (
		<div className="container">
			<Header />
			<div className="wrapper">
				<Footer />
				<Main />
				<Active />
			</div>
		
		</div>
	);
}

export default App;
