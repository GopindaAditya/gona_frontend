"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Search from "@/components/ui/Search";
import { PaymentSuccessDialog } from "@/components/features/pos/PaymentSuccessDialog";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function OrderSummary() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [amountReceived, setAmountReceived] = useState<string>("");

  const paymentMethods = [
    { icon: "payments", label: "Cash" },
    { icon: "credit_card", label: "Card" },
    { icon: "qr_code_2", label: "QRIS" },
    { icon: "account_balance_wallet", label: "E-Wallet" },
  ];

  const [customer, setCustomer] = useState({
    name: "Budi Santoso",
    phone: "0812-3456-7890",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqgNk8aqHxvRHXFGub0wSHGwwsTs9tKlvZUfQdxYqJtURoE5EJKMOWY2FvfKiwX60h_ZPcyce7ot435-fgrUMWdv1Wr0mZa51kZ99D_A0lnjhxji-12DoHJDmJ5NL1IGRKArKxbRea8h8ErYwcsCmPvPpo1nvqWa7bM7Vz4HaHvvVA4hCig3NtB8cHkrpeSCmtEl2k43EEvMrqGviax2gcFLTZrdYHjrFj1ECk9mBaTl54qr0ClXxSDRmIMc0EOyhUA5FAw3UlCDgP",
    membership: "Gold Member",
  });

  const [items, setItems] = useState<OrderItem[]>([
    {
      id: 1,
      name: "Espresso",
      price: 25000,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBANlRhZox1DFK65PyVLPWS834weGYTuBOaUDVbSSKV38-ppMUffUtvOI7cdkxBwO2bJxNlXC2eY43T-C_8iSAhYyg-CaliXP6LjdcaF5ecSE4byl-ENi98TZMXajzDKpg3S0E3Gmc1yRhxIqxzuI1VFyZ2XPK-G7iyM5xVi6Fbrfd14u1kx60V81fyY_suqdJDd9FMBinRuvXATdjTdagtM5AaOX9pBXnuktEOxFiPfuHPa_8G_q3tYXsLLQxxTqgRiZz6nJeyIovu",
    },
    {
      id: 2,
      name: "Croissant",
      price: 20000,
      quantity: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBANlRhZox1DFK65PyVLPWS834weGYTuBOaUDVbSSKV38-ppMUffUtvOI7cdkxBwO2bJxNlXC2eY43T-C_8iSAhYyg-CaliXP6LjdcaF5ecSE4byl-ENi98TZMXajzDKpg3S0E3Gmc1yRhxIqxzuI1VFyZ2XPK-G7iyM5xVi6Fbrfd14u1kx60V81fyY_suqdJDd9FMBinRuvXATdjTdagtM5AaOX9pBXnuktEOxFiPfuHPa_8G_q3tYXsLLQxxTqgRiZz6nJeyIovu",
    },
  ]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.1;
  const discount = 0;
  const total = subtotal + tax - discount;
  const changeDue =
    selectedMethod === "Cash" && amountReceived
      ? parseInt(amountReceived.replace(/\D/g, "") || "0") - total
      : 0;

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <Card className="lg:col-span-1 flex flex-col h-fit shadow-soft bg-white dark:bg-gray-900/50">
      {/* Header */}
      <div className="p-5 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
          Order Summary
        </h2>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* CUSTOMER SECTION */}
        <div className="flex flex-col gap-4">
          {/* Header Add Customer */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base">Customer</h3>
            <Button
              variant="outline"
              icon="add"
              className="text-sm font-medium leading-normal flex items-center gap-1 p-2 h-auto"
              onClick={() => console.log("Add Customer clicked")}
            >
              Add Customer
            </Button>
          </div>

          {/* Search Customer */}
          <div className="flex flex-col flex-1">
            <Search
              placeholder="Search by name or phone"
              className="shadow-soft"
              onSearch={(value) => console.log("Searching customer:", value)}
            />
          </div>

          {/* Selected Customer */}
          {customer && (
            <Card className="p-4 bg-primary/20 dark:bg-primary/30 flex items-start gap-4">
              {/* Customer Image */}
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 mt-1"
                style={{ backgroundImage: `url(${customer.image})` }}
              />

              {/* Customer Info */}
              <div className="flex-1">
                <p className="font-bold">{customer.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {customer.phone}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  {/* Membership Badge */}
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-black">
                    <span className="material-symbols-outlined text-sm">
                      workspace_premium
                    </span>
                    {customer.membership}
                  </span>

                  {/* History Button */}
                  <Button
                    variant="ghost"
                    icon="history"
                    className="!p-1 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                    onClick={() =>
                      console.log("View history for:", customer.name)
                    }
                  />
                </div>
              </div>

              {/* Remove Button */}
              <Button
                variant="ghost"
                icon="person_remove"
                className="!p-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
                onClick={() => console.log("Remove customer:", customer.name)}
              />
            </Card>
          )}
        </div>

        {/* Items */}
        <div className="flex flex-col gap-4 mt-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {/* Product Image */}
              <div
                className="w-14 h-14 rounded-lg bg-center bg-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Product Info */}
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="size-6 !p-0 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm font-bold"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </Button>

                <span>{item.quantity}</span>

                <Button
                  variant="ghost"
                  className="size-6 !p-0 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm font-bold"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </Button>
              </div>

              {/* Delete Button */}
              <Button
                variant="ghost"
                icon="delete"
                className="!p-1 text-gray-400 hover:text-red-500 transition-all"
                onClick={() => removeItem(item.id)}
              />
            </div>
          ))}
        </div>

        {/* Discounts & Promotions Section */}
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Discounts & Promotions</h3>

            {/* Promo Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                icon="sell"
                className="border-2 border-primary bg-primary/20 hover:bg-primary/30"
              >
                Promo Lebaran (10%)
              </Button>

              <Button
                variant="outline"
                icon="sell"
                className="border border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-primary/10"
              >
                Diskon Akhir Pekan
              </Button>
            </div>

            {/* Manual Discount Inputs */}
            <div className="flex gap-3">
              {/* Percentage Discount */}
              <div className="flex-1">
                <label className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Manual Discount"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 
              bg-background-light dark:bg-gray-700 py-2 pl-3 pr-10 
              focus:border-primary focus:ring-primary focus:ring-1 outline-none
              text-sm"
                  />
                  <span className="absolute right-3 text-gray-400">%</span>
                </label>
              </div>

              {/* Fixed Amount Discount */}
              <div className="flex-1">
                <label className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Fixed Amount"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 
              bg-background-light dark:bg-gray-700 py-2 pl-3 pr-10 
              focus:border-primary focus:ring-primary focus:ring-1 outline-none
              text-sm"
                  />
                  <span className="absolute right-3 text-gray-400">Rp</span>
                </label>
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex items-center justify-end">
              <Button
                variant="primary"
                className=" hover:bg-accent/90 font-bold px-4 py-2 text-sm"
              >
                Apply Discount
              </Button>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 "></div>

        {/* Summary */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p>Rp {subtotal.toLocaleString("id-ID")}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Tax (10%)</p>
            <p>Rp {tax.toLocaleString("id-ID")}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Discount</p>
            <p className="text-green-500">
              - Rp {discount.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="flex justify-between font-bold text-base mt-2">
            <p>Total</p>
            <p>Rp {total.toLocaleString("id-ID")}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-4"></div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-bold mb-3">Payment Method</h3>
          <div className="grid grid-cols-2 gap-3">
            {paymentMethods.map((method) => {
              const isActive = selectedMethod === method.label;
              return (
                <Button
                  key={method.label}
                  variant={isActive ? "primary" : "outline"}
                  icon={method.icon}
                  onClick={() => setSelectedMethod(method.label)}
                  className={`h-12 transition-all ${
                    isActive
                      ? "bg-primary hover:bg-primary/90"
                      : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {method.label}
                </Button>
              );
            })}
          </div>
        </div>
        {/* Jika Cash dipilih */}
        {selectedMethod === "Cash" && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-800 my-4" />

            <div className="flex flex-col gap-3">
              {/* Amount Received */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="amount-received"
                  className="text-sm font-medium"
                >
                  Amount Received
                </label>
                <div className="flex items-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <span className="px-4 text-gray-500">Rp</span>
                  <input
                    id="amount-received"
                    type="text"
                    inputMode="numeric"
                    placeholder="0"
                    value={amountReceived}
                    onChange={(e) => {
                      // Ambil hanya digit angka (hilangkan selain 0–9)
                      const rawValue = e.target.value.replace(/\D/g, "");

                      // Format angka jadi format Rupiah (tanpa simbol Rp)
                      const formattedValue = new Intl.NumberFormat(
                        "id-ID"
                      ).format(Number(rawValue));

                      setAmountReceived(formattedValue);
                    }}
                    className="w-full bg-transparent border-none focus:ring-0 text-right pr-4 font-medium outline-none"
                  />
                </div>
              </div>

              {/* Change Due */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Change Due</span>
                <span
                  className={`font-bold text-lg ${
                    changeDue < 0 ? "text-red-500" : ""
                  }`}
                >
                  {changeDue > 0
                    ? `Rp ${changeDue.toLocaleString("id-ID")}`
                    : changeDue < 0
                    ? `- Rp ${Math.abs(changeDue).toLocaleString("id-ID")}`
                    : "Rp 0"}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="p-6">
        <Button
          className="w-full h-14 text-lg font-bold bg-primary text-black hover:brightness-90"
          onClick={() => setDialogOpen(true)}
        >
          Pay Now
        </Button>

        <PaymentSuccessDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          totalAmount="Rp 71.500"
        />
      </div>
    </Card>
  );
}
