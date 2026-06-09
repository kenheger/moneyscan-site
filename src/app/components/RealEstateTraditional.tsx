import { Wallet, ArrowRight, Home, TrendingUp, Building2, MapPin } from 'lucide-react';

interface RealEstateTraditionalProps {
  onNavigate: (page: string) => void;
}

const equityMethods = [
  { method: "HELOC", interest: "Variable", payment: "Interest-only on draw", bestFor: "Flexible capital when needed" },
  { method: "2nd Mortgage", interest: "Fixed", payment: "Fixed monthly", bestFor: "Known upfront cost" },
  { method: "Cash-Out Refi", interest: "Fixed", payment: "P&I from day 1", bestFor: "Rates dropped since orig" }
];

const plays = [
  {
    title: "Build a Rental Portfolio",
    desc: "Use equity as down payment on distressed property. Tenants pay most of mortgage. Cash-out refi to pay off HELOC or fund next property.",
    tags: ["Active", "Long-term", "Leverage"]
  },
  {
    title: "Convert Current Home to Rental",
    desc: "Turn current home into Airbnb or traditional rental. HELOC funds next primary with low down payment.",
    tags: ["Transition", "Part-time"]
  },
  {
    title: "Become Your Own Landlord",
    desc: "Multi-unit building. Live in one unit, rent others to cover loan + mortgage. Income + appreciation for future cash-out.",
    tags: ["Owner-occupied", "Cash flow"]
  },
  {
    title: "The Path Less Travelled",
    subtitle: "Building on Raw Land",
    desc: "A hidden path to wealth for the right person.",
    tags: ["Long-term", "High equity"],
    cta: "build-your-own-home"
  }
];

export default function RealEstateTraditional({ onNavigate }: RealEstateTraditionalProps) {
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
              Traditional Real Estate
            </h1>
          </div>
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Unlock your home equity for investment.
          </p>
          <p className="text-xs text-slate-600">
            Your home is likely your biggest asset. Here are three ways to put it to work — without selling.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4">
            <h2 className="font-bold text-slate-900 mb-2">First Principle</h2>
            <p className="text-sm text-slate-700">
              <strong>Your home equity is a liquidity engine.</strong> With 80%+ equity (LTV), lenders offer three main ways to unlock that cash — each with different trade-offs. The right play depends on your timeline, deal flow, and risk tolerance.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Equity Access Methods */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Wallet className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Step 1: Access Your Equity</h2>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700">Method</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Interest</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Payment</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Best For</th>
                </tr>
              </thead>
              <tbody>
                {equityMethods.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-slate-900">{row.method}</td>
                    <td className="p-3 text-center text-slate-600">{row.interest}</td>
                    <td className="p-3 text-center text-slate-600">{row.payment}</td>
                    <td className="p-3 text-center text-slate-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs text-slate-700">
              <strong>💡 Note:</strong> Closing costs + interest rate determine whether HELOC/second or cash-out refi makes more sense. Run the numbers per deal.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: The Plays */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Step 2: The Real Estate Plays</h2>
          </div>
          
          <div className="space-y-3">
            {plays.map((play, idx) => (
              <div key={idx} className={`rounded-lg p-4 border-2 ${idx === 3 ? 'border-amber-400 bg-amber-50 mt-6' : play.cta ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {idx + 1}
                      </span>
                      <h3 className="font-bold text-slate-900">{play.title}</h3>
                    </div>
                    {play.subtitle && <p className="text-xs text-amber-700 mb-1">{play.subtitle}</p>}
                    <p className="text-sm text-slate-600 mb-2">{play.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {play.tags.map((tag, tidx) => (
                        <span key={tidx} className="text-xs px-2 py-0.5 bg-white border border-slate-200 rounded-full text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {play.cta && (
                    <button 
                      onClick={() => onNavigate(play.cta)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-amber-500 text-white rounded-lg text-xs font-medium hover:bg-amber-600 transition-colors whitespace-nowrap"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">What's Next</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <button 
              onClick={() => onNavigate('real-estate-dynamics')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">← Back to AI Real Estate</span>
              </div>
              <p className="text-xs text-slate-500">Real estate investment paths</p>
            </button>
            
            <button 
              onClick={() => onNavigate('housing-map')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Housing Map</span>
              </div>
              <p className="text-xs text-slate-500">Check your market — buy vs rent</p>
            </button>

            <button 
              onClick={() => onNavigate('house-hacking')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">House Hacking</span>
              </div>
              <p className="text-xs text-slate-500">Live-free strategies</p>
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> Educational information only, not financial advice. Consult qualified professionals before making investment decisions. Real estate involves risk, including potential loss of capital.
          </p>
        </div>
      </section>
    </div>
  );
}