import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
	return (
		<aside className=" w-52 mr-8  hidden lg:block ">
			<div className="gap-12 sticky top-4 flex items-start flex-col">
				<div className="">
					<span className="font-bold text-gray-400">GERAL</span>
					<div className="flex gap-4 mt-6 items-stretch flex-col">
						<a href="" className="flex items-center gap-4 text-pink-400">
							<RiDashboardLine />
							<span className="font-medium">Dashboard</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiContactsLine />
							<span className="font-medium">Usuarios</span>
						</a>
					</div>
				</div>
				<div className="">
					<span className="font-bold text-gray-400">AUTOMACAO</span>
					<div className="flex gap-4 mt-6 items-stretch flex-col">
						<a href="" className="flex items-center gap-4 ">
							<RiInputMethodLine />
							<span className="font-medium">Formularios</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiGitMergeLine />
							<span className="font-medium">Automacao</span>
						</a>
					</div>
				</div>
			</div>
		</aside>
	);
}
