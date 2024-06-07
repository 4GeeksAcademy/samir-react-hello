import React from "react";
import Navbar from "./Navbar";
import Bigcard from "./Bigcard";
import Tinycards from "./Tinycards";
import Footer from "./Footer";


//create your first component
function Home() {
	return (
		<div className="principal">
			<Navbar />
			<Bigcard />
			<Tinycards />
			<Footer />
		</div>
	);
}

export default Home;
