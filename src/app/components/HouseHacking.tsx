import { Home, CheckCircle, ArrowRight, TrendingUp, Users, Calculator, MapPin } from 'lucide-react';

interface HouseHackingProps {
  onNavigate: (page: string) => void;
}

const scenarios = [
  { item: "Down Payment (FHA)", traditional: "~14K (3.5%)", houseHack: "~14K (3.5%)", benefit: "Same entry" },
  { item: "Monthly Mortgage + Tax/Ins", traditional: "~2,400", houseHack: "~2,400", benefit: "—" },
  { item: "Rental Income (net)", traditional: "0", houseHack: "1,800–2,600", benefit: "Surplus" },
  { item: "Your Net Cost", traditional: "~2,400", houseHack: "0–600", benefit: "Huge savings" }
];

const vehicles = [
  {
    title: "FHA Loan on 2–4 Unit",
    desc: "Low 3.5% down. Live in one unit, rent the others. FHA requires 1-year owner occupancy.",
    example: "$380K duplex, $13.3K down, $1,400/mo rent = $800 net cost — save $1,400/mo to invest."
  },
  {
    title: "Conventional + ADU/Roommates",
    desc: "5–20% down. Single family + accessory dwelling unit or spare bedrooms.",
    example: "$350K house + ADU, rent ADU $1,200 + bedroom $700 = $100 net cost."
  }
];

export default function HouseHacking({ onNavigate }: HouseHackingProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              House Hacking
            </h1>
          </div>
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Turn your largest expense into an asset.
          </p>
          <p className="text-xs text-slate-600">
            Convert your biggest monthly cost into cash flow and equity that accelerates your Wealth Engine.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4">
            <h2 className="font-bold text-slate-900 mb-2">First Principle</h2>
            <p className="text-sm text-slate-700">
              <strong>Convert housing — your biggest expense — into a cash-flow-positive asset.</strong> Live in one unit while renting the others. Reduce or eliminate your housing cost while building equity.
            </p>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">The Math: ~$400K Property</h2>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700">Item</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Traditional</th>
                  <th className="text-center p-3 font-semibold text-slate-700">House Hack</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row, idx) => (
                  <tr key={idx} className={idx === 3 ? "bg-emerald-50" : idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-slate-900">{row.item}</td>
                    <td className="p-3 text-center text-slate-600">{row.traditional}</td>
                    <td className={`p-3 text-center ${row.houseHack.includes('Surplus') ? 'text-emerald-600 font-bold' : 'text-slate-600'}`}>{row.houseHack}</td>
                    <td className="p-3 text-center text-emerald-600 font-semibold">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-World */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Why It Works</h2>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">Cut housing costs by <strong>50–100%</strong> while building equity faster.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">Works best in markets with <strong>strong rental demand</strong>.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600"><strong>FHA supports</strong> owner-occupied 2–4 units with low down payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Home className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Actionable Paths</h2>
          </div>
          
          <div className="space-y-3">
            {vehicles.map((v, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-slate-900">{v.title}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-2">{v.desc}</p>
                <div className="bg-emerald-50 rounded p-2">
                  <p className="text-xs text-slate-700"><strong>Example:</strong> {v.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Resources */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Key Resources</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <h3 className="font-semibold text-slate-900">Location is Everything</h3>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                How smart you are in picking the location makes a huge difference. Know the neighborhood. Use key resources for research.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.neighborhoodscout.com" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition-colors">Neighborhood Scout →</a>
                <a href="https://www.city-data.com" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition-colors">City Data →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <h3 className="font-semibold text-slate-900">Know The Schools</h3>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                This is one of the key indicators for family quality-of-life location decisions. Use key resources for research.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.greatschools.org" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition-colors">Great Schools →</a>
                <a href="https://www.niche.com" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition-colors">Niche →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> Educational information only, not financial advice. Consult qualified professionals. Past performance not a guarantee.
          </p>
        </div>
      </section>
    </div>
  );
}