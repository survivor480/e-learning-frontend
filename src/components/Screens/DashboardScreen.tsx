import { DefaultLayout } from "../DefaultLayout";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { useState } from "react";
import {Data} from '../../utils/Data';
import PieChart from "../Charts/Piecharts";
import BarChart from "../Charts/Barchart";


Chart.register(CategoryScale);

export function DashboardScreen() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });
    return (
        <DefaultLayout>
            <div className="flex w-full justify-around">
                <PieChart chartData={chartData} />
                <BarChart chartData={chartData} />
            </div>
        </DefaultLayout>
    );
}
