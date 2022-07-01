/* eslint-disable @next/next/no-img-element */
import {
	RiNotificationLine,
	RiSearchLine,
	RiUserAddLine,
} from "react-icons/ri";

export const Header = () => {
	return (
		<header className="flex w-full max-w-screen-2xl h-20 mx-auto px-6 pt-4 items-center">
			<button className="flex flex-col gap-1 mr-4 md:hidden">
				<div className="w-4 h-[3px] mx-auto bg-slate-100"></div>
				<div className="w-6 h-[3px] bg-slate-100"></div>
				<div className="w-4 h-[3px] mx-auto bg-slate-100"></div>
			</button>
			<span className="text-3xl font-medium tracking-tight	md:w-64">
				dashgo
				<span className="text-pink-500 ml-[1px]">.</span>
			</span>

			<label
				htmlFor=""
				className=" flex justify-between items-center flex-1  pl-4 ml-6 max-w-sm md:relative md:bg-gray-800 self-center text-gray-200 rounded-full fixed bottom-10 right-5 md:bottom-0 md:right-0"
			>
				<input
					type="text"
					className="hidden md:block bg-transparent px-4 mr-4 text-gray-50 placeholder:text-gray-400 outline-none"
					placeholder="Buscar na plataforma"
				/>
				<button className="rounded-full bg-gray-800 w-12 h-12 flex justify-center items-center mr-4">
					<RiSearchLine size={20} />
				</button>
			</label>
			<div className="flex items-center ml-auto ">
				<div className="flex items-center flex-1  gap-4 px-4 py-1 mr-4 border-r border-r-gray-700">
					<RiNotificationLine size={20} />
					<RiUserAddLine size={20} />
				</div>
				<div className="flex items-center">
					<img
						className=" h-12 w-12 rounded-full"
						src="https://avatars.githubusercontent.com/u/94790993?v=4"
						alt="profileAvatar"
					/>
				</div>
			</div>
		</header>
	);
};
