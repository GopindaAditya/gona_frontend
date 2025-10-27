"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/helpers/utils";

const menu = [
  { icon: "dashboard", label: "Dashboard", href: "/dashboard" },
  { icon: "point_of_sale", label: "Point of Sale (POS)", href: "/pos" },
  { icon: "inventory_2", label: "Inventory", href: "#" },
  { icon: "account_balance_wallet", label: "Accounting", href: "#" },
  { icon: "assessment", label: "Reports", href: "#" },
  { icon: "settings", label: "Settings", href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark p-4 transition-all duration-300 ease-in-out",
        sidebarOpen ? "w-64" : "w-20"
      )}
    >
      {/* Header / Logo */}
      <div className="flex items-center gap-3 mb-8 transition-all duration-300">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpiN6HCJrCfPRkp53h1CIMvx9o82zOXImQqfIvXRioEmU3nFemEoMhUbyfTMGUma92osuJHEOJ6vlDNF9LbORIvYPFB2G8QxbTwI_E80MBfjsffnmxABkCMiiDS7yy73WnKFxhZVGent80YDIV3K78WajGJ2Xn7kHSyvVfKcCus-HQDMLJ6EF_fGAzco3B-C-8w-N1OPVl_3AV8NjJME6AoDcloy9IHI-G4etTG3QnZ-pUtWXP-_hcFkmwgALyE_MUxMOJ8TRIwHhn")`,
          }}
        ></div>
        {sidebarOpen && (
          <div
            className={cn(
              "flex flex-col transition-opacity duration-300",
              sidebarOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <h1 className="text-lg font-bold">GONA ERP</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              for Indonesian SMEs
            </p>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2 flex-grow">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                !sidebarOpen && "justify-center",
                active
                  ? "bg-primary/20 dark:bg-primary/30 text-text-light dark:text-text-dark"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-text-light dark:text-text-dark"
              )}
            >
              <span className="material-symbols-outlined text-text-light dark:text-text-dark">
                {item.icon}
              </span>

              {/* Label — smooth fade */}
              <p
                className={cn(
                  "text-sm font-medium whitespace-nowrap transition-all duration-200",
                  sidebarOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3 hidden"
                )}
              >
                {item.label}
              </p>
            </a>
          );
        })}
      </nav>

      {/* Footer Buttons */}
      <div className="mt-auto flex flex-col gap-2">
        {/* Help Button */}
        <Button
          variant="ghost"
          icon={!sidebarOpen ? "help_outline" : undefined}
          className={cn(
            "flex items-center justify-center gap-2 rounded-lg h-10 transition-all duration-300 text-text-light dark:text-text-dark bg-primary hover:bg-primary/80",
            sidebarOpen ? "px-4 w-full" : "w-10"
          )}
          onClick={() => console.log("Help clicked")}
        >
          {sidebarOpen && "Help"}
        </Button>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center justify-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          <span
            className={cn(
              "material-symbols-outlined text-text-light dark:text-text-dark transition-transform duration-300",
              !sidebarOpen && "rotate-180"
            )}
          >
            menu_open
          </span>

          <p
            className={cn(
              "text-text-light dark:text-text-dark text-sm font-medium transition-all duration-200",
              sidebarOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3 hidden"
            )}
          >
            Collapse
          </p>
        </button>
      </div>
    </aside>
  );
}
