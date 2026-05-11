import { ArrowRight, Calculator, PiggyBank, DollarSign, TrendingDown, CreditCard, Home } from 'lucide-react';
import { useState } from 'react';

interface BudgetingPageProps {
  onNavigate: (page: string) => void;
}

export default function BudgetingPage({ onNavigate }: BudgetingPageProps) {
  const [monthlyBudget, setMonthlyBudget] = useState(500);
  const [creditCardDebt, setCreditCardDebt] = useState(3000);
  const [studentLoanDebt, setStudentLoanDebt] = useState(25000);

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
              <div className="text-xs font-bold text-emerald-600">Wealth</div>
              <div className="text-xs font-bold text-emerald-600">Builders</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-4 py-4">
        {/* Hero */}
        <section className="mb-4">
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 mb-2">
              <PiggyBank className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Wealth Foundations</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Mastering Cash Flow Starts with Knowing
            </h1>
            <p className="text-base text-slate-600 max-w-[600px] mx-auto italic">
              Mastering cash flow turns sporadic saving into a consistent, automated system that helps reduce debt and increase savings. It's a proven way to create this foundational habit: "Pay Yourself First" and create a reliable surplus of cash.
            </p>
          </div>
        </section>

        {/* Practical Budgeting Tools Table */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-600" />
            Practical Budgeting Tools
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold">Tool</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold">Best For</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold">Key Features</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold">Pricing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-3 py-2 text-xs">
                    <a href="https://www.ynab.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium text-blue-600">YNAB</a>
                  </td>
                  <td className="px-3 py-2 text-xs text-slate-700">Families</td>
                  <td className="px-3 py-2 text-xs text-slate-700">Zero-based "every dollar has a job"</td>
                  <td className="px-3 py-2 text-xs text-slate-700">$14.99/mo or $99/yr</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs">
                    <a href="https://www.monarch.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium text-blue-600">Monarch Money</a>
                  </td>
                  <td className="px-3 py-2 text-xs text-slate-700">Debt-Focused</td>
                  <td className="px-3 py-2 text-xs text-slate-700">Clean net-worth + family sharing</td>
                  <td className="px-3 py-2 text-xs text-slate-700">$14.99/mo or $99/yr</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs">
                    <a href="https://pocketguard.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium text-blue-600">PocketGuard</a>
                  </td>
                  <td className="px-3 py-2 text-xs text-slate-700">Superpower Pricing</td>
                  <td className="px-3 py-2 text-xs text-slate-700">Subscription & bill hunting</td>
                  <td className="px-3 py-2 text-xs text-slate-700">Free / Plus $7.99/mo</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs">
                    <a href="https://undebt.it/" target="_blank" rel="noopener noreferrer" className="underline font-medium text-blue-600">Undebt.it</a>
                  </td>
                  <td className="px-3 py-2 text-xs text-slate-700">Debt Elimination</td>
                  <td className="px-3 py-2 text-xs text-slate-700">Snowball/avalanche simulator</td>
                  <td className="px-3 py-2 text-xs text-slate-700">Free tier + premium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Budget Allocation Tool */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            Interactive Budget Allocation Tool
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-sm text-slate-700 mb-3">
              Decide where to put your monthly surplus. Enter your amounts:
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Monthly Surplus: <span className="text-emerald-600 font-bold">${monthlyBudget}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span>$100</span>
                  <span>$2,000</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Credit Card Balance: <span className="text-blue-600 font-bold">${creditCardDebt}</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={creditCardDebt}
                  onChange={(e) => setCreditCardDebt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span>$500</span>
                  <span>$20,000</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Student Loan Balance: <span className="text-purple-600 font-bold">${studentLoanDebt}</span>
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={studentLoanDebt}
                  onChange={(e) => setStudentLoanDebt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg accent-purple-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span>$5,000</span>
                  <span>$100,000</span>
                </div>
              </div>
            </div>

            {/* Allocation Results */}
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-xs font-bold text-emerald-800 mb-2">Recommended Allocation (${monthlyBudget}/month)</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-bold text-blue-600">{Math.round(monthlyBudget * 0.5)}</div>
                  <div className="text-slate-600">Credit Card</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600">{Math.round(monthlyBudget * 0.3)}</div>
                  <div className="text-slate-600">Student Loan</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-emerald-600">{Math.round(monthlyBudget * 0.2)}</div>
                  <div className="text-slate-600">Invest</div>
                </div>
              </div>
            </div>

            {/* Debt Payoff Estimates */}
            <div className="mt-3 p-3 bg-slate-100 border border-slate-200 rounded-lg">
              <p className="text-xs font-bold text-slate-800 mb-1">Estimated Payoff Timeline</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-600">CC at $</span><span className="font-bold text-blue-600">{Math.round(monthlyBudget * 0.5)}</span><span className="text-slate-600">/mo:</span>
                  <div className="font-medium text-slate-800">{Math.ceil(creditCardDebt / (monthlyBudget * 0.5 / 12))} months</div>
                </div>
                <div>
                  <span className="text-slate-600">Student at $</span><span className="font-bold text-purple-600">{Math.round(monthlyBudget * 0.3)}</span><span className="text-slate-600">/mo:</span>
                  <div className="font-medium text-slate-800">{Math.ceil(studentLoanDebt / (monthlyBudget * 0.3 / 12))} months</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center pb-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Explore More Wealth Paths
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </main>
    </div>
  );
}