import { useState, useEffect } from 'react';
import { Target, TrendingUp, AlertTriangle, ArrowRight, DollarSign, History, Lightbulb } from 'lucide-react';

type GoalType = 'retirement' | 'fire' | 'home' | '.custom';
type WealthPath = {
  id: string;
  name: string;
  expectedReturn: string;
  risk: 'low' | 'medium' | 'high';
  description: string;
};

const wealthPaths: WealthPath[] = [
  { id: 'sp500', name: 'S&P 500 Index', expectedReturn: '7-10%', risk: 'medium', description: 'Historical average, low fees' },
  { id: 'dividend', name: 'Dividend Growth', expectedReturn: '6-9%', risk: 'medium', description: 'Quality dividend payers' },
  { id: 'trades', name: 'Skilled Trades', expectedReturn: '15-25%', risk: 'low', description: 'Your skills = your returns' },
  { id: 're', name: 'Real Estate', expectedReturn: '8-15%', risk: 'medium', description: 'Cash flow + appreciation' },
  { id: 'tokenized', name: 'Tokenized RE', expectedReturn: '12-20%', risk: 'medium', description: 'Liquid real estate exposure' },
  { id: 'biz', name: 'Business/Entrepreneur', expectedReturn: '20%+', risk: 'high', description: 'Scaling your own venture' },
];

// Historical benchmarks
const HISTORICAL_S_P = 10; // historical avg
const HISTORICAL_INFLATION = 3; // avg

export default function WealthGoalCalculator() {
  const [goalType, setGoalType] = useState<GoalType>('custom');
  const [targetAmount, setTargetAmount] = useState(500000);
  const [currentAge, setCurrentAge] = useState(50);
  const [targetAge, setTargetAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [showInflation, setShowInflation] = useState(true);
  const [mode, setMode] = useState<'reverse' | 'forward'>('reverse');

  // Results
  const [yearsToGoal, setYearsToGoal] = useState(0);
  const [requiredReturn, setRequiredReturn] = useState(0);
  const [requiredMonthly, setRequiredMonthly] = useState(0);
  const [projectedFinal, setProjectedFinal] = useState(0);
  const [shortfall, setShortfall] = useState(0);
  const [gap, setGap] = useState(0);

  useEffect(() => {
    const years = targetAge - currentAge;
    setYearsToGoal(years);
    
    if (years <= 0) return;

    const months = years * 12;
    const inflationFactor = showInflation ? Math.pow(1 + HISTORICAL_INFLATION / 100, years) : 1;
    const inflationAdjustedTarget = targetAmount * inflationFactor;

    // Reverse: What return do I need?
    // FV = PV(1+r)^n + PMT * ((1+r)^n - 1) / r
    // Solving for r is complex, so we iterate
    let rate = 0;
    let found = false;
    for (rate = 0; rate < 50; rate += 0.1) {
      const r = rate / 100 / 12;
      const futureValue = currentSavings * Math.pow(1 + r, months) + 
        monthlyContribution * (Math.pow(1 + r, months) - 1) / r;
      if (futureValue >= inflationAdjustedTarget) {
        found = true;
        break;
      }
    }
    setRequiredReturn(found ? rate : 50);

    // Forward: What will I have at historical rates?
    const histRate = HISTORICAL_S_P / 100 / 12;
    const projected = currentSavings * Math.pow(1 + histRate, months) +
      monthlyContribution * (Math.pow(1 + histRate, months) - 1) / histRate;
    setProjectedFinal(Math.round(projected));

    // Reverse: How much monthly do I need?
    let neededMonthly = 0;
    if (currentSavings < inflationAdjustedTarget) {
      const targetWithoutPV = inflationAdjustedTarget - currentSavings * Math.pow(1 + histRate, months);
      if (targetWithoutPV > 0) {
        neededMonthly = targetWithoutPV * histRate / (Math.pow(1 + histRate, months) - 1);
      }
    }
    setRequiredMonthly(Math.round(neededMonthly));

    // Shortfalls
    setShortfall(Math.max(0, inflationAdjustedTarget - projected));
    setGap(requiredReturn - HISTORICAL_S_P);
  }, [targetAmount, currentAge, targetAge, currentSavings, monthlyContribution, showInflation]);

  const formatCurrency = (val: number) => val.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const formatPercent = (val: number) => val.toFixed(1) + '%';

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case 'low': return 'text-emerald-600 bg-emerald-50';
      case 'medium': return 'text-amber-600 bg-amber-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getViability = (expectedReturn: string) => {
    const [min] = expectedReturn.split('-').map(n => parseFloat(n));
    return min >= requiredReturn;
  };

  // Preset handlers
  useEffect(() => {
    if (goalType === 'retirement') {
      setTargetAmount(1000000);
      setTargetAge(65);
    } else if (goalType === 'fire') {
      setTargetAmount(1500000);
      setTargetAge(50);
    } else if (goalType === 'home') {
      setTargetAmount(150000);
      setTargetAge(currentAge + 5);
    }
  }, [goalType]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Mode Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-slate-100 p-1 rounded-lg flex">
          <button
            onClick={() => setMode('reverse')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'reverse' ? 'bg-white shadow text-emerald-700' : 'text-slate-600'}`}
          >
            <Target className="w-4 h-4 inline mr-1" />
            Goal → Return
          </button>
          <button
            onClick={() => setMode('forward')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'forward' ? 'bg-white shadow text-blue-700' : 'text-slate-600'}`}
          >
            <TrendingUp className="w-4 h-4 inline mr-1" />
            Input → Result
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* INPUT SECTION */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            {mode === 'reverse' ? 'Your Goal' : 'Your Inputs'}
          </h3>

          {/* Goal Type Presets */}
          {mode === 'reverse' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">Goal Type</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'retirement', label: '🏖️ Retirement' },
                  { id: 'fire', label: '🔥 FIRE' },
                  { id: 'home', label: '🏠 Home' },
                  { id: 'custom', label: '⚡ Custom' },
                ].map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => setGoalType(preset.id as GoalType)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${goalType === preset.id ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300' : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Target Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              {mode === 'reverse' ? 'Target Amount' : 'Monthly Investment'}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={mode === 'reverse' ? targetAmount : monthlyContribution}
                onChange={(e) => mode === 'reverse' ? setTargetAmount(Number(e.target.value)) : setMonthlyContribution(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Current Age</label>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Target Age</label>
              <input
                type="number"
                value={targetAge}
                onChange={(e) => setTargetAge(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Current Savings */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Current Savings</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Inflation Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowInflation(!showInflation)}
              className={`w-11 h-6 rounded-full transition-colors ${showInflation ? 'bg-emerald-600' : 'bg-slate-300'} relative`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${showInflation ? 'transform translate-x-5' : ''}`}></div>
            </button>
            <span className="text-sm text-slate-600">Adjust for {HISTORICAL_INFLATION}% average inflation</span>
          </div>
        </div>

        {/* RESULTS SECTION */}
        <div className="space-y-4">
          {/* Primary Result Card */}
          <div className={`rounded-xl border-2 p-6 ${mode === 'reverse' ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300' : 'bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200'}`}>
            {mode === 'reverse' ? (
              <>
                <div className="text-center mb-4">
                  <div className="text-sm font-medium text-amber-700 mb-1">Required Annual Return</div>
                  <div className="text-5xl font-bold text-amber-600">
                    {formatPercent(requiredReturn)}
                  </div>
                  <div className="text-xs text-amber-600 mt-2">
                    to reach {formatCurrency(targetAmount)} by age {targetAge}
                  </div>
                </div>

                {/* Comparison to Historical */}
                <div className="pt-4 border-t border-amber-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Historical S&P 500:</span>
                    <span className="font-bold text-slate-900">{HISTORICAL_S_P}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-slate-600">Your gap:</span>
                    <span className={`font-bold ${gap > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                      {gap > 0 ? `+${gap.toFixed(1)}% needed` : '✓ On track'}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-4">
                  <div className="text-sm font-medium text-emerald-700 mb-1">Projected Value</div>
                  <div className="text-5xl font-bold text-emerald-600">
                    {formatCurrency(projectedFinal)}
                  </div>
                  <div className="text-xs text-emerald-600 mt-2">
                    at {HISTORICAL_S_P}% annual return
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-200">
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">You Contribute</div>
                    <div className="text-lg font-bold text-slate-900">
                      {formatCurrency(monthlyContribution * yearsToGoal * 12)}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">Growth</div>
                    <div className="text-lg font-bold text-blue-600">
                      {formatCurrency(projectedFinal - monthlyContribution * yearsToGoal * 12)}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Gap Alert */}
          {mode === 'reverse' && gap > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <div className="font-medium text-red-800">Gap to Close: {formatPercent(gap)}</div>
                  <div className="text-sm text-red-700 mt-1">
                    Historical returns won't get you there. Explore wealth paths below.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wealth Paths */}
          {mode === 'reverse' && (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Paths That Could Close The Gap
              </h4>
              <div className="space-y-3">
                {wealthPaths.map(path => {
                  const isViable = getViability(path.expectedReturn);
                  return (
                    <div
                      key={path.id}
                      className={`p-3 rounded-lg border transition-all ${isViable ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200 opacity-60'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-slate-900">{path.name}</div>
                          <div className="text-xs text-slate-500">{path.description}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold ${isViable ? 'text-emerald-700' : 'text-slate-500'}`}>
                            {path.expectedReturn}% avg
                          </div>
                          <div className={`text-xs px-2 py-0.5 rounded-full ${getRiskColor(path.risk)}`}>
                            {path.risk} risk
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-emerald-700 hover:to-blue-700 transition-all">
                  <ArrowRight className="w-4 h-4" />
                  Get AI Deep Dive on These Paths
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center text-xs text-slate-500">
        <History className="w-3 h-3 inline mr-1" />
        Historical S&P 500: {HISTORICAL_S_P}% nominal, {HISTORICAL_S_P - HISTORICAL_INFLATION}% real. 
        Not investment advice. Past performance ≠ future results.
      </div>
    </div>
  );
}