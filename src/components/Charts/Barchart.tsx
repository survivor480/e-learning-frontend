import { Bar } from "react-chartjs-2";


export default function BarChart({ chartData }: any) {
  return (
    <div className="chart-container h-full w-[60%]">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};