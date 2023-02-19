import Directory from "../../components/directory/directory.component";
const Home = () => {
	console.log("testing env", import.meta.env.VITE_FIREBASE_API_KEY);
	console.log("testing env", import.meta.env.MODE);
	try {
		console.log("testPort1", import.meta.env.VITE_TEST_1);
		console.log("testPort2", import.meta.env.VITE_TEST_2);
	} catch (error) {
		console.log("home err", error);
	}
	return <Directory />;
};

export default Home;
