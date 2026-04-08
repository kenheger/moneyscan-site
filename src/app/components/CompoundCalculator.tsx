import { useState } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function CompoundCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState(300);
  const [years, setYears] = useState(30);
  const [returnRate, setReturnRate] = useState(10);
  const [showInflationAdjusted, setShowInflationAdjusted] = useState(false);

  const calculateCompound = () => {
    const months = years * 12;
    const monthlyRate = returnRate / 100 / 12;

    // Future value of series formula
    const futureValue = monthlyAmount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;

    // Inflation adjusted (assume 3% inflation)
    const realRate = ((1 + returnRate/100) / (1 + 0.03)) - 1;
    const realMonthlyRate = realRate / 12;
    const inflationAdjusted = monthlyAmount * (Math.pow(1 + realMonthlyRate, months) - 1) / realMonthlyRate;

    return {
      nominal: Math.round(futureValue),
      real: Math.round(inflationAdjusted),
      contributed: monthlyAmount * months
    };
  };

  const results = calculateCompound();

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-bold text-slate-900">Compound Interest Calculator</h3>
        </div>
        <p className="text-sm text-slate-600">
          See the power of consistent investing over time
        </p>
      </div>

      <div className="space-y-6">
        {/* Monthly Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Monthly Investment: ${monthlyAmount.toLocaleString()}
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
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>$100</span>
            <span>$2,000</span>
          </div>
        </div>

        {/* Years */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Time Period: {years} years
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
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>5 years</span>
            <span>40 years</span>
          </div>
        </div>

        {/* Return Rate */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Expected Annual Return: {returnRate}%
          </label>
          <input
            type="range"
            min="4"
            max="12"
            step="1"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>4%</span>
            <span>12%</span>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowInflationAdjusted(!showInflationAdjusted)}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <div className={`w-11 h-6 rounded-full transition-colors ${showInflationAdjusted ? 'bg-emerald-600' : 'bg-slate-300'} relative`}>
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${showInflationAdjusted ? 'transform translate-x-5' : ''}`}></div>
            </div>
            <span className="font-medium">Show inflation-adjusted (~3%)</span>
          </button>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 border-2 border-emerald-200">
          <div className="text-center mb-4">
            <div className="text-sm font-medium text-slate-600 mb-1">Future Value</div>
            <div className="text-4xl font-bold text-emerald-600">
              ${(showInflationAdjusted ? results.real : results.nominal).toLocaleString()}
            </div>
            {showInflationAdjusted && (
              <div className="text-xs text-slate-500 mt-1">
                (in today's dollars)
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-emerald-200">
            <div>
              <div className="text-xs text-slate-600 mb-1">You Contribute</div>
              <div className="text-lg font-bold text-slate-900">
                ${results.contributed.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-600 mb-1">Growth from Compounding</div>
              <div className="text-lg font-bold text-blue-600">
                ${((showInflationAdjusted ? results.real : results.nominal) - results.contributed).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 text-center">
          Historical S&P 500 average: ~10% nominal / ~7% real (after inflation)
        </div>
      </div>
    </div>
  );
}
