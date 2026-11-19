export function StatusBadge({ status }) {
  const styles = {
    Pending: 'bg-amber-500/15 text-amber-300 border-amber-400/35 shadow-[0_0_12px_rgba(245,158,11,0.18)]',
    Confirmed: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/35 shadow-[0_0_12px_rgba(6,182,212,0.22)]',
    CheckedIn: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/35 shadow-[0_0_12px_rgba(16,185,129,0.22)]',
    Cancelled: 'bg-rose-500/15 text-rose-300 border-rose-400/35 shadow-[0_0_12px_rgba(244,63,94,0.18)]',
  };

  const dotColors = {
    Pending: 'bg-amber-400',
    Confirmed: 'bg-cyan-400',
    CheckedIn: 'bg-emerald-400',
    Cancelled: 'bg-rose-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md transition-all ${
        styles[status] || 'bg-slate-500/20 text-slate-300 border-slate-400/30'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[status] || 'bg-slate-400'}`} />
      {status === 'CheckedIn' ? 'Checked In' : status}
    </span>
  );
}