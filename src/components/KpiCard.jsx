// src/components/KpiCard.jsx
import React from 'react';

export default function KpiCard({ title, value, icon: Icon, colorTheme = "blue" }) {
  const iconThemes = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  };

  return (
    <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
      {/* Subtle background glow on hover */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p>
          <h3 className="text-2xl font-black mt-1.5 text-white tracking-tight">{value}</h3>
        </div>
        {Icon && (
          <div className={`p-3 rounded-xl border ${iconThemes[colorTheme] || iconThemes.blue} shadow-inner`}>
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
}