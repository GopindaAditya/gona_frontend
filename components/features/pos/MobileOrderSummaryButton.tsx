"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function MobileOrderSummaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button - only visible on mobile */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        className="lg:hidden cursor-pointer fixed bottom-6 right-6 z-40 rounded-full p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 border-primary-light text-primary-light dark:border-primary-dark dark:text-primary-dark bg-background-light dark:bg-background-dark"
        aria-label="View order summary"
      >
        <span className="material-symbols-outlined text-2xl">
          shopping_cart
        </span>
      </Button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 backdrop-blur-sm bg-black bg-opacity-20 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal content */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden flex flex-col animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
