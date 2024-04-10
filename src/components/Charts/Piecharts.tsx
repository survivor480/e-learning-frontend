import {Pie} from "react-chartjs-2";

export default function PieChart({ chartData}: any){
    return (
        <div className="chart-container w-[30%] h-[30%]">
            <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
            <Pie
                data={chartData}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: "Users Gained between 2016-2020"
                    }
                }
                }}
            />
        </div>
    );
}