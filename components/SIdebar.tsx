import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
	RiArrowRightLine,
	RiLogoutBoxLine
} from "react-icons/ri";
import classNames from "classnames";
import { useState } from "react";

export function Sidebar() {
	const [ sidebarExpanded, setSidebarExpanded ] = useState(false)

	return (
		//expanded
		// backdrop-blur-sm backdrop-brightness-150
		//flex w-full h-screen fixed z-20
		<aside 
			className={classNames(
				"flex w-full h-screen fixed z-20",
				{"backdrop-blur-sm backdrop-brightness-150": sidebarExpanded} 
			)}
		>
			<div 
				className={`${sidebarExpanded ? "w-60": "w-28"} duration-300 flex justify-between flex-col absolute h-screen px-8 py-8 bg-black z-40 `}
			>
				<div className="flex gap-12 flex-col">
					<span className="text-3xl font-medium tracking-tight">
						dg
						<span className="text-pink-500 ml-[1px]">.</span>
					</span>
					<div className="">
						<span className="font-bold text-gray-400">GERAL</span>
						<div className={`flex gap-4 mt-6 flex-col `}>
							<a href="" className="flex items-center gap-4 text-pink-400">
								<RiDashboardLine size={25} />
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Dashboard</span>
							</a>
							<a href="" className="flex items-center gap-4 ">
								<RiContactsLine size={25} />
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Usuarios</span>
							</a>
							<a href="" className="flex items-center gap-4 text-pink-400">
								<RiDashboardLine size={25}/>
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Dashboard</span>
							</a>
							<a href="" className="flex items-center gap-4 ">
								<RiContactsLine size={25}/>
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Usuarios</span>
							</a>
							<a href="" className="flex items-center gap-4 text-pink-400">
								<RiDashboardLine size={25}/>
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Dashboard</span>
							</a>
						</div>
					</div>
					<div className="">
						<span className="font-bold text-gray-400">AUTO</span>
						<div className="flex gap-4 mt-6 flex-col">
							<a href="" className="flex items-center gap-4 ">
								<RiInputMethodLine size={25}/>
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Formularios</span>
							</a>
							<a href="" className="flex items-center gap-4 ">
								<RiGitMergeLine size={25}/>
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Automacao</span>
							</a>
							<a href="" className="flex items-center gap-4 ">
								<RiGitMergeLine size={25}/>
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Auto</span>
							</a>
							<a href="" className="flex items-center gap-4 ">
								<RiGitMergeLine size={25}/>
								<span className={classNames(
									"font-medium",
									{"hidden":!sidebarExpanded }
								)}>Automacao</span>
							</a>
						</div>
					</div>
				</div>
				<button 
					className={`${sidebarExpanded? "rotate-180": ""} duration-500  bg-pink-500 p-1 rounded-full absolute right-[-10px] mt-2 border-2 border-black`}
					onClick={()=>setSidebarExpanded(!sidebarExpanded)}
				>
					<RiArrowRightLine/>
				</button>

				<button >
					<RiLogoutBoxLine size={25}/>
				</button>
			</div>
		</aside>
	);
}
