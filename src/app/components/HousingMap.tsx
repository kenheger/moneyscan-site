import { TrendingUp, MapPin, DollarSign, Home, ArrowRight, Calculator, Building2, Shield } from 'lucide-react';

interface HousingMapProps {
  onNavigate: (page: string) => void;
}

const aiHubs = [
  {
    region: "Dallas-Fort Worth, TX",
    highlights: "6,000+ new AI jobs, 3% above nat'l COL, high fiber infra",
    housing: "Suburban options abundant, strong buyer market",
    jobs: "Enterprise tech, telecom, finance, logistics"
  },
  {
    region: "Fayetteville-Springdale, AR",
    highlights: "Leader in mid-size AI growth, corporate tech expansion",
    housing: "Highly competitive home rental & purchase prices",
    jobs: "Enterprise tech, corporate HQ"
  },
  {
    region: "Huntsville, AL",
    highlights: "Aerospace/defense pivot to AI, top job market ranking",
    housing: "Stable, reasonable housing options",
    jobs: "AI-driven defense, engineering roles"
  },
  {
    region: "Research Triangle, NC",
    highlights: "Deep institutional research pool backing AI",
    housing: "20-30 min to affordable surrounding towns",
    jobs: "Research institutions, tech, biotech"
  }
];

const generalHubs = [
  { region: "Raleigh-Durham, NC", focus: "Biotech/Research", notes: "Wave of apartment complexes = stabilized rent" },
  { region: "Dallas-Fort Worth, TX", focus: "Finance/Logistics", notes: "Corporate relocations continue" },
  { region: "Austin, TX", focus: "Diversified Tech/Manufacturing", notes: "No state income tax" },
  { region: "Nashville, TN", focus: "Healthcare/Entertainment", notes: "Rapid growth, job creation" },
  { region: "Huntsville, AL", focus: "Aerospace/Defense", notes: "Stable gov't contractor base" },
  { region: "Minneapolis-St. Paul, MN", focus: "Healthcare/Corporate HQ", notes: "Fortune 500 headquarters" },
  { region: "Columbus, OH", focus: "Logistics/Finance", notes: "Growing fintech corridor" }
];

export default function HousingMap({ onNavigate }: HousingMapProps) {
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
              Housing Maps for Work
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            Make your real estate buying move once you know – from experience – that you like the area.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            Before you buy: check the heatmap, then use this guide to decide whether to rent or buy in your target market.
          </p>
        </div>
      </section>

      {/* AI-Focused Section */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">If AI Focused: Breakout Smart-Scale Hubs</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Skip the Tier 1 strongholds (Silicon Valley, Seattle, NY). If you want your dollar to stretch further while staying directly inside a top growth market for AI, look toward these breakout mid-sized and small metros rather than the coasts:
          </p>
          
          <div className="space-y-3">
            {aiHubs.map((hub, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-slate-900">{hub.region}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">AI Focused</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{hub.highlights}</p>
                <div className="grid md:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-700">Housing:</span> <span className="text-slate-600">{hub.housing}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Key Jobs:</span> <span className="text-slate-600">{hub.jobs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price-to-Rent Ratio */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">The Price-to-Rent Ratio</h2>
          </div>
          
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 mb-4">
            <p className="text-sm text-slate-700 mb-3">
              While renting, use this formula on <span className="font-semibold">specific zip codes</span> to determine if monthly mortgage payments are equal or better to renting:
            </p>
            <div className="bg-white rounded-lg p-3 border border-emerald-200 text-center mb-3">
              <span className="text-lg font-bold text-emerald-700">Price-to-Rent Ratio = Median Annual Rent ÷ Median Home Price</span>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-200">
                <p className="font-bold text-emerald-800 mb-1">Below 15 = Strong Buy Signal</p>
                <p className="text-slate-700">Monthly mortgage is competitive with rent. Building equity.</p>
              </div>
              <div className="bg-orange-100 rounded-lg p-3 border border-orange-200">
                <p className="font-bold text-orange-800 mb-1">Above 21 = Keep Renting</p>
                <p className="text-slate-700">Rent is the better financial move for now. Wait for the market to shift.</p>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-slate-500">
            <span className="font-semibold">Sources:</span> Zillow, Redfin, Realtor.com for median rent and home prices by zip. Run the math on your target neighborhood before committing.
          </p>
        </div>
      </section>

      {/* General Hubs Section */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">If Not AI Focused: Sun-Belt, Mountain & Defense Hubs</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Waves of apartment complexes have been built to meet demand – providing a relatively stabilized rental market.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-200">
                  <th className="text-left p-3 font-semibold text-slate-700 rounded-tl-lg">Metro Area</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Focus Industry</th>
                  <th className="text-left p-3 font-semibold text-slate-700 rounded-tr-lg">Notes</th>
                </tr>
              </thead>
              <tbody>
                {generalHubs.map((hub, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-slate-900">{hub.region}</td>
                    <td className="p-3 text-slate-600">{hub.focus}</td>
                    <td className="p-3 text-slate-600 text-xs">{hub.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => onNavigate('entrepreneurship-page')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all"
            >
              <ArrowRight className="w-4 h-4" /> Next: Explore Entrepreneurship
            </button>
          </div>
        </div>
      </section>

      {/* Footer Strategy */}
      <section className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
            <h3 className="font-bold text-emerald-800 mb-2">The Housing Map Strategy</h3>
            <ol className="text-sm text-slate-700 space-y-2 list-decimal list-inside">
              <li><span className="font-semibold">Check the Job Heatmap</span> – know where your industry is growing</li>
              <li><span className="font-semibold">Visit first</span> – spend time in the city before you commit</li>
              <li><span className="font-semibold">Run the numbers</span> – calculate price-to-rent ratio for your target zip</li>
              <li><span className="font-semibold">Decide: rent or buy</span> – based on the ratio, not emotions</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}