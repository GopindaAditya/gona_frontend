type Props = {
  title: string;
  value: string;
  trend: string;
  trendType: "up" | "down" | "neutral";
};

export default function StatCard({ title, value, trend, trendType }: Props) {
  const trendColor =
    trendType === "up"
      ? "text-success"
      : trendType === "down"
      ? "text-danger"
      : "text-gray-500 dark:text-gray-400";

  const icon =
    trendType === "up"
      ? "arrow_upward"
      : trendType === "down"
      ? "arrow_downward"
      : "arrow_forward";

  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
      <p className="text-base font-medium text-gray-500 dark:text-gray-400">
        {title}
      </p>
      <p className="tracking-tight text-3xl font-bold">{value}</p>
      <div className={`flex items-center ${trendColor}`}>
        <span className="material-symbols-outlined text-lg">{icon}</span>
        <p className="text-base font-medium ml-1">{trend}</p>
      </div>
    </div>
  );
}
