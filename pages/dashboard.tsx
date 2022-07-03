import { Header } from "../components/Header";
import { Sidebar } from "../components/SIdebar";
import dynamic from "next/dynamic";
import netflixLogo from "../public/netflix.png";
import Image from "next/image";

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
	return (
		<div className="w-full relative">
			<Header />
			<div className="flex w-full max-w-screen-2xl my-6 mx-auto px-6 relative">
				<Sidebar />
				<div className="w-full flex">
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
							<div className="p-8 bg-[#151a1e] rounded max-w-[350px] mx-auto md:mx-0">
								<span className="text-lg mb-8 font-bold text-gray-400">
									Gasto mensal
								</span>
								<Chart
									height={350}
									type="radialBar"
									options={radialOptions}
									series={radialSeries}
								/>
							</div>
							<div className="p-8 flex-1 h-[420px] bg-[#151a1e] rounded overflow-y-scroll">
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

					<div className="flex-1 mx-4 h-[85vh]">
						<ul className="bg-[#151a1e] w-full h-full rounded-lg p-8">
							<li className="flex items-center justify-between">
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
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
