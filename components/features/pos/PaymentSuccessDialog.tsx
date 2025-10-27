"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/helpers/utils";

export function PaymentSuccessDialog({
  open,
  onClose,
  totalAmount,
}: {
  open: boolean;
  onClose: () => void;
  totalAmount: string;
}) {
  const [email, setEmail] = useState("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 text-center">
          <div className="mx-auto bg-green-100 dark:bg-green-900 rounded-full size-16 flex items-center justify-center">
            <span className="material-symbols-outlined text-green-500 text-4xl">
              check_circle
            </span>
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mt-4">
              Transaction Successful
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Total amount paid:{" "}
            <span className="font-medium text-text-light dark:text-white">
              {totalAmount}
            </span>
          </p>
        </div>

        {/* Receipt Options */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4">
          <div>
            <h3 className="font-semibold mb-3 text-lg">Receipt Options</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center gap-2 p-4 h-auto bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined text-3xl">
                  print
                </span>
                <span className="font-medium">Print Receipt</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center justify-center gap-2 p-4 h-auto bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined text-3xl">
                  email
                </span>
                <span className="font-medium">Email Receipt</span>
              </Button>
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="flex flex-col">
              <div className="flex items-stretch rounded-lg h-12 shadow-soft">
                <div className="text-gray-500 flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg">
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </div>
                <input
                  className="flex-1 rounded-r-lg text-text-light dark:text-white bg-gray-100 dark:bg-gray-800 border-none px-4 text-base placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50"
                  placeholder="Customer's email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="border-t border-gray-200 dark:border-gray-800 p-6">
          <Button
            className="w-full h-12 bg-primary text-black text-lg font-bold hover:brightness-90 transition-all"
            onClick={onClose}
          >
            Finish
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
