import { Home, TrendingUp, MapPin, Calculator, CheckCircle } from 'lucide-react';

interface BuildYourOwnHomeProps {
  onNavigate: (page: string) => void;
}

export default function BuildYourOwnHome({ onNavigate }: BuildYourOwnHomeProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-emerald-500 text-white py-6 px-4">
        <div className="max-w-[820px] mx-auto">
          <h1 className="text-xl font-bold mb-1">A Hidden Path to Wealth!</h1>
          <p className="text-emerald-100 text-xs">Build Your Own Home</p>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-4 py-4">
        <p className="text-gray-700 text-xs mb-3 leading-relaxed">
          With our busy lives, this is a path not often considered. But, if you have any organizational or trade skills, or a real estate acumen for assessing property, this is a tremendous path to building significant wealth in a matter of years.
        </p>

        <div className="mb-3">
          <h2 className="text-sm font-semibold text-gray-800 mb-1">Key Considerations:</h2>
          <ul className="text-gray-600 text-xs space-y-0.5">
            <li className="flex items-start gap-1">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span><strong>Buy your raw land property first!</strong> Many banks or Credit Unions will provide you with a construction loan if you own the property.</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span>How smart you are in picking the location makes a huge difference. Scout the exurbs and the trendy locations for wealth building locations.</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span>For example, almost anyone that bought land and built a home in the Myrtle Beach, SC area in the past 10 years is doing very well indeed.</span>
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Check NAR (National Association of Realtors) for hot spots to scout property for appreciation. Also check out niche.com for best schools and family-supportive areas.</h3>
              <p className="text-gray-600 text-xs mb-1"><strong>2026 Hot Spots:</strong></p>
              <ul className="text-gray-600 text-xs space-y-0.5">
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span><strong>Charleston, SC & Savannah, GA:</strong> Rapidly expanding exurbs due to port growth and tech migration.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span><strong>Huntsville, AL:</strong> Known as a "recession-proof" exurb due to the aerospace/defense industry.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span><strong>Raleigh/Durham (The Triangle), NC:</strong> Wake Forest and Apex remain the premier examples of exurbs where "forced equity" through building is still very profitable.</span>
                </li>
              </ul>

              <p className="text-gray-600 text-xs mt-3 mb-1"><strong>Summary of "Wealth-Building" Exurbs by Region</strong></p>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-blue-400 text-white">
                    <th className="p-1 text-left font-medium">Region</th>
                    <th className="p-1 text-left font-medium">Markets</th>
                    <th className="p-1 text-left font-medium">Primary Driver</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-1">Southeast</td>
                    <td className="p-1">Acworth/Cumming, GA & Wake Forest, NC</td>
                    <td className="p-1">Tech/Finance Migration</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-1">South</td>
                    <td className="p-1">Boerne, TX & Round Rock, TX</td>
                    <td className="p-1">Corporate HQ Relocations</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-1">Midwest</td>
                    <td className="p-1">Carmel, IN & Overland Park, KS</td>
                    <td className="p-1">Elite School Systems</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-1">Mountain</td>
                    <td className="p-1">Boise, ID & Broomfield, CO</td>
                    <td className="p-1">Outdoor Lifestyle + Lower Taxes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2">
            <Calculator className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Material Costs</h3>
              <ul className="text-gray-600 text-xs space-y-0.5">
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Material costs for a traditional new home build, typically, run 40%.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Add 10% for contingencies and "unforeseen" items.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Only half the cost of the new home lies in materials.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg mb-3">
          <h3 className="text-sm font-semibold text-blue-900 mb-1">Pro Account Savings</h3>
          <ul className="text-blue-800 text-xs space-y-0.5">
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>Get yourself a <strong>Home Depot Pro Account!</strong></span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>After a $2,500 purchase threshold, you can save up to 15% on bulk items and 20% on paints and flooring.</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>You can also submit orders for Pro Desk Bid-Room pricing for more savings still.</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>You (and a few friends) might be able to tend to interior finishes (floors, paints, cabinets) and act as your own general contractor while hiring sub-contractors for the rest.</span>
            </li>
          </ul>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <h3 className="text-sm font-semibold text-amber-900 mb-1">Tax Benefit</h3>
          <p className="text-amber-800 text-xs leading-relaxed">
            Your new build house should be your primary residence for at least two years for the full tax benefit. If you live there for 2 out of the 5 years before selling, the first $250,000 (single) or $500,000 (married) of profit is typically tax-free. This meshes perfectly with family-raising scenarios where the kids are in area schools for a number of years.
          </p>
        </div>

        <div className="mt-4 text-center">
          <button onClick={() => onNavigate('tax-strategies')} className="text-emerald-600 font-medium text-xs hover:underline">
            ← Back to Tax Strategies
          </button>
        </div>
      </main>
    </div>
  );
}