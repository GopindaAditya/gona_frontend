"use client";

import { useState } from "react";
import DataFilter from "@/components/ui/Filter";

export default function PosContent() {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const filters = ["Today", "This Week", "This Month", "Custom Range"];

  return (
    <div className="flex flex-col sm:flex-col">
      <DataFilter
        filters={filters}
        onFilterChange={(f) => setSelectedFilter(f)}
      />
      <p className="text-sm text-gray-500 mb-2 mt-2">
        Current filter: <strong>{selectedFilter}</strong>
      </p>
    </div>
  );
}
