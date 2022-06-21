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
			<div>
				<main>{children}</main>
			</div>
		</>
	);
};
