import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>DashGo</title>
			</Head>
			<div className="dark:bg-gray-900 min-h-screen dark:text-gray-50 font-sans">
				<main>{children}</main>
			</div>
		</>
	);
};
