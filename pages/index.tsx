import type { NextPage } from "next";
import { DashboardPage } from "./dashboard";
import { SignInPage } from "./signIn";

const Home: NextPage = () => {
	return <DashboardPage />;
	//return <SignInPage />;
};

export default Home;
