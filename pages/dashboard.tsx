import { Header } from "../components/Header";
import { Sidebar } from "../components/SIdebar";
import dynamic from "next/dynamic";
import netflixLogo from "../public/netflix.png";
import Image from "next/image";
import { useState } from "react";

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
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleOpenModal() {
		setModalIsOpen(true);
	}

	return (
		<div className="w-full relative">
			<Header />
			<div className="flex w-full max-w-screen-2xl my-6 mx-auto px-6 relative">
				<Sidebar />
				<div className="w-full flex flex-col xl:flex-row gap-4">
					<div className="">
						<div className="flex-1 flex mb-4 flex-col justify-between bg-[#151a1e] rounded-lg p-8">
							<div className="flex items-center justify-between border-b-2 border-b-slate-700 pb-4">
								<span className="font-medium text-lg">
									Fontenele&apos;s expance
								</span>
								<span>Current usage period (Jun 8 to Jul 8)</span>
							</div>

							<div className=" flex md:justify-center gap-4 w-full flex-wrap mt-8">
								<div className="bg-[#1c2126] rounded-lg w-full md:w-52 font-medium overflow-hidden ">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[80%]" />
									<div className="text-gray-500 p-4 flex flex-col">
										<span className="text-gray-300">Balance</span>
										<span>
											<strong className="text-gray-300">R$ 855</strong>/R$ 1.200
										</span>
									</div>
								</div>

								<div className="bg-[#1c2126] rounded-lg w-full md:w-52 font-medium overflow-hidden ">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[50%]" />
									<div className="text-gray-500 p-4 flex flex-col">
										<span className="text-gray-300">Fixed expense</span>
										<span>
											<strong className="text-gray-300">2</strong>/4
										</span>
									</div>
								</div>

								<div className="bg-[#1c2126] rounded-lg w-full md:w-52 font-medium overflow-hidden ">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[80%]" />
									<div className="text-gray-500 p-4 flex flex-col">
										<span className="text-gray-300">Balance</span>
										<span>
											<strong className="text-gray-300">R$ 855</strong>/R$ 1.200
										</span>
									</div>
								</div>

								<div className="bg-[#1c2126] rounded-lg w-full md:w-52 font-medium overflow-hidden ">
									<div className="w-full h-[6px] relative bg-gray-700 before:content-[' '] before:absolute before:h-[6px] before:bg-pink-500 before:w-[80%]" />
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
							<div className="p-8 bg-[#151a1e] rounded pb-4">
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
							<div className="p-8 bg-[#151a1e] rounded">
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

						<div className="flex mt-4 gap-4">
							<div className=" bg-[#151a1e] rounded max-w-[350px] py-8 mx-auto md:mx-0">
								<Chart
									height={270}
									type="radialBar"
									options={radialOptions}
									series={radialSeries}
								/>
							</div>
							<div className="p-8 flex-1 h-[315px] bg-[#151a1e] rounded overflow-y-scroll">
								<span className=" text-lg font-bold text-gray-400">
									Last transactions
								</span>

								<div className="flex mt-8 items-center justify-between">
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

								<div className="flex mt-8 items-center justify-between">
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

								<div className="flex mt-8 items-center justify-between">
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

								<div className="flex mt-8 items-center justify-between">
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

								<div className="flex mt-8 items-center justify-between">
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

								<div className="flex mt-8 items-center justify-between">
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

					<div className="flex-1 flex justify-between gap-4 flex-col  h-full bg-[#151a1e] rounded-lg p-8">
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
							className="block w-[235px] text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
							type="button"
							data-modal-toggle="defaultModal"
							onClick={handleOpenModal}
						>
							Add expense
						</button>

						{modalIsOpen && (
							<div
								id="defaultModal"
								tabIndex={-1}
								aria-hidden="true"
								className="overflow-y-auto overflow-x-hidden fixed flex items-center justify-center z-50 w-full md:inset-0 h-modal md:h-full bg-[#151a1ec9] "
							>
								<div
									onClick={() => setModalIsOpen(false)}
									className="relative z-0 w-full h-full backdrop-blur-sm"
								/>
								<div className="absolute p-4 w-full max-w-2xl h-full md:h-auto z-90">
									<div className="relative bg-white rounded-lg dark:bg-[#1c2227] shadow-lg">
										<div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-700 ">
											<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
												Terms of Service
											</h3>
											<button
												type="button"
												className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
												data-modal-toggle="defaultModal"
												onClick={() => setModalIsOpen(false)}
											>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
														clipRule="evenodd"
													></path>
												</svg>
											</button>
										</div>

										<div className="p-6 space-y-6">
											<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
												With less than a month to go before the European Union
												enacts new consumer privacy laws for its citizens,
												companies around the world are updating their terms of
												service agreements to comply.
											</p>
											<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
												The European Union’s General Data Protection Regulation
												(G.D.P.R.) goes into effect on May 25 and is meant to
												ensure a common set of data rights in the European
												Union. It requires organizations to notify users as soon
												as possible of high-risk data breaches that could
												personally affect them.
											</p>
										</div>

										<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-700">
											<button
												data-modal-toggle="defaultModal"
												type="button"
												className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
											>
												I accept
											</button>
											<button
												data-modal-toggle="defaultModal"
												type="button"
												className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
											>
												Decline
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
