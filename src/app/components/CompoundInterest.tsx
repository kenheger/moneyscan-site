import { ArrowRight, TrendingUp, Award, DollarSign, Clock } from 'lucide-react';

interface CompoundInterestProps {
  onNavigate: (page: string) => void;
}

export default function CompoundInterest({ onNavigate }: CompoundInterestProps) {
  // Historical S&P 500 data points
  const sp500History = [
    { year: 2010, value: 1257 },
    { year: 2011, value: 1257 },
    { year: 2012, value: 1426 },
    { year: 2013, value: 1848 },
    { year: 2014, value: 2058 },
    { year: 2015, value: 2043 },
    { year: 2016, value: 2238 },
    { year: 2017, value: 2673 },
    { year: 2018, value: 2506 },
    { year: 2019, value: 3230 },
    { year: 2020, value: 3756 },
    { year: 2021, value: 4766 },
    { year: 2022, value: 3839 },
    { year: 2023, value: 4769 },
    { year: 2024, value: 5881 },
  ];

  const maxValue = Math.max(...sp500History.map(d => d.value));
  const minValue = Math.min(...sp500History.map(d => d.value));
  const range = maxValue - minValue;

  // QQQ historical
  const qqqHistory = [
    { year: 2010, value: 50.3 },
    { year: 2011, value: 48.6 },
    { year: 2012, value: 57.1 },
    { year: 2013, value: 74.3 },
    { year: 2014, value: 88.4 },
    { year: 2015, value: 85.5 },
    { year: 2016, value: 98.1 },
    { year: 2017, value: 121.4 },
    { year: 2018, value: 115.3 },
    { year: 2019, value: 153.4 },
    { year: 2020, value: 186.9 },
    { year: 2021, value: 237.2 },
    { year: 2022, value: 181.9 },
    { year: 2023, value: 239.5 },
    { year: 2024, value: 297.8 },
  ];

  const qqqMax = Math.max(...qqqHistory.map(d => d.value));
  const qqqMin = Math.min(...qqqHistory.map(d => d.value));
  const qqqRange = qqqMax - qqqMin;

  // VTI historical
  const vtiHistory = [
    { year: 2010, value: 55.2 },
    { year: 2011, value: 53.1 },
    { year: 2012, value: 62.9 },
    { year: 2013, value: 80.4 },
    { year: 2014, value: 92.7 },
    { year: 2015, value: 91.8 },
    { year: 2016, value: 101.5 },
    { year: 2017, value: 122.1 },
    { year: 2018, value: 115.9 },
    { year: 2019, value: 143.6 },
    { year: 2020, value: 171.9 },
    { year: 2021, value: 206.8 },
    { year: 2022, value: 170.8 },
    { year: 2023, value: 208.4 },
    { year: 2024, value: 252.1 },
  ];

  const vtiMax = Math.max(...vtiHistory.map(d => d.value));
  const vtiMin = Math.min(...vtiHistory.map(d => d.value));
  const vtiRange = vtiMax - vtiMin;

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
              ← MONEYSCAN
            </button>
            <div className="flex flex-col items-end">
              <div className="text-xs font-bold text-emerald-600">First</div>
              <div className="text-xs font-bold text-emerald-600">Principle</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-4 py-4">
        {/* Hero Section */}
        <section className="mb-4">
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 mb-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Foundational Principle</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Compound Interest
            </h1>
            <p className="text-base text-slate-600 max-w-[600px] mx-auto italic">
              The Math That Works
            </p>
            <p className="text-base text-slate-600 max-w-[600px] mx-auto mt-2">
              Any potential wealth-building path should be evaluated against this benchmark.
            </p>
          </div>

          {/* The Math Card */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-center">The 10% Benchmark</h2>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-slate-50 rounded p-3 text-center">
                <div className="text-xl font-bold text-emerald-600 mb-1">10%</div>
                <div className="text-xs text-slate-500">Historical S&P 500 Annual Return</div>
              </div>
              <div className="bg-slate-50 rounded p-3 text-center">
                <div className="text-xl font-bold text-blue-600 mb-1">2x</div>
                <div className="text-xs text-slate-500">Every ~7.2 Years</div>
              </div>
              <div className="bg-slate-50 rounded p-3 text-center">
                <div className="text-xl font-bold text-purple-600 mb-1">10x</div>
                <div className="text-xs text-slate-500">Over 24 Years</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center">
              $10,000 invested at 10% annually becomes $100,000 in ~24 years — without adding a single dollar.
            </p>
          </div>
        </section>

        {/* S&P 500 Chart */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            S&P 500: 15-Year History
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-base font-semibold text-slate-900">S&P 500 Index</div>
                <div className="text-xs text-slate-500">2010-2024</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-emerald-600">+369%</div>
                <div className="text-xs text-slate-500">Total return</div>
              </div>
            </div>
            
            <div className="relative h-[140px] w-full">
              <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                {[0, 1, 2, 3].map(i => (
                  <line key={i} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="#e2e8f0" strokeWidth="1" />
                ))}
                <defs>
                  <linearGradient id="sp500Gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={`M 0 ${140 - ((sp500History[0].value - minValue) / range) * 120} ${sp500History.map((d, i) => `L ${(i / (sp500History.length - 1)) * 400} ${140 - ((d.value - minValue) / range) * 120}`).join(' ')} L 400 140 L 0 140 Z`} fill="url(#sp500Gradient)" />
                <path d={`M 0 ${140 - ((sp500History[0].value - minValue) / range) * 120} ${sp500History.map((d, i) => `L ${(i / (sp500History.length - 1)) * 400} ${140 - ((d.value - minValue) / range) * 120}`).join(' ')}`} fill="none" stroke="#10b981" strokeWidth="2.5" />
              </svg>
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-slate-400">
                <span>'10</span>
                <span>'14</span>
                <span>'19</span>
                <span>'24</span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span className="text-slate-600">CAGR: ~11.1% annual</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700">Beats 90% of active funds</span>
              </div>
            </div>
          </div>
        </section>

        {/* Other Vehicles */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3">
            Vehicles That Meet the 10%+ Benchmark
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-slate-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-base font-semibold text-slate-900">QQQ</div>
                <div className="text-sm font-medium text-blue-600">+493%</div>
              </div>
              <div className="text-xs text-slate-500 mb-2">Invesco Nasdaq-100 ETF</div>
              <div className="relative h-[50px] w-full mb-2">
                <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <path d={`M 0 ${50 - ((qqqHistory[0].value - qqqMin) / qqqRange) * 40} ${qqqHistory.map((d, i) => `L ${(i / (qqqHistory.length - 1)) * 200} ${50 - ((d.value - qqqMin) / qqqRange) * 40}`).join(' ')}`} fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="text-xs">
                <span className="text-blue-600 font-medium">15-year: +493%</span>
                <span className="text-slate-500"> · Tech exposure</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-base font-semibold text-slate-900">VTI</div>
                <div className="text-sm font-medium text-purple-600">+357%</div>
              </div>
              <div className="text-xs text-slate-500 mb-2">Vanguard Total Stock Market ETF</div>
              <div className="relative h-[50px] w-full mb-2">
                <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <path d={`M 0 ${50 - ((vtiHistory[0].value - vtiMin) / vtiRange) * 40} ${vtiHistory.map((d, i) => `L ${(i / (vtiHistory.length - 1)) * 200} ${50 - ((d.value - vtiMin) / vtiRange) * 40}`).join(' ')}`} fill="none" stroke="#a855f7" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="text-xs">
                <span className="text-purple-600 font-medium">15-year: +357%</span>
                <span className="text-slate-500"> · Total US market</span>
              </div>
            </div>
          </div>

          {/* CAVEAT - Single Line */}
          <div className="mt-3 bg-white border border-red-300 rounded p-3">
            <p className="text-xs">
              <span className="font-bold text-red-600">CAVEAT:</span>{' '}
              <span className="text-slate-800 font-bold italic">Past performance does not guarantee future results. This is an educational tool not personal advice.</span>
            </p>
          </div>
        </section>

        {/* Warren Buffett Quote */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-yellow-500" />
            Warren Buffett's Choice
          </h2>
          
          <div className="bg-white border border-yellow-300 rounded-lg p-4">
            <blockquote className="text-sm text-slate-700 mb-3 italic">
              "I recommend the S&P 500. It's very hard to beat. The money my nieces and nephews will inherit 
              will be invested mostly in Vanguard — the S&P 500 that tracks the market..."
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-500">
                — Warren Buffett, Berkshire Hathaway Annual Meeting, 2024
              </div>
              <div className="flex gap-1">
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">VTI</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">VT</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>Why VTI or VT?</strong> Buffett specifically cited low fees and consistent market returns. 
                VTI tracks the entire US stock market. VT adds global diversification — US + international stocks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-4">
          <button
            onClick={() => onNavigate('compound-interest-tool')}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Explore Compound Interest
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </main>
    </div>
  );
}