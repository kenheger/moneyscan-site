import { Home, TrendingUp, MapPin, Calculator, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface BuildYourOwnHomeProps {
  onNavigate: (page: string) => void;
}

const hotSpots = [
  { region: "Charleston, SC & Savannah, GA", driver: "Port growth + tech migration" },
  { region: "Huntsville, AL", driver: "Aerospace/defense industry (recession-proof)" },
  { region: "Raleigh/Durham (Triangle), NC", driver: "Wake Forest & Apex forced equity" }
];

const wealthExurbs = [
  { region: "Southeast", markets: "Acworth/Cumming, GA & Wake Forest, NC", driver: "Tech/Finance Migration" },
  { region: "South", markets: "Boerne, TX & Round Rock, TX", driver: "Corporate HQ Relocations" },
  { region: "Midwest", markets: "Carmel, IN & Overland Park, KS", driver: "Elite School Systems" },
  { region: "Mountain", markets: "Boise, ID & Broomfield, CO", driver: "Outdoor Lifestyle + Lower Taxes" }
];

export default function BuildYourOwnHome({ onNavigate }: BuildYourOwnHomeProps) {
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
              Build Your Own Home
            </h1>
          </div>
          <p className="text-sm font-semibold text-slate-700 mb-3">
            A hidden path to wealth.
          </p>
          <p className="text-xs text-slate-600">
            With busy lives, this path is not often considered. But if you have organizational or trade skills, or real estate acumen for assessing property, this is a tremendous path to building significant wealth in a matter of years.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4">
            <h2 className="font-bold text-slate-900 mb-2">First Principle</h2>
            <p className="text-sm text-slate-700">
              <strong>Buy raw land first.</strong> Many banks or Credit Unions will provide a construction loan if you own the property outright. Your equity in the land becomes the seed capital for the build.
            </p>
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

      {/* Hot Spots */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">2026 Hot Spots</h2>
          </div>
          
          <div className="space-y-3">
            {hotSpots.map((spot, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">{spot.region}</h3>
                    <p className="text-sm text-slate-600">{spot.driver}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wealth-Building Exurbs by Region */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Wealth-Building Exurbs by Region</h2>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700">Region</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Markets</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Primary Driver</th>
                </tr>
              </thead>
              <tbody>
                {wealthExurbs.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-slate-900">{row.region}</td>
                    <td className="p-3 text-slate-600">{row.markets}</td>
                    <td className="p-3 text-slate-600">{row.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Material Costs */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Material Costs</h2>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Material costs for a traditional new home build typically run <strong>40%</strong> of total cost.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Add <strong>10% for contingencies</strong> and unforeseen items.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Only half the cost of the new home lies in materials — labor is the rest.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pro Account Savings */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-100 border-l-4 border-blue-500 rounded-r-lg p-4">
            <h2 className="font-bold text-blue-900 mb-2">Pro Account Savings</h2>
            <ul className="text-sm text-blue-800 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Get a <strong>Home Depot Pro Account</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>After $2,500 threshold, save up to <strong>15% on bulk items</strong> and <strong>20% on paints and flooring</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Submit orders for Pro Desk Bid-Room pricing for more savings.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>You (and friends) might handle interior finishes while hiring subs for the rest.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tax Benefit */}
      <section className="py-6 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-100 border-l-4 border-amber-500 rounded-r-lg p-4">
            <h2 className="font-bold text-amber-900 mb-2">Tax Benefit</h2>
            <p className="text-sm text-amber-800">
              Your new build should be your primary residence for at least two years for the full tax benefit. If you live there for 2 out of 5 years before selling, the first <strong>$250,000 (single)</strong> or <strong>$500,000 (married)</strong> of profit is typically tax-free.
            </p>
            <p className="text-xs text-amber-700 mt-2">
              This meshes perfectly with family-raising scenarios where kids are in area schools for a number of years.
            </p>
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
                <ArrowLeft className="w-4 h-4 text-emerald-600" />
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
              onClick={() => onNavigate('real-estate-traditional')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Multiple Real Estate Options</span>
              </div>
              <p className="text-xs text-slate-500">Explore real estate paths</p>
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> Educational information only, not financial or tax advice. Consult qualified professionals before making investment decisions. Tax laws subject to change.
          </p>
        </div>
      </section>
    </div>
  );
}