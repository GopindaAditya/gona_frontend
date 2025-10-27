"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

export default function AddToCartDialog({
  open,
  onClose,
  productName,
}: {
  open: boolean;
  onClose: () => void;
  productName?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm rounded-xl text-center p-0 overflow-hidden bg-white dark:bg-background-dark">
        <div className="p-8 flex flex-col items-center">
          <div className="mx-auto bg-primary/20 dark:bg-primary/30 rounded-full size-20 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-5xl"
              style={{
                fontVariationSettings:
                  "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
              }}
            >
              add_shopping_cart
            </span>
          </div>
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mt-6 text-text-light dark:text-text-dark">
              Product Added Successfully!
            </DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-400 mt-2 text-base">
              {productName
                ? `${productName} has been added to your cart.`
                : "The selected item has been added to your cart."}
            </DialogDescription>
          </DialogHeader>
        </div>
        <DialogFooter className="px-8 pb-8 pt-4">
          <Button
            onClick={onClose}
            className="w-full h-12 bg-primary text-black text-lg font-bold leading-normal tracking-wide hover:brightness-90 transition-all"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
