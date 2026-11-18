import React from 'react';

export default function PaymentBadge({ paymentStatus }) {
  const styles = {
    Paid: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Partial: "bg-amber-100 text-amber-800 border-amber-200",
    Unpaid: "bg-rose-100 text-rose-800 border-rose-200",
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${styles[paymentStatus] || "bg-gray-100 text-gray-800 border-gray-200"}`}>
      {paymentStatus}
    </span>
  );
}