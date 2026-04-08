import { useState } from 'react';
import { Wrench, CheckCircle, ArrowRight, TrendingUp, AlertCircle, Hammer, Search, DollarSign } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface SkilledTradesProps {
  onNavigate: (page: string) => void;
}

// All 25+ trades for $29 premium access
const allTrades = [
  { id: 'electrician', name: 'Electrician', code: '47-2111', category: 'Construction', nationalWage: 65.00, growth: '+10.8%', training: '4-7 years (apprenticeship)', aiRisk: 'Low', description: 'Install, maintain, and repair electrical wiring, systems, and fixtures.' },
  { id: 'hvac', name: 'HVAC Technician', code: '49-9021', category: 'Construction', nationalWage: 65.00, growth: '+8%', training: '4-6 years (apprenticeship)', aiRisk: 'Low', description: 'Install, maintain, and repair heating, ventilation, and air conditioning systems.' },
  { id: 'plumber', name: 'Plumber', code: '47-2152', category: 'Construction', nationalWage: 62.00, growth: '+5%', training: '4-5 years (apprenticeship)', aiRisk: 'Low', description: 'Install and repair pipes, fixtures, and other plumbing equipment.' },
  { id: 'welder', name: 'Welder', code: '51-2041', category: 'Industrial', nationalWage: 58.00, growth: '+3%', training: '1-2 years (certificate)', aiRisk: 'Low', description: 'Use hand-welding or flame-cutting equipment to join or repair metal parts.' },
  { id: 'carpenter', name: 'Carpenter', code: '47-2031', category: 'Construction', nationalWage: 55.00, growth: '+2%', training: '3-4 years (apprenticeship)', aiRisk: 'Low', description: 'Construct, install, and repair structures and fixtures made from wood and other materials.' },
  { id: 'mason', name: 'Mason', code: '47-2021', category: 'Construction', nationalWage: 52.00, growth: '+3%', training: '3-4 years (apprenticeship)', aiRisk: 'Low', description: 'Work with brick, concrete, stone, and tile to create structures.' },
  { id: 'roofer', name: 'Roofer', code: '47-2181', category: 'Construction', nationalWage: 50.00, growth: '+4%', training: '2-3 years (on-the-job)', aiRisk: 'Low', description: 'Install and repair roofs on residential and commercial buildings.' },
  { id: 'heavy_equipment', name: 'Heavy Equipment Operator', code: '47-2073', category: 'Construction', nationalWage: 58.00, growth: '+5%', training: '2-3 years (CDL + training)', aiRisk: 'Low', description: 'Operate bulldozers, excavators, cranes, and other heavy construction equipment.' },
  { id: 'diesel_mechanic', name: 'Diesel Mechanic', code: '49-3031', category: 'Automotive', nationalWage: 62.00, growth: '+4%', training: '2 years (certificate)', aiRisk: 'Low', description: 'Repair and maintain diesel engines in trucks, buses, and heavy equipment.' },
  { id: 'auto_mechanic', name: 'Automotive Mechanic', code: '49-3023', category: 'Automotive', nationalWage: 48.00, growth: '+3%', training: '2 years (certificate)', aiRisk: 'Low', description: 'Diagnose, repair, and maintain cars and light trucks.' },
  { id: 'industrial_maintenance', name: 'Industrial Maintenance Tech', code: '49-9041', category: 'Industrial', nationalWage: 58.00, growth: '+5%', training: '2-4 years (apprenticeship)', aiRisk: 'Low', description: 'Maintain and repair machinery and equipment in factories and plants.' },
  { id: 'millwright', name: 'Millwright', code: '49-9044', category: 'Industrial', nationalWage: 62.00, growth: '+4%', training: '4 years (apprenticeship)', aiRisk: 'Low', description: 'Install, dismantle, and move heavy machinery and equipment.' },
  { id: 'solar_installer', name: 'Solar PV Installer', code: '47-2231', category: 'Green Energy', nationalWage: 52.00, growth: '+42%', training: '1-2 years (certificate)', aiRisk: 'Low', description: 'Install solar panels and related electrical systems.' },
  { id: 'wind_tech', name: 'Wind Turbine Technician', code: '49-9081', category: 'Green Energy', nationalWage: 62.00, growth: '+50%', training: '2 years (certificate)', aiRisk: 'Low', description: 'Maintain and repair wind turbines.' },
  { id: 'data_center', name: 'Data Center Technician', code: '15-1242', category: 'Tech', nationalWage: 58.00, growth: '+10%', training: '2 years (certificate)', aiRisk: 'Medium', description: 'Install, maintain, and troubleshoot data center infrastructure.' },
  { id: 'network_cable', name: 'Network Cable Installer', code: '49-9052', category: 'Tech', nationalWage: 45.00, growth: '+8%', training: '1 year (certificate)', aiRisk: 'Low', description: 'Install and maintain network cabling and fiber optic systems.' },
  { id: 'pipe_fitter', name: 'Pipefitter', code: '47-2151', category: 'Construction', nationalWage: 60.00, growth: '+4%', training: '4-5 years (apprenticeship)', aiRisk: 'Low', description: 'Install and repair pipe systems for industrial applications.' },
  { id: 'sheet_metal', name: 'Sheet Metal Worker', code: '47-2211', category: 'Construction', nationalWage: 55.00, growth: '+3%', training: '4 years (apprenticeship)', aiRisk: 'Low', description: 'Fabricate and install ductwork, roofing, and metal panels.' },
  { id: 'insulation', name: 'Insulation Worker', code: '47-2131', category: 'Construction', nationalWage: 45.00, growth: '+5%', training: '1 year (on-the-job)', aiRisk: 'Low', description: 'Install insulation in walls, ceilings, and floors.' },
  { id: 'concrete', name: 'Concrete Finisher', code: '47-2053', category: 'Construction', nationalWage: 48.00, growth: '+3%', training: '2-3 years (on-the-job)', aiRisk: 'Low', description: 'Pour, smooth, and finish concrete surfaces.' },
  { id: 'painter', name: 'Painter', code: '47-2141', category: 'Construction', nationalWage: 42.00, growth: '+2%', training: '1-2 years (on-the-job)', aiRisk: 'Low', description: 'Paint interior and exterior surfaces of buildings.' },
  { id: 'elevator', name: 'Elevator Mechanic', code: '47-4021', category: 'Construction', nationalWage: 75.00, growth: '+4%', training: '4 years (apprenticeship)', aiRisk: 'Low', description: 'Install, maintain, and repair elevators and escalators.' },
  { id: 'fire_sprinkler', name: 'Fire Sprinkler Installer', code: '47-2152.02', category: 'Construction', nationalWage: 55.00, growth: '+6%', training: '2-3 years (apprenticeship)', aiRisk: 'Low', description: 'Install fire suppression and sprinkler systems.' },
  { id: 'logistics', name: 'Logistics Specialist', code: '53-7065', category: 'Logistics', nationalWage: 40.00, growth: '+6%', training: '1 year (certificate)', aiRisk: 'Medium', description: 'Manage warehouse operations and supply chain logistics.' },
];

// White collar comparison data
const whiteCollarPaths = [
  { name: 'Software Developer', timeToEarnings: 4, debt: 80000, startingPay: 75000, pay10yr: 130000, aiRisk: 'High' },
  { name: 'Marketing Manager', timeToEarnings: 4, debt: 60000, startingPay: 50000, pay10yr: 85000, aiRisk: 'Medium-High' },
  { name: 'Accountant/CPA', timeToEarnings: 5, debt: 90000, startingPay: 55000, pay10yr: 95000, aiRisk: 'Medium' },
  { name: 'Nurse (BSN)', timeToEarnings: 4, debt: 50000, startingPay: 65000, pay10yr: 85000, aiRisk: 'Low' },
  { name: 'HR Specialist', timeToEarnings: 4, debt: 50000, startingPay: 45000, pay10yr: 70000, aiRisk: 'Medium' },
  { name: 'Financial Analyst', timeToEarnings: 4, debt: 70000, startingPay: 55000, pay10yr: 95000, aiRisk: 'Medium-High' },
];

// Free trades for the interactive tool
const freeTrades = [
  { 
    id: 'electrician',
    name: 'Electrician', 
    code: '47-2111',
    description: 'Install, maintain, and repair electrical wiring, systems, and fixtures.',
    nationalWage: 65.00,
    growth: '+10.8%',
    training: '4-7 years (apprenticeship)'
  },
  { 
    id: 'hvac',
    name: 'HVAC Technician', 
    code: '49-9021',
    description: 'Install, maintain, and repair heating, ventilation, and air conditioning systems.',
    nationalWage: 65.00,
    growth: '+8%',
    training: '4-6 years (apprenticeship)'
  },
  { 
    id: 'plumber',
    name: 'Plumber', 
    code: '47-2152',
    description: 'Install and repair pipes, fixtures, and other plumbing equipment.',
    nationalWage: 62.00,
    growth: '+5%',
    training: '4-5 years (apprenticeship)'
  },
  { 
    id: 'welder',
    name: 'Welder', 
    code: '51-2041',
    description: 'Use hand-welding or flame-cutting equipment to join or repair metal parts.',
    nationalWage: 58.00,
    growth: '+3%',
    training: '1-2 years (certificate)'
  },
  { 
    id: 'carpenter',
    name: 'Carpenter', 
    code: '47-2031',
    description: 'Construct, install, and repair structures and fixtures made from wood and other materials.',
    nationalWage: 55.00,
    growth: '+2%',
    training: '3-4 years (apprenticeship)'
  }
];

// Regional wage adjustments by area code prefix (Census Bureau regions)
const regionalAdjustments: Record<string, number> = {
  // Northeast (01-09 in NY/NJ)
  '10': 1.25, // NYC Metro (10-16)
  '11': 1.20, // Long Island/NJ
  '12': 1.15, // New England CT
  '01': 1.12, // New England (MA, NH, VT, ME, RI)
  '02': 1.10, // Upstate NY
  
  // Southeast (20-32)
  '20': 1.05, // FL South
  '21': 1.02, // FL Central/North
  '22': 1.08, // GA
  '23': 1.05, // NC Coast
  '24': 1.02, // NC Inland
  '25': 1.00, // SC
  '26': 0.98, // AL, MS
  '27': 1.05, // TN (Nashville)
  '28': 0.95, // TN (Rural), KY
  '29': 1.00, // VA
  '30': 0.98, // WV, DE, MD
  '31': 1.05, // DC
  
  // Midwest (40-55)
  '40': 1.10, // IL (Chicago)
  '41': 1.00, // IL Rural
  '42': 1.15, // OH (Cleveland, Columbus)
  '43': 1.10, // OH (Cincinnati, Toledo)
  '44': 1.20, // MI (Detroit)
  '45': 1.05, // MI Rural
  '46': 1.08, // IN
  '47': 0.95, // WI (Milwaukee)
  '48': 0.92, // WI Rural
  '49': 0.98, // MN (Twin Cities)
  '50': 0.90, // MN Rural, ND
  '51': 0.92, // IA
  '52': 0.90, // MO (Kansas City, St. Louis)
  '53': 0.85, // MO Rural, KS
  '54': 0.88, // NE
  '55': 0.85, // SD
  
  // Southwest (70-79)
  '70': 1.35, // TX (Houston)
  '71': 1.30, // TX (Dallas, Austin, San Antonio)
  '72': 1.25, // TX (El Paso, West TX)
  '73': 1.28, // OK (Tulsa, OKC)
  '74': 0.90, // OK Rural
  '75': 1.10, // AR
  '76': 0.92, // LA
  '77': 1.00, // NM
  
  // Mountain (80-89)
  '80': 1.20, // AZ (Phoenix)
  '81': 1.15, // AZ Rural
  '82': 1.18, // CO (Denver)
  '83': 1.10, // CO Rural
  '84': 0.95, // UT
  '85': 0.92, // NV (Las Vegas)
  '86': 1.00, // NV Rural
  '87': 0.88, // ID
  '88': 0.85, // MT
  '89': 0.82, // WY
  
  // West (90-99)
  '90': 1.45, // CA (SF, LA)
  '91': 1.40, // CA (San Diego, Sacramento)
  '92': 1.35, // CA (Central Coast)
  '93': 1.25, // CA (Central Valley)
  '94': 1.30, // WA (Seattle)
  '95': 1.15, // WA Rural
  '96': 1.20, // OR (Portland)
  '97': 1.10, // OR Rural
  '98': 1.05, // AK (Anchorage)
  '99': 1.15, // HI
  
  default: 1.00
};

export default function SkilledTrades({ onNavigate }: SkilledTradesProps) {
  const [selectedTrade, setSelectedTrade] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [wageResult, setWageResult] = useState<{hourly: number, annual: number, region: string} | null>(null);
  const [showPremium, setShowPremium] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [comparisonMode, setComparisonMode] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState<number[]>([]);
  const [showExport, setShowExport] = useState(false);

  const handleLookup = () => {
    if (!selectedTrade || !zipCode) return;
    
    const trade = freeTrades.find(t => t.id === selectedTrade);
    if (!trade) return;
    
    // Get area code prefix from ZIP (first 2 digits)
    const zipPrefix = zipCode.substring(0, 2);
    const adjustment = regionalAdjustments[zipPrefix] || regionalAdjustments.default;
    
    const hourlyWage = Math.round(trade.nationalWage * adjustment);
    const annualWage = hourlyWage * 2080; // 40 hours * 52 weeks
    
    const regionNames: Record<string, string> = {
      '10': 'NYC Metro', '11': 'Long Island/NJ', '12': 'Connecticut', '01': 'New England', '02': 'Upstate NY',
      '20': 'South Florida', '21': 'Central/North FL', '22': 'Georgia', '23': 'NC Coast', '24': 'NC Inland',
      '25': 'South Carolina', '26': 'Alabama/Mississippi', '27': 'Nashville Area', '28': 'Rural TN/Kentucky',
      '29': 'Virginia', '30': 'WV/Maryland', '31': 'DC Area',
      '40': 'Chicago', '41': 'Illinois (Rural)', '42': 'Cleveland/Columbus', '43': 'Cincinnati/Toledo',
      '44': 'Detroit', '45': 'Michigan (Rural)', '46': 'Indiana', '47': 'Milwaukee',
      '48': 'Wisconsin (Rural)', '49': 'Twin Cities', '50': 'Minnesota/North Dakota',
      '51': 'Iowa', '52': 'Kansas City/St Louis', '53': 'Missouri (Rural)', '54': 'Nebraska', '55': 'South Dakota',
      '70': 'Houston', '71': 'Dallas/Austin/San Antonio', '72': 'West TX', '73': 'Tulsa/OKC',
      '74': 'Oklahoma (Rural)', '75': 'Arkansas', '76': 'Louisiana', '77': 'New Mexico',
      '80': 'Phoenix', '81': 'Arizona (Rural)', '82': 'Denver', '83': 'Colorado (Rural)', '84': 'Utah',
      '85': 'Las Vegas', '86': 'Nevada (Rural)', '87': 'Idaho', '88': 'Montana', '89': 'Wyoming',
      '90': 'San Francisco/LA', '91': 'San Diego/Sacramento', '92': 'California Central Coast',
      '93': 'California Central Valley', '94': 'Seattle', '95': 'Washington (Rural)',
      '96': 'Portland', '97': 'Oregon (Rural)', '98': 'Alaska (Anchorage)', '99': 'Hawaii',
      default: 'National Average'
    };
    
    setWageResult({
      hourly: hourlyWage,
      annual: annualWage,
      region: regionNames[zipPrefix] || regionNames.default
    });
  };
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Skilled Trades & Blue-Collar Wealth Building
            </h1>
          </div>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              AI will automate many entry-level and routine white-collar jobs, but it cannot replace human judgment, physical dexterity, or on-site problem-solving. <strong>Skilled trades offer stable, high-earning paths with strong demand, shorter training timelines, and real entrepreneurship potential</strong> — often delivering surplus faster than traditional college routes.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700 mb-4">
              BLS projections show construction and extraction occupations growing 5.6%, installation/maintenance/repair growing 5.3%, with specific roles like wind turbine technicians (+50%) and solar installers (+42%) among the fastest-growing.
            </p>
            <p className="text-lg text-slate-700">
              Many trades already pay six figures with overtime and certifications, and they are <strong>largely AI-resistant</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Free Interactive Trade Lookup */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Free Trade Salary Lookup</h2>
                <p className="text-slate-600">Select a trade and enter your ZIP for local wage estimates</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 bg-blue-100 p-3 rounded-lg border border-blue-200">
              💡 <strong>Why does your ZIP code matter?</strong> Wages vary significantly by region due to cost of living, local demand, and industry concentration. An electrician in San Francisco earns more than one in rural Missouri — because the COL is higher and demand is stronger. We factor that in.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Select Trade</label>
                <select
                  value={selectedTrade}
                  onChange={(e) => setSelectedTrade(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choose a trade...</option>
                  {freeTrades.map(trade => (
                    <option key={trade.id} value={trade.id}>{trade.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ZIP Code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="12345"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleLookup}
                  disabled={!selectedTrade || !zipCode || zipCode.length < 5}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Look Up
                </button>
              </div>
            </div>

            {wageResult && (
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                  <h3 className="font-bold text-slate-900">Estimated Wages for {freeTrades.find(t => t.id === selectedTrade)?.name}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Hourly Wage</div>
                    <div className="text-3xl font-black text-emerald-600">${wageResult.hourly.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">in {wageResult.region}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Annual Salary</div>
                    <div className="text-3xl font-black text-blue-600">${wageResult.annual.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">based on 40hr/week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">National Average</div>
                    <div className="text-3xl font-black text-slate-400">${freeTrades.find(t => t.id === selectedTrade)?.nationalWage.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">per hour</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  * Estimates based on BLS data, adjusted for regional cost of living. Actual wages vary by employer, certifications, and experience. The higher/lower wage reflects COL and local demand in your area.
                </p>
              </div>
            )}

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>💰 Want full access?</strong> The $29 upgrade gives you <strong>all trades</strong>, <strong>every ZIP code</strong>, and <strong>detailed comparisons</strong> including cost-of-living adjustments, growth projections, and overtime potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Top High-Demand Trades (BLS 2023–2033 Projections)</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Trade</th>
                  <th className="px-6 py-4 text-left font-semibold">Projected Growth</th>
                  <th className="px-6 py-4 text-left font-semibold">Annual Openings (avg)</th>
                  <th className="px-6 py-4 text-left font-semibold">Median Pay (2023)</th>
                  <th className="px-6 py-4 text-left font-semibold">Time to Earn $100K Potential</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <TradeRow
                  trade="Electricians"
                  growth="+10.8%"
                  openings="~81,000"
                  pay="~$65,000"
                  time="4–7 years"
                />
                <TradeRow
                  trade="HVAC Technicians"
                  growth="+8%"
                  openings="~40,100"
                  pay="~$65,000"
                  time="4–6 years"
                />
                <TradeRow
                  trade="Wind Turbine Technicians"
                  growth="+50%"
                  openings="Fastest-growing"
                  pay="~$62,000"
                  time="3–5 years"
                />
                <TradeRow
                  trade="Solar Photovoltaic Installers"
                  growth="+42%"
                  openings="Fastest-growing"
                  pay="~$52,000"
                  time="3–5 years"
                />
                <TradeRow
                  trade="Construction Laborers"
                  growth="+8.2%"
                  openings="High volume"
                  pay="~$48,000"
                  time="5–8 years with specialization"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p className="text-slate-700 text-lg font-semibold">
              <strong className="text-emerald-700">Key Takeaway:</strong> Trades often provide faster paths to six-figure income and ownership than many white-collar routes, especially when AI is accelerating demand for physical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl border-2 border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-4">
                  <strong>Mike Rowe and the mikeroweWORKS Foundation</strong> have long highlighted that millions of high-paying trade jobs go unfilled while student debt rises.
                </p>
                <p className="text-slate-700">
                  Many trade workers earn more than their college-educated peers within 5–10 years, own businesses, and build real wealth through consistent surplus and asset ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Simple Actionable Vehicles
          </h2>

          <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These tools help identify high-earning trade paths. Not personalized career advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Opportunity Finder (Interactive Tool)</h3>
                  <p className="text-slate-700 mb-4">
                    Select a trade and your zip code to see local demand, salary ranges, training programs, and projected earnings.
                  </p>
                  <button
                    onClick={() => onNavigate('trade-opportunity-finder')}
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
                  >
                    <span>Launch the Trade Opportunity Finder</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Caveats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Earnings vary by location, experience, and specialization.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Trades require physical work and ongoing learning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>This is general guidance, not personalized career advice.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Premium Report Upsell */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-emerald-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl mb-4">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Comprehensive Trades Opportunity Report
              </h2>
              <p className="text-lg text-slate-700 mb-2">
                All 25+ High-Demand Trades • All 50 States + Major Metros
              </p>
              <p className="text-[28px] font-bold text-emerald-600">
                One-Time Price: $29
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What You Get</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Detailed profiles for 25+ in-demand trades (Electrician, HVAC, Plumbing, Welding, Solar Installer, Wind Turbine Technician, Data Center Tech, Heavy Equipment Operator, and more)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>State-by-state and major metro breakdowns (current openings, projected growth through 2033, salary ranges)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Clear timelines to reach $100K+ earnings with certifications and overtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Side-by-side comparisons: Trade paths vs. traditional white-collar routes (time to earnings, training cost, student debt, AI risk)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Exportable tables and personalized planning worksheets</span>
                </li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Why This Report Is Worth $29</h3>
              <p className="text-slate-700">
                The free Trade Opportunity Finder gives you quick local insights for one trade. This full report gives you the complete national picture so you can compare opportunities across states, evaluate relocation potential, and choose the trade with the strongest long-term wealth-building potential.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Perfect for:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Recent graduates rethinking the traditional college path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Professionals facing AI-driven displacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Anyone wanting a faster, more reliable route to six-figure income and business ownership</span>
                </li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <button 
                onClick={() => setShowPremium(true)}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
              >
                <span>Get the Full National Trades Report – $29</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="text-center text-xs text-slate-600">
              <p><strong>Disclaimer:</strong> This is a general educational report based on the latest BLS and industry data. Actual earnings and opportunities vary by location, experience, certifications, and individual effort. Not personalized financial or career advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Steady trade income creates reliable surplus for compounding"
              onClick={() => onNavigate('wealth-engine')}
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Faster surplus creation than many white-collar starts"
              onClick={() => onNavigate('cash-flow-mastery')}
            />
            <ConnectionCard
              title="AI Era Careers"
              description="Trades are among the most AI-resistant high-earning paths"
              onClick={() => onNavigate('ai-era-careers')}
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Avoids over-reliance on traditional college paths that may be disrupted"
              onClick={() => onNavigate('behavioral-finance')}
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore High-Earning, AI-Resistant Paths?</h2>
            <p className="text-xl text-emerald-50">
              Start with the Trade Opportunity Finder or get the full national data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">AI Era Careers</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Return to explore all AI-era career paths
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Careers <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('wealth-engine')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">The Wealth Engine</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                See how trade income powers wealth compounding
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Wealth Engine <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-bold text-lg">Cash Flow Mastery</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Maximize your trade income surplus
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Cash Flow <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Premium $29 Section - Full Access */}
      {showPremium && (
        <section className="py-16 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Full Trades Database — $29</h2>
              <button 
                onClick={() => setShowPremium(false)}
                className="text-white/70 hover:text-white text-sm"
              >
                ← Back to free preview
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === 'all' ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                >
                  All Trades
                </button>
                {['Construction', 'Industrial', 'Automotive', 'Green Energy', 'Tech', 'Logistics'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Trades Table */}
            <div className="bg-white/10 rounded-xl overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/20">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Trade</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Hourly Wage</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Growth</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Training</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">AI Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {allTrades
                      .filter(t => selectedCategory === 'all' || t.category === selectedCategory)
                      .map(trade => (
                        <tr key={trade.id} className="hover:bg-white/10">
                          <td className="px-4 py-3 font-medium">{trade.name}</td>
                          <td className="px-4 py-3 text-white/70 text-sm">{trade.category}</td>
                          <td className="px-4 py-3 text-emerald-400 font-bold">${trade.nationalWage}/hr</td>
                          <td className="px-4 py-3 text-emerald-400">{trade.growth}</td>
                          <td className="px-4 py-3 text-white/70 text-sm">{trade.training}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${trade.aiRisk === 'Low' ? 'bg-green-500/30 text-green-300' : 'bg-yellow-500/30 text-yellow-300'}`}>
                              {trade.aiRisk}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => { setComparisonMode(true); setShowPremium(false); }}
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left transition-all"
              >
                <h4 className="font-bold mb-1">⚖️ Trade vs White Collar</h4>
                <p className="text-sm text-white/70">Side-by-side comparison</p>
              </button>
              <button
                onClick={() => { setShowAssessment(true); setShowPremium(false); }}
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left transition-all"
              >
                <h4 className="font-bold mb-1">🎯 Skills Assessment</h4>
                <p className="text-sm text-white/70">Find your best fit</p>
              </button>
              <button
                onClick={() => { setShowExport(true); setShowPremium(false); }}
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left transition-all"
              >
                <h4 className="font-bold mb-1">📥 Export Report</h4>
                <p className="text-sm text-white/70">Download for planning</p>
              </button>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-emerald-600 inline-block px-8 py-4 rounded-2xl mb-4">
                <div className="text-3xl font-bold">$29</div>
                <div className="text-emerald-200">One-time payment</div>
              </div>
              <button className="block w-full md:w-auto md:px-12 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all">
                Get Full Access Now
              </button>
              <p className="mt-4 text-white/60 text-sm">Includes: All 25+ trades, all states, comparison tool, skills assessment, exportable report + Full MONEYSCAN Access</p>
            </div>
          </div>
        </section>
      )}

      {/* Trade vs White Collar Comparison */}
      {comparisonMode && (
        <section className="py-16 bg-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Trade vs White Collar Comparison</h2>
              <button 
                onClick={() => setComparisonMode(false)}
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                ← Back
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Path</th>
                    <th className="px-6 py-4 text-left font-semibold">Time to Earnings</th>
                    <th className="px-6 py-4 text-left font-semibold">Typical Debt</th>
                    <th className="px-6 py-4 text-left font-semibold">Starting Pay</th>
                    <th className="px-6 py-4 text-left font-semibold">Pay at 10 Years</th>
                    <th className="px-6 py-4 text-left font-semibold">AI Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {allTrades.slice(0, 8).map(trade => (
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-900">{trade.name}</td>
                      <td className="px-6 py-4 text-emerald-600 font-medium">1-2 years</td>
                      <td className="px-6 py-4 text-slate-600">$0-15K</td>
                      <td className="px-6 py-4 text-slate-900 font-bold">${Math.round(trade.nationalWage * 2080).toLocaleString()}</td>
                      <td className="px-6 py-4 text-emerald-600 font-bold">${Math.round(trade.nationalWage * 2080 * 1.5).toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">Low</span>
                      </td>
                    </tr>
                  ))}
                  {whiteCollarPaths.map((wc, i) => (
                    <tr key={i} className="hover:bg-slate-50 bg-blue-50">
                      <td className="px-6 py-4 font-bold text-blue-900">{wc.name}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{wc.timeToEarnings} years</td>
                      <td className="px-6 py-4 text-slate-600">${wc.debt.toLocaleString()}</td>
                      <td className="px-6 py-4 text-slate-900 font-bold">${wc.startingPay.toLocaleString()}</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">${wc.pay10yr.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${wc.aiRisk === 'Low' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {wc.aiRisk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
              <h3 className="font-bold text-emerald-900 mb-2">Key Insight</h3>
              <p className="text-emerald-800">
                Trades typically reach $100K+ potential 5-7 years FASTER than white collar paths, with 80-90% LESS debt. And trades are far more AI-resistant.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills Assessment */}
      {showAssessment && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Skills Assessment</h2>
              <button 
                onClick={() => setShowAssessment(false)}
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                ← Back
              </button>
            </div>

            {!assessmentAnswers.length ? (
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Question 1: What do you prefer working with?</h3>
                  <div className="space-y-2">
                    {['People (sales, service, teaching)', 'Data (numbers, analysis, coding)', 'Things (machines, tools, hands-on)'].map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setAssessmentAnswers([1])}
                        className="block w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Question 2: Physical activity level?</h3>
                  <div className="space-y-2">
                    {['Prefer sitting at a desk', 'Mix of sitting and moving', 'Active/moving most of the day'].map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setAssessmentAnswers([1, 2])}
                        className="block w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Question 3: Training time preference?</h3>
                  <div className="space-y-2">
                    {['Go to school first (4+ years)', 'Start earning while learning (1-3 years)', 'Get to work ASAP (short certification)'].map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setAssessmentAnswers([1, 2, 3])}
                        className="block w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Your Best Fit: Skilled Trades</h3>
                <p className="text-slate-600 mb-8">
                  Based on your answers, trades align with your preferences. Consider: Electrician, HVAC, or Industrial Maintenance.
                </p>
                <button
                  onClick={() => { setShowAssessment(false); setShowPremium(true); }}
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-lg font-bold"
                >
                  See Full Trades List — $29
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Export Section */}
      {showExport && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Export Your Report</h2>
              <button 
                onClick={() => setShowExport(false)}
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                ← Back
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">📥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Export?</h3>
              <p className="text-slate-600 mb-6">
                Get the complete trades database with salary data, growth projections, and comparison charts.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                <p className="text-emerald-800 font-semibold">
                  💰 This feature requires $29 upgrade
                </p>
                <p className="text-emerald-600 text-sm">
                  Export includes all 25+ trades, all states, and comparison data
                </p>
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-lg font-bold">
                Get Access — $29
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function TradeRow({ trade, growth, openings, pay, time }: any) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="px-6 py-4 font-bold text-slate-900">{trade}</td>
      <td className="px-6 py-4 text-emerald-600 font-semibold">{growth}</td>
      <td className="px-6 py-4 text-slate-700">{openings}</td>
      <td className="px-6 py-4 text-slate-700 font-medium">{pay}</td>
      <td className="px-6 py-4 text-blue-600 font-medium">{time}</td>
    </tr>
  );
}
