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
		<div className="">
			<Header />
			<div className="flex w-full max-w-screen-2xl my-6 mx-auto px-6">
				<Sidebar />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
					<div className="p-8 bg-gray-800 rounded-lg pb-4">
						<span className="text-lg mb-8 font-bold text-gray-400">
							Gasto mensal
						</span>
						<Chart height={160} type="area" options={options} series={series} />
					</div>
					<div className="p-8 bg-gray-800 rounded-lg">
						<span className="text-lg mb-8 font-bold text-gray-400">
							Gasto mensal
						</span>
						<Chart height={160} type="area" options={options} series={series} />
					</div>
					<div className="p-8 bg-gray-800 rounded-lg max-w-[350px] mx-auto md:mx-0">
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
	);
};
