"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/helpers/utils";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function OrderSummary() {
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

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        {/* Customer */}
        <div className="flex items-center gap-4 min-h-14 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-text-light dark:text-text-dark flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0 size-10">
              <span className="material-symbols-outlined">person</span>
            </div>
            <p className="text-base font-normal leading-normal flex-1 truncate">
              Customer
            </p>
          </div>
          <div className="shrink-0">
            <button className="text-sm font-medium leading-normal text-primary hover:underline">
              Add Customer
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-4 mt-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-lg bg-center bg-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="size-6 rounded bg-gray-200 dark:bg-gray-700"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="size-6 rounded bg-gray-200 dark:bg-gray-700"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="text-gray-400 hover:text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <span className="material-symbols-outlined text-xl">
                  delete
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-4"></div>

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
            {[
              { icon: "payments", label: "Cash" },
              { icon: "credit_card", label: "Card" },
              { icon: "qr_code_2", label: "QRIS" },
              { icon: "account_balance_wallet", label: "E-Wallet" },
            ].map((method) => (
              <button
                key={method.label}
                className="flex items-center justify-center gap-2 rounded-lg h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary transition-all"
              >
                <span className="material-symbols-outlined">{method.icon}</span>
                <span>{method.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-5 mt-auto">
        <button className="w-full flex items-center justify-center rounded-lg h-14 bg-primary text-black gap-2 text-lg font-bold leading-normal tracking-wide hover:brightness-90 transition-all">
          Pay Now
        </button>
      </div>
    </Card>
  );
}
