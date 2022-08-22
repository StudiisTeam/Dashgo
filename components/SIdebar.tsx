import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
	return (
		//flex w-full h-screen fixed z-20 backdrop-blur-sm backdrop-brightness-150
		<aside className="flex w-full h-screen fixed z-20 backdrop-blur-sm backdrop-brightness-150">
			<div className="flex absolute gap-12 h-screen p-8 bg-black items-center flex-col z-40 ">
				<div className="">
					<span className="font-bold text-gray-400">GERAL</span>
					<div className="flex gap-4 mt-6 items-center flex-col">
						<a href="" className="flex items-center gap-4 text-pink-400">
							<RiDashboardLine size={25} />
							<span className="font-medium hidden">Dashboard</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiContactsLine size={25} />
							<span className="font-medium hidden">Usuarios</span>
						</a>
						<a href="" className="flex items-center gap-4 text-pink-400">
							<RiDashboardLine size={25}/>
							<span className="font-medium hidden">Dashboard</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiContactsLine size={25}/>
							<span className="font-medium hidden">Usuarios</span>
						</a>
						<a href="" className="flex items-center gap-4 text-pink-400">
							<RiDashboardLine size={25}/>
							<span className="font-medium hidden">Dashboard</span>
						</a>
					</div>
				</div>
				<div className="">
					<span className="font-bold text-gray-400">AUTO</span>
					<div className="flex gap-4 mt-6 items-center flex-col">
						<a href="" className="flex items-center gap-4 ">
							<RiInputMethodLine size={25}/>
							<span className="font-medium hidden">Formularios</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiGitMergeLine size={25}/>
							<span className="font-medium hidden">Automacao</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiGitMergeLine size={25}/>
							<span className="font-medium hidden">Auto</span>
						</a>
						<a href="" className="flex items-center gap-4 ">
							<RiGitMergeLine size={25}/>
							<span className="font-medium hidden">Automacao</span>
						</a>
					</div>
				</div>
			</div>
		</aside>
	);
}
