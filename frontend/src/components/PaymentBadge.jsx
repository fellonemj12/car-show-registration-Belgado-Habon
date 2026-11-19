export function PaymentBadge({ status }) {
  const styles = {
    Unpaid: 'bg-red-500/15 text-red-300 border-red-400/35 shadow-[0_0_14px_rgba(239,68,68,0.2)]',
    Partial: 'bg-amber-500/15 text-amber-300 border-amber-400/35 shadow-[0_0_14px_rgba(245,158,11,0.2)]',
    Paid: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/35 shadow-[0_0_14px_rgba(16,185,129,0.22)]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide border backdrop-blur-md transition-all ${
        styles[status] || 'bg-slate-500/20 text-slate-300 border-slate-400/30'
      }`}
    >
      {status}
    </span>
  );
}