/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import {
	RiNotificationLine,
	RiSearchLine,
	RiUserAddLine,
} from "react-icons/ri";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<header className="flex w-full max-w-screen-2xl h-20 mx-auto px-6 pt-4 items-center">
			<button className="flex flex-col gap-1 mr-4 lg:hidden">
				<div className="w-4 h-[3px] mx-auto bg-slate-100"></div>
				<div className="w-6 h-[3px] bg-slate-100"></div>
				<div className="w-4 h-[3px] mx-auto bg-slate-100"></div>
			</button>
			<span className="text-3xl font-medium tracking-tight	md:w-64">
				dashgo
				<span className="text-pink-500 ml-[1px]">.</span>
			</span>

			<div
				onClick={() => setIsOpen(true)}
				className="flex justify-between items-center flex-1  pl-4 ml-6 max-w-sm md:relative md:bg-black self-center text-gray-200 rounded-full fixed bottom-10 right-5 md:bottom-0 md:right-0 cursor-pointer hover:bg-[#0d1316]"
			>
				<span className="hidden md:block bg-transparent px-4 mr-4 text-gray-400 placeholder:text-gray-400 outline-none">
					Buscar na plataforma
				</span>
				<button className="rounded-full md:bg-transparent bg-black w-12 h-12 flex justify-center items-center mr-4">
					<RiSearchLine size={20} />
				</button>
			</div>

			<Transition appear show={isOpen}>
				<Dialog as="div" onClose={closeModal}>
					<div className="fixed inset-0">
						<div className="flex min-h-full items-start justify-center p-4 text-center w-full bg-[#0d1316b9]">
							<Transition.Child
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="gap-4 w-[80vw] max-w-2xl mt-[5vh] transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all bg-[#141c20]">
									<div className="flex items-center gap-4 border-b border-b-gray-800 p-4 z-50">
										<RiSearchLine size={20} />
										<input
											type="text"
											className="bg-transparent outline-none w-full"
											placeholder="Buscar na plataforma"
										/>
									</div>
									<div className="w-full h-[150px] flex items-center justify-center">
										<span>No recent searches</span>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

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
