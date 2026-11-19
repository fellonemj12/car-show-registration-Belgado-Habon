import { Flame, MapPin, ShieldCheck } from 'lucide-react';

const FEATURED_SHOWCASE = [
  {
    id: 'fc-1',
    tag: 'Competitor Spotlight',
    carMakeModel: 'Toyota Supra MK4',
    plateNumber: 'ABC 1234',
    participantName: 'Juan Dela Cruz',
    registrationType: 'Competitor',
    accent: 'from-cyan-500/20 to-sky-500/5 border-cyan-400/30 text-cyan-300',
  },
  {
    id: 'fc-2',
    tag: 'VIP Showcase',
    carMakeModel: 'Porsche 911 GT3',
    plateNumber: 'VIP 2027',
    participantName: 'Maria Clara Santos',
    registrationType: 'VIP',
    accent: 'from-purple-500/20 to-indigo-500/5 border-purple-400/30 text-purple-300',
  },
  {
    id: 'fc-3',
    tag: 'Exhibitor Highlight',
    carMakeModel: 'Honda Civic Type R FK8',
    plateNumber: 'CTR 8888',
    participantName: 'Gabriela Silang',
    registrationType: 'Exhibitor',
    accent: 'from-teal-500/20 to-emerald-500/5 border-teal-400/30 text-teal-300',
  },
];

export function FeaturedCars() {
  return (
    <section className="rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-5 sm:p-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
            <Flame className="w-4 h-4" />
          </span>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">Featured Lineup Preview</h2>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              Sorsogon City Coliseum • Car Show 2027
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300/90 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full w-fit">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Entries
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FEATURED_SHOWCASE.map((car) => (
          <div
            key={car.id}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${car.accent} bg-slate-900/65 backdrop-blur-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(6,182,212,0.18)]`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                {car.tag}
              </span>
              <span className="text-xs font-mono text-slate-300 bg-black/30 px-2 py-0.5 rounded-md border border-white/10">
                {car.plateNumber}
              </span>
            </div>
            <div className="text-lg font-extrabold text-white group-hover:text-cyan-200 transition-colors">
              {car.carMakeModel}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Participant: <span className="text-slate-200 font-medium">{car.participantName}</span> • {car.registrationType}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}