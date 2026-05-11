import { CheckCircle, TrendingUp, Home, Wallet, Shield, Baby } from 'lucide-react';

interface TaxStrategiesProps {
  onNavigate: (page: string) => void;
}

interface Strategy {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  points: string[];
}

const strategies: Strategy[] = [
  {
    title: "The New 'Trump Accounts' (Family Savings IRAs)",
    icon: Baby,
    points: [
      "Introduced in the One Big Beautiful Bill Act of 2025, these are a significant new entry for children.",
      "The 'Kickstart': For children born between 2025 and 2028, the government provides a $1,000 seed contribution tax-free.",
      "Tax Structure: They function similarly to a Traditional IRA. Growth is tax-deferred, and contributions from employers (up to $2,500/year) are excluded from the employee's income.",
      "The Catch: Unlike a Roth IRA, withdrawals are generally taxed as ordinary income when the child takes them after age 18. They are designed as a long-term wealth floor rather than a tax-free windfall."
    ]
  },
  {
    title: "Home Ownership: Beyond the Mortgage Interest",
    icon: Home,
    points: [
      "Yes there is a cost for the home ownership deduction (maintenance, taxes, interest).",
      "But for wealth builders, the real 'optimization' isn't the deduction — it's the Section 121 Exclusion.",
      "The Strategy: You can exclude up to $250,000 ($500,000 for couples) of profit from capital gains tax when you sell your primary residence, provided you lived there for 2 of the last 5 years.",
      "Optimization: 'Live-in flipping' or building equity through improvements allows you to port large amounts of wealth from one asset to the next without the IRS taking a cut of the growth."
    ]
  },
  {
    title: "IRA/401K vs Roth IRA",
    icon: Wallet,
    points: [
      "Retirement accounts come in two varieties: tax-deferred distributions or tax-free distributions at retirement.",
      "IRA/401K: You get a tax break now (contributions reduce your taxable income), but every dollar you take out in retirement is taxed as ordinary income.",
      "Roth IRA: You pay the tax now (no immediate deduction), but the principal and all the growth come out totally tax-free after age 59½."
    ]
  },
  {
    title: "The 'Triple Tax Advantage' of HSAs",
    icon: TrendingUp,
    points: [
      "If you have a high-deductible health plan, the Health Savings Account (HSA) is often considered the best wealth-building tool available, even better than a Roth IRA.",
      "Pre-tax going in (lowers your current bill).",
      "Tax-free growth.",
      "Tax-free withdrawals for medical expenses.",
      "Post-65: It turns into a Traditional IRA (pay tax on non-medical withdrawals, but with no penalty)."
    ]
  },
  {
    title: "Trusts: Effectiveness vs. Complexity",
    icon: Shield,
    points: [
      "Trusts are not 'magic tax shields' for the middle class, but they become highly effective as wealth scales.",
      "Revocable Trusts: Mostly for probate avoidance and privacy. They don't usually save you on income tax because you still 'own' the assets.",
      "Irrevocable Trusts: These can reduce taxes by moving assets out of your taxable estate. This is vital if you expect to exceed the current estate tax exemptions (which are roughly $15M individual / $30M joint in 2026).",
      "Income Shifting: Some trusts allow you to distribute income to beneficiaries (like adult children) who are in lower tax brackets, effectively lowering the 'family' tax bill."
    ]
  }
];

export default function TaxStrategies({ onNavigate }: TaxStrategiesProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-emerald-500 text-white py-6 px-4">
        <div className="max-w-[820px] mx-auto">
          <h1 className="text-xl font-bold mb-1">Tax Optimization Strategies</h1>
          <p className="text-emerald-100 text-xs">Practical overview based on 2026 rules</p>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-4 py-4">
        <p className="text-gray-700 text-xs mb-4 leading-relaxed">
          Tax optimization is one of the highest-ROI activities for families. Their are a variety of rules to wade through (consult IRS.gov or your Tax Advisor), but layering the right accounts creates powerful, compounding advantages with relatively straightforward planning.
        </p>

        <div className="space-y-3">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Icon className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800 mb-1">{strategy.title}</h2>
                    <ul className="text-gray-600 text-xs space-y-0.5">
                      {strategy.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-1">
                          <span className="text-emerald-600 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-1">Tax Advantages for Children</h3>
          <p className="text-blue-800 text-xs mb-2">
            There are two primary paths: 529 plans and the recently legislated Trump accounts. Each serves different purposes. Both can be pursued simultaneously.
          </p>
          <ul className="text-blue-800 text-xs space-y-0.5">
            <li className="flex items-start gap-1">
              <CheckCircle className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>529 Plans:</strong> Educational funding plan that allows children to attend college, K-12, trade or technical schools and registered apprentice programs with tax-free distributions</span>
            </li>
            <li className="flex items-start gap-1">
              <CheckCircle className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Trump Accounts:</strong> In addition to the tax structure described above as similar to an IRA, these funds can be used tax-free for a downpayment on a house.</span>
            </li>
          </ul>
          <div className="mt-2 pt-2 border-t border-blue-200">
            <button onClick={() => onNavigate('tax-advantages-children')} className="text-emerald-600 font-medium text-xs hover:underline">
              Learn more: Tax Advantages for Children →
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button onClick={() => onNavigate('tax-advantages-children')} className="text-emerald-600 font-medium text-xs hover:underline">
            A "Wealth Path" for Children →
          </button>
        </div>
      </main>
    </div>
  );
}