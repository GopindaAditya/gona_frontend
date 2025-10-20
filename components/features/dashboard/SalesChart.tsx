"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function SalesChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current;
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "#FFF200",
            backgroundColor: "rgba(255, 242, 0, 0.2)",
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#FFF200",
            pointBorderColor: "#000000",
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: "rgba(0,0,0,0.1)" } },
          x: { grid: { display: false } },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
      <h3 className="text-lg font-bold mb-4">Grafik Penjualan</h3>
      <div className="h-64">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
