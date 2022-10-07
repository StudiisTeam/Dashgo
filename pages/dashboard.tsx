import { Header } from "../components/Header";
import { Sidebar } from "../components/SIdebar";
import dynamic from "next/dynamic";
import netflixLogo from "../public/netflix.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
	FiArchive,
	FiChevronDown,
	FiEdit,
	FiExternalLink,
	FiTrash,
} from "react-icons/fi";
import { HiOutlineDuplicate } from "react-icons/hi";

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

const options = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: "#FFF",
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: "datetime",
		axisBorder: {
			color: "#ff5555",
		},
		axisTicks: {
			color: "#ff5555",
		},
		categories: [
			"2021-06-18T00:00:00.000Z",
			"2021-06-19T00:00:00.000Z",
			"2021-06-20T00:00:00.000Z",
			"2021-06-21T00:00:00.000Z",
			"2021-06-22T00:00:00.000Z",
			"2021-06-23T00:00:00.000Z",
			"2021-06-24T00:00:00.000Z",
		],
	},
	fill: {
		opacity: 0.3,
		type: "gradient",
		gradient: {
			shade: "dark",
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
};
const radialOptions = {
	plotOptions: {
		radialBar: {
			track: { background: "#11221d" },

			dataLabels: {
				name: {
					fontSize: "22px",
				},
				value: {
					fontSize: "16px",
					color: "#ffffff",
				},
				total: {
					show: true,
					label: "Total",
					color: "#ffffff",
				},
			},
		},
	},
	stroke: {
		lineCap: "round",
	},
	labels: ["Apples", "Oranges", "Bananas", "Berries"],
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 61, 109, 20] }];
const radialSeries = [44, 55, 67, 83];

export const DashboardPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<div className="w-full relative">
			{sidebarIsOpen && <Sidebar />}
			<Header />
			<div className="flex w-full max-w-screen-2xl my-6 mx-auto px-6 relative">
				<div className="w-full flex flex-col xl:flex-row gap-4">
					<div className="w-3/4">
						<div className="flex-1 flex mb-4 flex-col justify-between shadow-lg bg-white dark:bg-[#151a1e] rounded-lg p-8">
							<div className="flex items-center justify-between border-b-2 border-b-slate-200 dark:border-b-slate-700 pb-4">
								<div className="flex flex-col">
									<span className="font-medium text-lg">
										Fontenele&apos;s expance
									</span>
									<span className="text-sm text-gray-500">
										Current usage period (Jun 8 to Jul 8)
									</span>
								</div>

								<Menu as="div" className="relative inline-block text-left">
									<div>
										<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
											Options
											<FiChevronDown
												className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>
									<Transition
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
											<div className="px-1 py-1">
												<Menu.Item>
													{({ active }) => (
														<button
															className={`${
																active
																	? "bg-pink-500 text-white"
																	: "text-gray-50"
															} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
														>
															{active ? (
																<FiEdit
																	className="mr-2 h-5 w-5"
																	aria-hidden="true"
																/>
															) : (
																<FiEdit
																	className="mr-2 h-5 w-5"
																	aria-hidden="true"
																/>
															)}
															Edit
														</button>
													)}
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>

							<div className=" flex md:justify-center gap-4 w-full flex-wrap mt-8">
								<div className="bg-[#1c2126] rounded-lg w-full md:w-48 font-medium overflow-hidden">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[80%] before:z-0" />
									<div className="text-gray-500 p-4 flex flex-col">
										<span className="text-gray-300">Balance</span>
										<span>
											<strong className="text-gray-300">R$ 855</strong>/R$ 1.200
										</span>
									</div>
								</div>

								<div className="bg-[#1c2126] rounded-lg w-full md:w-48 font-medium overflow-hidden ">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[50%]" />
									<div className="text-gray-500 p-4 flex flex-col">
										<span className="text-gray-300">Fixed expense</span>
										<span>
											<strong className="text-gray-300">2</strong>/4
										</span>
									</div>
								</div>

								<div className="bg-[#1c2126] rounded-lg w-full md:w-48 font-medium overflow-hidden ">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[80%]" />
									<div className="text-gray-500 p-4 flex flex-col">
										<span className="text-gray-300">Balance</span>
										<span>
											<strong className="text-gray-300">R$ 855</strong>/R$ 1.200
										</span>
									</div>
								</div>

								<div className="bg-[#1c2126] rounded-lg w-full md:w-48 font-medium overflow-hidden ">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[80%] before:z-0" />
									<div className="text-gray-500 p-4 flex flex-col">
										<span className="text-gray-300">asd</span>
										<span>
											<strong className="text-gray-300">R$ 855</strong>/R$ 1.200
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
							<div className="p-4 shadow-lg bg-white dark:bg-[#151a1e] rounded pb-4">
								<span className="text-lg mb-8 font-bold text-gray-400">
									Renda mensal
								</span>
								<Chart
									height={160}
									type="area"
									options={options}
									series={series}
								/>
							</div>
							<div className="p-4 shadow-lg bg-white dark:bg-[#151a1e] rounded">
								<span className="text-lg mb-8 font-bold text-gray-400">
									Gasto mensal
								</span>
								<Chart
									height={160}
									type="area"
									options={options}
									series={series}
								/>
							</div>
						</div>

						<div className="flex flex-col md:flex-row mt-4 gap-4">
							<div className="shadow-lg bg-white dark:bg-[#151a1e] rounded py-8 w-full md:max-w-sm">
								<Chart
									height={270}
									type="radialBar"
									options={radialOptions}
									series={radialSeries}
								/>
							</div>
							<div className="p-8 flex-1 h-[315px] shadow-lg bg-white dark:bg-[#151a1e] rounded overflow-y-scroll">
								<span className=" text-lg font-bold text-gray-400">
									Last transactions
								</span>

								<div className="flex mt-4 items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
											<Image width={20} height={20} src={netflixLogo} alt="" />
										</div>
										<div className="flex flex-col">
											<span>Netflix</span>
											<span className="text-xs text-gray-500">
												Entertrainmet
											</span>
										</div>
									</div>
									<span className="text-red-600">-R$30</span>
									<div className="flex flex-col">
										<span>Mar 6, 2022</span>
										<span className="text-xs text-gray-500">03:32PM</span>
									</div>
								</div>

								<div className="flex mt-4 items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
											<Image width={20} height={20} src={netflixLogo} alt="" />
										</div>
										<div className="flex flex-col">
											<span>Netflix</span>
											<span className="text-xs text-gray-500">
												Entertrainmet
											</span>
										</div>
									</div>
									<span className="text-red-600">-R$30</span>
									<div className="flex flex-col">
										<span>Mar 6, 2022</span>
										<span className="text-xs text-gray-500">03:32PM</span>
									</div>
								</div>

								<div className="flex mt-4 items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
											<Image width={20} height={20} src={netflixLogo} alt="" />
										</div>
										<div className="flex flex-col">
											<span>Netflix</span>
											<span className="text-xs text-gray-500">
												Entertrainmet
											</span>
										</div>
									</div>
									<span className="text-red-600">-R$30</span>
									<div className="flex flex-col">
										<span>Mar 6, 2022</span>
										<span className="text-xs text-gray-500">03:32PM</span>
									</div>
								</div>

								<div className="flex mt-4 items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
											<Image width={20} height={20} src={netflixLogo} alt="" />
										</div>
										<div className="flex flex-col">
											<span>Netflix</span>
											<span className="text-xs text-gray-500">
												Entertrainmet
											</span>
										</div>
									</div>
									<span className="text-red-600">-R$30</span>
									<div className="flex flex-col">
										<span>Mar 6, 2022</span>
										<span className="text-xs text-gray-500">03:32PM</span>
									</div>
								</div>

								<div className="flex mt-4 items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
											<Image width={20} height={20} src={netflixLogo} alt="" />
										</div>
										<div className="flex flex-col">
											<span>Netflix</span>
											<span className="text-xs text-gray-500">
												Entertrainmet
											</span>
										</div>
									</div>
									<span className="text-red-600">-R$30</span>
									<div className="flex flex-col">
										<span>Mar 6, 2022</span>
										<span className="text-xs text-gray-500">03:32PM</span>
									</div>
								</div>

								<div className="flex mt-4 items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
											<Image width={20} height={20} src={netflixLogo} alt="" />
										</div>
										<div className="flex flex-col">
											<span>Netflix</span>
											<span className="text-xs text-gray-500">
												Entertrainmet
											</span>
										</div>
									</div>
									<span className="text-red-600">-R$30</span>
									<div className="flex flex-col">
										<span>Mar 6, 2022</span>
										<span className="text-xs text-gray-500">03:32PM</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex-1 flex justify-between gap-4 flex-col h-full shadow-lg bg-white dark:bg-[#151a1e] rounded-lg p-8">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
									<Image width={20} height={20} src={netflixLogo} alt="" />
								</div>
								<div className="flex flex-col">
									<span>Netflix</span>
									<span className="text-xs text-gray-500">Mar 6, 2022</span>
								</div>
							</div>
							<span className="text-red-600">-R$30</span>
						</div>
						<button
							className="block w-[235px] text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mx-auto"
							type="button"
							data-modal-toggle="defaultModal"
							onClick={openModal}
						>
							Add expense
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
