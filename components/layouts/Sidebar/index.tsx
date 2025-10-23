"use client";

import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/helpers/utils";

const menu = [
  { icon: "dashboard", label: "Dashboard", href: "dashboard" },
  { icon: "point_of_sale", label: "Point of Sale (POS)", href: "#" },
  { icon: "inventory_2", label: "Inventory", href: "#" },
  { icon: "account_balance_wallet", label: "Accounting", href: "#" },
  { icon: "assessment", label: "Reports", href: "#" },
  { icon: "settings", label: "Settings", href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card-light dark:bg-card-dark flex flex-col p-4 border-r border-border-light dark:border-border-dark">
      {/* Header / Logo Section */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpiN6HCJrCfPRkp53h1CIMvx9o82zOXImQqfIvXRioEmU3nFemEoMhUbyfTMGUma92osuJHEOJ6vlDNF9LbORIvYPFB2G8QxbTwI_E80MBfjsffnmxABkCMiiDS7yy73WnKFxhZVGent80YDIV3K78WajGJ2Xn7kHSyvVfKcCus-HQDMLJ6EF_fGAzco3B-C-8w-N1OPVl_3AV8NjJME6AoDcloy9IHI-G4etTG3QnZ-pUtWXP-_hcFkmwgALyE_MUxMOJ8TRIwHhn")`,
          }}
        ></div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">GONA ERP</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            for Indonesian SMEs
          </p>
        </div>
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
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
                active
                  ? "bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary-foreground"
                  : "hover:bg-[#FFF200] dark:hover:bg-[#FFF200] text-text-light dark:text-text-dark"
              )}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p className="text-sm font-medium">{item.label}</p>
            </a>
          );
        })}
      </nav>

      {/* Footer Button */}
      <Button className="mt-4" variant="primary">
        Help
      </Button>
    </aside>
  );
}
