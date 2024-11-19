// "use client";

// import { Bar, BarChart } from "recharts";
// import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// const chartData = [
//     { month: "January", desktop: 186, mobile: 80 },
//     { month: "February", desktop: 305, mobile: 200 },
//     { month: "March", desktop: 237, mobile: 120 },
//     { month: "April", desktop: 73, mobile: 190 },
//     { month: "May", desktop: 209, mobile: 130 },
//     { month: "June", desktop: 214, mobile: 140 },
// ];

// const chartConfig = {
//     desktop: {
//         label: "Desktop",
//         color: "#2563eb",
//     },
//     mobile: {
//         label: "Mobile",
//         color: "#60a5fa",
//     },
// };

// export function Chartcode() {
//     return (
//         <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//             <BarChart accessibilityLayer data={chartData}>
//                 <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//                 <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//             </BarChart>
//         </ChartContainer>
//     );
// }
// components/BarChart.js
"use client";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chartcode = () => {
    const data = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
            {
                label: 'Revenue',
                data: [1500, 3000, 5000, 6000, 4500, 1000, 3500, 4000, 1500, 4500, 5500, 4000],
                // Dynamically set the bar color based on theme using CSS variable
                backgroundColor: 'var(--color-revenue)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Overview',
                color: 'var(--color-text)', // Title text color
                font: {
                    size: 16,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'var(--color-text)', // X-axis ticks color
                },
            },
            y: {
                ticks: {
                    color: 'var(--color-text)', // Y-axis ticks color
                    callback: (value) => `$${value}`,
                },
            },
        },
    };

    return (
        <div className=" p-4 rounded-lg border border-card-border">
            <Bar data={data} options={options} />
        </div>
    );
};

export default Chartcode;
