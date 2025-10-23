"use client";

import { useState } from "react";
import Button from "../Button";

interface DataFilterProps {
  filters: string[];
  onFilterChange?: (filter: string) => void;
}

export default function Filter({ filters, onFilterChange }: DataFilterProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0] || "");

  const handleClick = (filter: string) => {
    setActiveFilter(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-1 mt-3">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "primary" : "outline"}
            className="h-10"
            onClick={() => handleClick(filter)}
          >
            {filter}
            {filter === "Custom Range" && (
              <span className="material-symbols-outlined text-base ml-1">
                expand_more
              </span>
            )}
          </Button>
        ))}

        <Button variant="outline" className="h-10" icon="tune">
          Customize
        </Button>
      </div>
    </div>
  );
}
