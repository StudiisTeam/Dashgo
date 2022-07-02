import { Header } from "../components/Header";
import { Sidebar } from "../components/SIdebar";
import dynamic from "next/dynamic";

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
		<div className="w-full">
			<Header />
			<div className="flex w-full max-w-screen-2xl my-6 mx-auto px-6">
				<Sidebar />
				<div className="w-full">
					<div className="my-8 flex  gap-4">
						<div className="flex-1 flex flex-col justify-between bg-[#151a1e] rounded-lg p-8">
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
						<div className="w-56 h-56 hidden lg:flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-800 to-pink-500 font-medium text-lg">
							Adicione uma imagem
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
						<div className="p-8 bg-[#151a1e] rounded pb-4">
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
					</div>
				</div>
			</div>
		</div>
	);
};
