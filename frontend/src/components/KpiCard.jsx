export function KpiCard({ title, value, subtitle, icon: Icon, accent = 'cyan' }) {
  const accents = {
    cyan: 'from-cyan-500/20 to-blue-500/5 border-cyan-400/25 text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]',
    emerald: 'from-emerald-500/20 to-teal-500/5 border-emerald-400/25 text-emerald-300 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]',
    amber: 'from-amber-500/20 to-orange-500/5 border-amber-400/25 text-amber-300 hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]',
    indigo: 'from-indigo-500/20 to-purple-500/5 border-indigo-400/25 text-indigo-300 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]',
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${accents[accent]} bg-slate-900/65 backdrop-blur-xl border p-5 transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</p>
        {Icon && (
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="mt-3 text-2xl font-extrabold text-white tracking-tight">{value}</div>
      {subtitle && <p className="mt-1 text-xs text-slate-400">{subtitle}</p>}
    </div>
  );
}