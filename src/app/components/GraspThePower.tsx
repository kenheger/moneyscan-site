import { useEffect, useRef } from 'react';
import { TrendingUp, Calculator, GraduationCap, Home, Car, Users, Plane, AlertTriangle, DollarSign } from 'lucide-react';

interface GraspThePowerProps {
  onNavigate: (page: string) => void;
}

export default function GraspThePower({ onNavigate }: GraspThePowerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Base case parameters
  const initialAmount = 5000;
  const monthlyContribution = 300;
  const annualRate = 0.12;
  const years = 15;
  const months = years * 12;
  const monthlyRate = annualRate / 12;

  // Calculate compound interest
  const balances = [];
  let currentBalance = initialAmount;
  for (let month = 1; month <= months; month++) {
    currentBalance = currentBalance * (1 + monthlyRate) + monthlyContribution;
    balances.push(currentBalance);
  }
  const finalBalance = balances[balances.length - 1];
  const totalInvested = initialAmount + (monthlyContribution * months);
  const interestEarned = finalBalance - totalInvested;

  // Year-by-year breakdown
  const yearlyData = [];
  for (let year = 1; year <= years; year++) {
    const monthIndex = (year * 12) - 1;
    const balance = balances[monthIndex];
    const invested = initialAmount + (monthlyContribution * year * 12);
    yearlyData.push({
      year,
      balance: Math.round(balance),
      invested: Math.round(invested),
      growth: balance - invested
    });
  }

  // Draw chart
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const maxBalance = Math.max(...balances);
    
    ctx.clearRect(0, 0, width, height);
    
    // Y-axis labels (dollar amounts on left)
    ctx.fillStyle = '#64748b';
    ctx.font = '10px system-ui';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height - 2 * padding) * (i / 5);
      const value = maxBalance * (5 - i) / 5;
      ctx.fillText('$' + Math.round(value / 1000) + 'K', padding - 5, y + 3);
    }
    
    // X-axis labels (years at bottom)
    ctx.textAlign = 'center';
    for (let i = 0; i <= 5; i++) {
      const x = padding + ((width - 2 * padding) * i) / 5;
      const year = Math.round(years * i / 5);
      ctx.fillText('Yr ' + year, x, height - padding + 15);
    }
    
    // Grid lines (vertical)
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height - 2 * padding) * (i / 5);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }
    // Grid lines (horizontal)
    for (let i = 0; i <= 5; i++) {
      const x = padding + ((width - 2 * padding) * i) / 5;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
      ctx.stroke();
    }
    
    // Axis lines
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Area gradient
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    balances.forEach((balance, i) => {
      const x = padding + ((width - 2 * padding) * i) / (months - 1);
      const y = height - padding - (balance / maxBalance) * (height - 2 * padding);
      ctx.lineTo(x, y);
    });
    ctx.lineTo(width - padding, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Contributions line
    ctx.beginPath();
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    const contribY = height - padding - (totalInvested / maxBalance) * (height - 2 * padding);
    ctx.moveTo(padding, contribY);
    ctx.lineTo(width - padding, contribY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Balance curve
    ctx.beginPath();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    balances.forEach((balance, i) => {
      const x = padding + ((width - 2 * padding) * i) / (months - 1);
      const y = height - padding - (balance / maxBalance) * (height - 2 * padding);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Final dot
    const finalX = width - padding;
    const finalY = height - padding - (finalBalance / maxBalance) * (height - 2 * padding);
    ctx.beginPath();
    ctx.arc(finalX, finalY, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#10b981';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    
  }, [balances, totalInvested, finalBalance, monthlyRate]);

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Lifestyle calculations
  const collegeCostPerYear = 25000;
  const yearsOfCollege = 4;
  const collegeFund = yearsOfCollege * collegeCostPerYear;
  const homeDownPayment = finalBalance;
  const carPrice = 45000;
  const yearsOfIncome = finalBalance / 1500; // $1500/month lifestyle

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-800">MONEYSCAN</span>
          </button>
          <span className="text-xs text-slate-500">Grasp the Power</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Hero */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Grasp the Power</h1>
          <p className="text-base text-slate-600">
            Build a <span className="text-emerald-600 font-semibold">15-year college fund</span> with $300/month + $5,000 start @ 12%
          </p>
        </div>

        {/* Big Result */}
        <div className="bg-blue-500 text-white rounded-xl p-6 mb-6 text-center">
          <p className="text-sm opacity-80 mb-1">After 15 years, your investment grows to</p>
          <p className="text-4xl font-bold mb-2">{formatMoney(finalBalance)}</p>
          <div className="flex justify-center gap-6 text-sm">
            <div><span className="opacity-70">Invested:</span> <span className="font-semibold">{formatMoney(totalInvested)}</span></div>
            <div><span className="opacity-70">Interest:</span> <span className="font-semibold text-yellow-300">{formatMoney(interestEarned)}</span></div>
            <div><span className="opacity-70">Multiple:</span> <span className="font-semibold">{(finalBalance / totalInvested).toFixed(1)}x</span></div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6">
          <canvas ref={canvasRef} width={600} height={250} className="w-full" />
          <div className="flex justify-center gap-6 mt-3 text-xs">
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-emerald-500"></span> Growing Balance</span>
            <span className="flex items-center gap-1 text-slate-500"><span className="w-3 h-0.5 border border-dashed border-red-500"></span> Your Contributions</span>
          </div>
        </div>

        {/* Year-by-Year Breakdown */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Year by Year</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold">Year</th>
                  <th className="text-right px-3 py-2 font-semibold">Your Balance</th>
                  <th className="text-right px-3 py-2 font-semibold">Interest Earned</th>
                  <th className="text-right px-3 py-2 font-semibold text-emerald-600">Total Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {yearlyData.filter((_, i) => i < 5 || i === 14).map((row) => (
                  <tr key={row.year} className={row.year === 15 ? 'bg-emerald-50 font-semibold' : ''}>
                    <td className="px-3 py-2">Year {row.year}</td>
                    <td className="px-3 py-2 text-right">{formatMoney(row.balance)}</td>
                    <td className="px-3 py-2 text-right text-emerald-600">{formatMoney(row.growth)}</td>
                    <td className="px-3 py-2 text-right text-emerald-600">{((row.balance / row.invested - 1) * 100).toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">* Year 1: 6%, Year 5: 47%, Year 10: 128% growth</p>
        </div>

        {/* What This Enables */}
        <div className="bg-slate-50 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">What This Enables For Your Family</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800">College Fund</p>
                <p className="text-sm text-slate-600">Full 4-year state university ({formatMoney(collegeFund)})</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Home className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800">First Home</p>
                <p className="text-sm text-slate-600">20% down on {formatMoney(homeDownPayment * 5)} home</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800">New Car</p>
                <p className="text-sm text-slate-600">Cash for reliable SUV/Truck</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Plane className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800">Family Vacation</p>
                <p className="text-sm text-slate-600">Yearly dream vacation</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4% Rule */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-slate-800 mb-2">4% Safe Withdrawal Rule</h3>
          <p className="text-sm text-slate-600 mb-2">
            Financial planners use 4% annual withdrawal = historically 30+ year retirement fund.
          </p>
          <div className="flex gap-6 text-sm">
            <div><span className="text-slate-500">Annual:</span> <span className="font-bold text-amber-700">{formatMoney(finalBalance * 0.04)}</span></div>
            <div><span className="text-slate-500">Monthly:</span> <span className="font-bold text-amber-700">{formatMoney(finalBalance * 0.04 / 12)}</span></div>
          </div>
        </div>

        {/* Risks */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Risks to Consider
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• <span className="font-medium">12% is aggressive</span> — S&P 500 historical is ~10%, Nasdaq ~11%</li>
            <li>• <span className="font-medium">Volatility</span> — Bad years early can crush returns (sequence risk)</li>
            <li>• <span className="font-medium">Inflation</span> — Medical/college costs outpace CPI</li>
            <li>• <span className="font-medium">Time</span> — 15 years is a long horizon</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-slate-100 rounded-xl p-4 text-center">
          <p className="text-sm text-slate-600 mb-3">Run your own scenario</p>
          <button 
            onClick={() => onNavigate('compound-interest-tool')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            Open Calculator
          </button>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          Educational only. Past performance doesn't guarantee future results.
        </p>
      </main>
    </div>
  );
}