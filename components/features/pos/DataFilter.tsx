"use client";

import { useState } from "react";
import SearchBar from "@/components/ui/Search";
import DataFilter from "@/components/ui/Filter";

export default function PosContent() {
  const [selectedFilter, setSelectedFilter] = useState("All Categoris");
  const filters = ["All Categoris", "Food", "Drink", "Snacks"];

  return (
    <div className="flex flex-col sm:flex-col">
      <SearchBar />
      <DataFilter
        filters={filters}
        onFilterChange={(f) => setSelectedFilter(f)}
      />
      <p className="text-sm mt-2 text-gray-500 mb-2">
        Current filter: <strong>{selectedFilter}</strong>
      </p>
    </div>
  );
}
