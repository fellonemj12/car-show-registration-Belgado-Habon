import React from 'react';

export default function StatusBadge({ status }) {
  const styles = {
    Confirmed: "bg-blue-100 text-blue-800 border-blue-200",
    CheckedIn: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Pending: "bg-amber-100 text-amber-800 border-amber-200",
    Cancelled: "bg-rose-100 text-rose-800 border-rose-200",
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${styles[status] || "bg-gray-100 text-gray-800 border-gray-200"}`}>
      {status}
    </span>
  );
}