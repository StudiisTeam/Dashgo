import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
	return (
		<aside className="flex w-full h-screen fixed z-20 backdrop-blur-sm backdrop-brightness-150">
			<div className="flex absolute gap-12 w-96 h-screen p-8 bg-black items-start flex-col z-40 ">
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
						<a href="" className="flex items-center gap-4 text-pink-400">
							<RiDashboardLine />
							<span className="font-medium">Dashboard</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiContactsLine />
							<span className="font-medium">Usuarios</span>
						</a>
						<a href="" className="flex items-center gap-4 text-pink-400">
							<RiDashboardLine />
							<span className="font-medium">Dashboard</span>
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
						<a href="" className="flex items-center gap-4 ">
							<RiGitMergeLine />
							<span className="font-medium">Automacao</span>
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
