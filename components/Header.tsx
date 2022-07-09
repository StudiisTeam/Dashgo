/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
	RiNotificationLine,
	RiSearchLine,
	RiUserAddLine,
} from "react-icons/ri";
import { Modal } from "./Modal";

export const Header = () => {
	const [modalSearchIsOpen, setModalSearchIsOpen] = useState(false);

	function handleOpenModal() {
		setModalSearchIsOpen(true);
	}
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

			<div
				onClick={handleOpenModal}
				className="flex justify-between items-center flex-1  pl-4 ml-6 max-w-sm md:relative md:bg-black self-center text-gray-200 rounded-full fixed bottom-10 right-5 md:bottom-0 md:right-0 cursor-pointer hover:bg-[#0d1316]"
			>
				<span className="hidden md:block bg-transparent px-4 mr-4 text-gray-400 placeholder:text-gray-400 outline-none">
					Buscar na plataforma
				</span>
				<button className="rounded-full md:bg-transparent bg-black w-12 h-12 flex justify-center items-center mr-4">
					<RiSearchLine size={20} />
				</button>
			</div>

			{modalSearchIsOpen && (
				<Modal>
					<div className="w-full">
						<div className="w-full flex items-center p-4 gap-4 border-b border-b-gray-800">
							<RiSearchLine size={20} />
							<input
								type="text"
								className="w-full bg-transparent outline-none"
								placeholder="Buscar na plataforma"
							/>
						</div>

						<div className="w-full min-h-[150px]">
							<div className="flex justify-center items-center h-[100px]">
								<span className="text-gray-500 font-medium ">
									No recent searches
								</span>
							</div>
						</div>
					</div>
				</Modal>
			)}

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
