import Directory from "../../components/directory/directory.component";
const Home = () => {
	console.log("testing env", import.meta.env.VITE_FIREBASE_API_KEY);
	console.log("testing env", import.meta.env.MODE);
	return <Directory />;
};

export default Home;
