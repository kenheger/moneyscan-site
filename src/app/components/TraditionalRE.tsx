import { Building2, TrendingUp, Home, ArrowRight, CheckCircle, DollarSign, Calculator, MapPin, Users } from 'lucide-react';

interface TraditionalREProps {
  onNavigate: (page: string) => void;
}

// Traditional plays breakdown
const traditionalPlays = [
  {
    name: "Primary Residence",
    description: "Your first home — the traditional wealth jump-off. 4-5% downpayment, live in 2 years, Section 121 exclusion up to $250K/$500K profit.",
    timeline: "5-10 years to meaningful equity",
    effort: "Low",
    barrier: "Low"
  },
  {
    name: "House Hacking",
    description: "Buy 2-4 units, live in one, rent others. Offset your mortgage entirely or go cash-flow positive from day one.",
    timeline: "Immediate cash flow",
    effort: "Medium",
    barrier: "Low"
  },
  {
    name: "BRRRR Method",
    description: "Buy distressed, rehab, rent, refinance, repeat. Scale without draining capital — recycle your downpayment endlessly.",
    timeline: "6-12 months per cycle",
    effort: "High",
    barrier: "Medium"
  },
  {
    name: "Turnkey Rentals",
    description: "Buy renovated property with tenant in place. Property management included. Passive income, hands-off.",
    timeline: "Immediate",
    effort: "Low",
    barrier: "Low"
  },
  {
    name: " wholesaling",
    description: "Find deals, contract them, assign to cash buyers. No money down, no license needed. Earn $5K-10K per deal.",
    timeline: "2-4 weeks per deal",
    effort: "High",
    barrier: "Low"
  },
  {
    name: "Commercial/ Multifamily",
    description: "Apartments, self-storage, mobile home parks. Higher cap rates, betterreturns, but bigger capital requirements.",
    timeline: "2-5 years",
    effort: "High",
    barrier: "High"
  }
];

// Rental numbers
const rentalNumbers = [
  { metric: "Typical Cash Flow", value: "$200-500/mo", note: "After expenses" },
  { metric: "Average Appreciation", value: "3-5%/year", note: "Historical norm" },
  { metric: "Tax Benefits", value: "Depreciation", note: "Write off structure" },
  { metric: "Leverage", value: "3-4x", note: "Bank financing amplifies" }
];

export default function TraditionalRE({ onNavigate }: TraditionalREProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Traditional Real Estate
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic">
            The time-tested wealth builders. No new tech required.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4">
            <h2 className="font-bold text-slate-900 mb-2">First Principle</h2>
            <p className="text-sm text-slate-700">
              <strong>Real estate is a leverage game.</strong> You don't need 100% of a property to own it — you need 5-20% down, and banksfinance the rest. That leverage amplifies your returns. Combined with tax advantages and forced appreciation via renovations, real estate has historically outperformed the S&P 500 — with more stability and less volatility.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Plays Grid */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Six Paths to Real Estate</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {traditionalPlays.map((play, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 hover:border-emerald-300 transition-all">
                <h3 className="font-bold text-slate-900 text-sm mb-1">{play.name}</h3>
                <p className="text-xs text-slate-600 mb-2">{play.description}</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">{play.timeline}</span>
                  <span className="bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-600">{play.effort} effort</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Why It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-3">
            {rentalNumbers.map((item, idx) => (
              <div key={idx} className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h4 className="font-bold text-slate-900 text-sm">{item.metric}</h4>
                <p className="text-lg font-black text-emerald-600">{item.value}</p>
                <p className="text-xs text-emerald-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link to Real Estate Dynamics */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">New Plays</h3>
                <p className="text-xs text-slate-600">Fractional RE, blockchain liquidity, tenant participation — updated for 2026.</p>
              </div>
              <button 
                onClick={() => onNavigate('real-estate-dynamics')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1"
              >
                See Emerging <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}