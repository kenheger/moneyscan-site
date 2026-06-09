import { ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { useState } from 'react';

interface CompoundInterestToolProps {
  onNavigate: (page: string) => void;
}

export default function CompoundInterestTool({ onNavigate }: CompoundInterestToolProps) {
  const [initialAmount, setInitialAmount] = useState(5000);
  const [monthlyAmount, setMonthlyAmount] = useState(300);
  const [years, setYears] = useState(15);
  const [returnRate, setReturnRate] = useState(12);

  const calculateCompound = () => {
    const months = years * 12;
    const monthlyRate = returnRate / 100 / 12;
    // Future value of lump sum + future value of monthly contributions
    const lumpSumFV = initialAmount * Math.pow(1 + monthlyRate, months);
    const monthlyFV = monthlyAmount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    return Math.round(lumpSumFV + monthlyFV);
  };

  const results = calculateCompound();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[820px] mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <button
              onClick={() => onNavigate('home')}
              className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Home -
            </button>
            <div className="flex flex-col items-end">
              <button
                onClick={() => onNavigate('budgeting-page')}
                className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Next: Budgeting →
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-4 py-4">
        {/* Title Section */}
        <section className="mb-4 text-center">
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            Grasp the Power of Compounding Over Time
          </h2>
          <p className="text-sm text-slate-600">
            Check out this 15 year college fund example, starting with $5,000 and adding $300/month consistently, earning at 12%
          </p>
        </section>

        {/* Calculator Title */}
        <section className="mb-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h1 className="text-xl font-bold text-slate-900 mb-1">
              Compound Interest Calculator
            </h1>
            <p className="text-sm text-slate-600">
              See the power of consistent investing over time
            </p>
          </div>
        </section>

        {/* Interactive Calculator */}
        <section className="mb-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="space-y-4">
              {/* Initial Amount */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Starting Amount (lump sum): <span className="text-emerald-600 font-bold">${initialAmount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="1000"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span>$0</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Monthly Amount */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Monthly Investment: <span className="text-emerald-600 font-bold">${monthlyAmount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span>$100</span>
                  <span>$2,000</span>
                </div>
              </div>

              {/* Years */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Time Period: <span className="text-emerald-600 font-bold">{years} years</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="5"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span>5 years</span>
                  <span>40 years</span>
                </div>
              </div>

              {/* Return Rate */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Annual Return Rate: <span className="text-emerald-600 font-bold">{returnRate}%</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-center">
              <div className="text-xs text-slate-600 mb-0.5">Your Investment Grows To</div>
              <div className="text-xl font-bold text-emerald-600">
                ${results.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Total contributed: ${(monthlyAmount * years * 12).toLocaleString()}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive CTA */}
        <section className="mb-4 text-center">
          <p className="text-lg font-bold text-slate-900">
            Use This Calculator For a Dynamic Readout of Your Specific Data
          </p>
        </section>

        {/* Risks Section */}
        <section className="mb-4">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-3">Risks to Consider</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• <span className="font-medium">12% is aggressive</span> — S&P 500 historical is ~10%, Nasdaq ~11%</li>
              <li>• <span className="font-medium">Volatility</span> — Bad years early can crush returns (sequence risk)</li>
              <li>• <span className="font-medium">Inflation</span> — Medical/college costs outpace CPI</li>
              <li>• Educational only. Past performance doesn't guarantee future results.</li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}