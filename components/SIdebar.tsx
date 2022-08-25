import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
	RiArrowLeftLine,
	RiArrowRightLine,
	RiLogoutBoxLine
} from "react-icons/ri";
import { Logo } from "./Logo";

export function Sidebar() {
	return (
		//expanded
		//flex w-full h-screen fixed z-20 backdrop-blur-sm backdrop-brightness-150
		<aside className="flex w-full h-screen fixed z-20">
			<div className="flex items-center justify-between flex-col absolute h-screen px-8 py-8 bg-black z-40 ">
				<div className="flex gap-12 flex-col">
					<span className="text-3xl font-medium tracking-tight">
						dg
						<span className="text-pink-500 ml-[1px]">.</span>
					</span>
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
				<button className="bg-pink-500 p-1 rounded-full absolute right-[-10px] mt-2"><RiArrowRightLine/></button>

				<button><RiLogoutBoxLine size={25}/></button>
			</div>
		</aside>
	);
}
