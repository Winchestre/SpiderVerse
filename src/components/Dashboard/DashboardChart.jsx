import { Bar, Line } from "react-chartjs-2"
import { CategoryScale, Chart, LinearScale, BarController, BarElement, LineController, LineElement, PointElement } from "chart.js"
import { chartArray } from "@/constants/data";

const DashboardChart = () => {
    Chart.register({CategoryScale, LinearScale, BarController, BarElement, LineController, LineElement, PointElement});

    return (
        <div className=" mb-5 flex gap-5">
            <div className="w-1/2 border border-neutral-300 rounded-md p-4">
                <Line
                    data={{
                        labels: chartArray.map(label => label.labels),
                        datasets: [
                            {
                                label: 'Revenue Statistics',
                                data: chartArray.map(data => data.value),
                                backgroundColor: '#224191',
                                tension: .5,
                            },
                        ]
                    }}
                />
            </div>
            <div className="w-1/2 border border-neutral-300 rounded-md p-4">
                <Bar
                    data={{
                        labels: chartArray.map(label => label.labels),
                        datasets: [
                            {
                                label: 'Order Statistics',
                                data: chartArray.map(data => data.value),
                                barThickness: 20,
                                backgroundColor: '#224191',
                                borderRadius: 10,
                            },
                        ]
                    }}
                />
            </div>
            
            
        </div>
    )
}
export default DashboardChart