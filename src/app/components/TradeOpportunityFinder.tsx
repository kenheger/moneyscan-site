import { useState } from 'react';
import { regionNames } from './regionNames';
import { zipLookup } from './zipData';

const stateWages: Record<string, number> = {
  'AL': 0.98, 'AK': 1.05, 'AZ': 1.15, 'CA': 1.35, 'CO': 1.15,
  'CT': 1.12, 'FL': 1.05, 'GA': 1.05, 'IL': 1.08, 'IN': 1.02,
  'KY': 0.98, 'LA': 0.98, 'MA': 1.12, 'MD': 1.10, 'ME': 0.98,
  'MI': 1.02, 'MN': 1.00, 'MO': 0.98, 'MS': 0.95, 'MT': 0.92,
  'NC': 1.02, 'ND': 0.95, 'NE': 0.98, 'NH': 1.05, 'NJ': 1.10,
  'NM': 0.98, 'NV': 1.10, 'NY': 1.15, 'OH': 1.02, 'OK': 0.98,
  'OR': 1.08, 'PA': 1.05, 'RI': 1.05, 'SC': 0.98, 'SD': 0.92,
  'TN': 0.98, 'TX': 1.15, 'UT': 1.05, 'VA': 1.05, 'VT': 1.00,
  'WA': 1.15, 'WI': 0.98, 'WV': 0.95, 'WY': 0.95, 'DC': 1.18
};
import { Wrench, Search, MapPin, TrendingUp, Download, ArrowRight, CheckCircle, AlertCircle, DollarSign, Clock, Shield } from 'lucide-react';

interface TradeOpportunityFinderProps {
  onNavigate: (page: string) => void;
  stripeCheckoutUrl?: string;
}

// Sample trade data - in production this would come from a database
const TRADES_DATA = [
  {
    id: 'electrician',
    name: 'Electrician',
    category: 'Electrical',
    description: 'Install, maintain, and repair electrical systems',
    nationalOpenings: 81000,
    projectedGrowth: 10.8,
    medianPay: 65000,
    percentile75Pay: 95000,
    timeToSixFigures: '4–7 years',
    aiResistance: 'High',
    aiRationale: 'Requires physical presence, complex problem-solving, and adherence to safety codes',
    trainingPaths: [
      { name: 'Union Apprenticeships (IBEW)', link: 'https://www.ibew.org' },
      { name: 'Independent Electrical Contractors', link: 'https://www.iecnetwork.org' },
      { name: 'Community College Programs', link: '#' },
      { name: 'Trade Schools', link: '#' }
    ]
  },
  {
    id: 'hvac',
    name: 'HVAC Technician',
    category: 'HVAC/Plumbing',
    description: 'Install and repair heating, ventilation, and air conditioning systems',
    nationalOpenings: 40100,
    projectedGrowth: 8.0,
    medianPay: 57300,
    percentile75Pay: 82900,
    timeToSixFigures: '4–6 years',
    aiResistance: 'High',
    aiRationale: 'Physical installation and repair work with site-specific troubleshooting',
    trainingPaths: [
      { name: 'HVAC Excellence Programs', link: '#' },
      { name: 'North American Technician Excellence (NATE)', link: '#' },
      { name: 'Trade Schools & Vocational Programs', link: '#' },
      { name: 'Manufacturer-Specific Training', link: '#' }
    ]
  },
  {
    id: 'wind-turbine',
    name: 'Wind Turbine Technician',
    category: 'Renewable Energy',
    description: 'Install, inspect, and maintain wind turbines',
    nationalOpenings: 2000,
    projectedGrowth: 50.0,
    medianPay: 62000,
    percentile75Pay: 81000,
    timeToSixFigures: '3–5 years',
    aiResistance: 'High',
    aiRationale: 'Requires physical climbing, on-site diagnostics, and hands-on repairs at remote locations',
    trainingPaths: [
      { name: 'Midwest Renewable Energy Association', link: '#' },
      { name: 'Community College Wind Energy Programs', link: '#' },
      { name: 'Technical Training Centers', link: '#' }
    ]
  },
  {
    id: 'solar-installer',
    name: 'Solar Photovoltaic Installer',
    category: 'Renewable Energy',
    description: 'Assemble, install, and maintain solar panel systems',
    nationalOpenings: 3700,
    projectedGrowth: 42.0,
    medianPay: 52000,
    percentile75Pay: 68000,
    timeToSixFigures: '3–5 years',
    aiResistance: 'High',
    aiRationale: 'Physical rooftop installation and custom system design for each property',
    trainingPaths: [
      { name: 'Solar Energy International (SEI)', link: '#' },
      { name: 'North American Board of Certified Energy Practitioners (NABCEP)', link: '#' },
      { name: 'Community College Solar Programs', link: '#' }
    ]
  },
  {
    id: 'plumber',
    name: 'Plumber',
    category: 'HVAC/Plumbing',
    description: 'Install and repair piping systems and fixtures',
    nationalOpenings: 49000,
    projectedGrowth: 6.0,
    medianPay: 61000,
    percentile75Pay: 92000,
    timeToSixFigures: '5–7 years',
    aiResistance: 'High',
    aiRationale: 'Physical work in varied environments with unique site challenges',
    trainingPaths: [
      { name: 'United Association (UA) Plumbers & Pipefitters', link: '#' },
      { name: 'Plumbing-Heating-Cooling Contractors Association', link: '#' },
      { name: 'Trade Schools & Apprenticeships', link: '#' }
    ]
  },
  {
    id: 'welder',
    name: 'Welder',
    category: 'Construction',
    description: 'Join metal parts using specialized equipment',
    nationalOpenings: 47600,
    projectedGrowth: 2.0,
    medianPay: 48000,
    percentile75Pay: 65000,
    timeToSixFigures: '5–8 years',
    aiResistance: 'Medium',
    aiRationale: 'Some automation exists but custom work still requires human skill',
    trainingPaths: [
      { name: 'American Welding Society (AWS)', link: '#' },
      { name: 'Community College Welding Programs', link: '#' },
      { name: 'Union Apprenticeships', link: '#' }
    ]
  }
];

export default function TradeOpportunityFinder({ onNavigate, stripeCheckoutUrl }: TradeOpportunityFinderProps) {
  const [selectedTrade, setSelectedTrade] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (selectedTrade && zipCode.length === 5) {
      setShowResults(true);
    }
  };

  const getLocation = (z: string) => zipLookup[z] || zipLookup[z.substring(0, 3)] || regionNames[z.substring(0, 2)] || 'National';
  const getAdjustment = (z: string) => stateWages[regionNames[z.substring(0, 2)]] || 1.00;
  const location = zipCode ? getLocation(zipCode) : '';
  const adjustment = zipCode ? getAdjustment(zipCode) : 1.00;

  const selectedTradeData = TRADES_DATA.find(t => t.id === selectedTrade);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-emerald-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Trade Opportunity Finder
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic">
            Select a trade and zip to see local demand, salary, training, and earnings.
          </p>
        </div>
      </section>

      {/* Input Section */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-100">
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Trade</label>
                <select
                  value={selectedTrade}
                  onChange={(e) => { setSelectedTrade(e.target.value); setShowResults(false); }}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select...</option>
                  <optgroup label="Electrical">
                    <option value="electrician">Electrician</option>
                  </optgroup>
                  <optgroup label="HVAC/Plumbing">
                    <option value="hvac">HVAC Technician</option>
                    <option value="plumber">Plumber</option>
                  </optgroup>
                  <optgroup label="Renewable Energy">
                    <option value="wind-turbine">Wind Turbine Technician</option>
                    <option value="solar-installer">Solar PV Installer</option>
                  </optgroup>
                  <optgroup label="Construction">
                    <option value="welder">Welder</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => { setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5)); setShowResults(false); }}
                  placeholder="12345"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  maxLength={5}
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  disabled={!selectedTrade || zipCode.length !== 5}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-1"
                >
                  <Search className="w-4 h-4" />
                  Find
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && selectedTradeData && (
        <>
          {/* Overview Card */}
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-emerald-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedTradeData.name}</h2>
                    <p className="text-lg text-slate-600">{selectedTradeData.description}</p>
                    <p className="text-sm text-slate-500 mt-2">
                      Results for <span className="font-bold text-emerald-600">{location}</span> <span className="text-xs text-slate-500">({adjustment > 1 ? '+' : ''}{Math.round((adjustment - 1) * 100)}% wage)</span>
                    </p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-700">Projected Growth</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-600">+{selectedTradeData.projectedGrowth}%</p>
                    <p className="text-xs text-slate-600">Through 2033</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-slate-700">Median Pay</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">${(Math.round(selectedTradeData.medianPay * adjustment) / 1000).toFixed(0)}K</p>
                    <p className="text-xs text-slate-600">National average</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold text-slate-700">Time to $100K</span>
                    </div>
                    <p className="text-lg font-bold text-purple-600">{selectedTradeData.timeToSixFigures}</p>
                    <p className="text-xs text-slate-600">With certs + OT</p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-semibold text-slate-700">AI Resistance</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-600">{selectedTradeData.aiResistance}</p>
                    <p className="text-xs text-slate-600">Automation risk</p>
                  </div>
                </div>

                {/* Detailed Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-3">Demand & Earnings</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex justify-between">
                        <span>Annual Job Openings (National):</span>
                        <span className="font-bold">{selectedTradeData.nationalOpenings.toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Median Annual Pay:</span>
                        <span className="font-bold">${Math.round(selectedTradeData.medianPay * adjustment).toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Top 25% Earn:</span>
                        <span className="font-bold text-emerald-600">${Math.round(selectedTradeData.percentile75Pay * adjustment).toLocaleString()}+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Projected Growth (2023–2033):</span>
                        <span className="font-bold text-emerald-600">+{selectedTradeData.projectedGrowth}%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-3">AI Resistance</h3>
                    <div className="flex items-start gap-3 mb-3">
                      <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-emerald-600 mb-1">{selectedTradeData.aiResistance} Resistance</p>
                        <p className="text-sm text-slate-700">{selectedTradeData.aiRationale}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Training Paths */}
          <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Training & Certification Paths</h2>
              <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
                <p className="text-slate-700 mb-4">
                  <strong>Getting started:</strong> Most trades require 2–4 years of apprenticeship or vocational training. Here are recommended programs:
                </p>
                <ul className="space-y-3">
                  {selectedTradeData.trainingPaths.map((path, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>{path.name}</strong>
                        {path.link !== '#' && (
                          <a href={path.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-emerald-600 hover:text-emerald-700 underline text-sm">
                            Learn more →
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison with White-Collar Path */}
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Side-by-Side Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Factor</th>
                      <th className="px-6 py-4 text-left font-semibold">{selectedTradeData.name}</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical 4-Year College Path</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900">Training Time</td>
                      <td className="px-6 py-4 text-slate-700">2–4 years (apprenticeship)</td>
                      <td className="px-6 py-4 text-slate-700">4 years (bachelor's degree)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-900">Training Cost</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">$5K–$15K (often earn while learning)</td>
                      <td className="px-6 py-4 text-red-600 font-semibold">$40K–$200K+ (student debt)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900">Time to $100K Income</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">{selectedTradeData.timeToSixFigures}</td>
                      <td className="px-6 py-4 text-slate-700">7–12 years (varies widely)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-900">AI Risk</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">{selectedTradeData.aiResistance}</td>
                      <td className="px-6 py-4 text-amber-600 font-semibold">Medium to High (varies by field)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900">Business Ownership Potential</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">High (start contracting business)</td>
                      <td className="px-6 py-4 text-slate-700">Medium (depends on field)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Export & Premium CTA */}
          <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-6">
                
              </div>
            </div>
          </section>

          {/* Try Another Trade */}
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <button
                onClick={() => {
                  setShowResults(false);
                  setSelectedTrade('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Try Another Trade</span>
              </button>
            </div>
          </section>

          {/* $29 Upsell - After free tool is used */}
          <section className="py-8 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Full Trade Database Access</h4>
                    <p className="text-slate-700">Get all 50+ trades, every ZIP code, state-by-state breakdowns, and exportable reports.</p>
                  </div>
                  <button 
                    onClick={() => stripeCheckoutUrl ? window.open(stripeCheckoutUrl, '_blank') : alert('Payment processing coming soon!')}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg whitespace-nowrap"
                  >
                    Get Full Access — $29
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Landing Page */}
          <section className="py-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <a 
                href="#landing-page"
                className="text-slate-600 hover:text-emerald-600 underline text-sm"
              >
                ← Back to Landing Page
              </a>
            </div>
          </section>
        </>
      )}

      {/* Data Source Note */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Data Sources:</strong> Bureau of Labor Statistics (BLS) 2023–2033 Employment Projections. National averages shown; local conditions vary.
            </p>
          </div>
        </div>
      </section>

      {/* Full Trades Database CTA - Always Visible */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-amber-50 border border-amber-300 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Full Trade Database</h4>
                <p className="text-xs text-slate-600">All 50+ trades, every ZIP, state breakdowns, exportable reports.</p>
              </div>
              <button 
                onClick={() => stripeCheckoutUrl ? window.open(stripeCheckoutUrl, '_blank') : alert('Coming soon!')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded text-xs font-bold whitespace-nowrap"
              >
                Get Access — $29
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
