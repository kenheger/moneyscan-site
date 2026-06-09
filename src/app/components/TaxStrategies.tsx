import { Scale, TrendingUp, Home, Wallet, Baby, Shield, ArrowRight } from 'lucide-react';

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
      "For children born 2025-2028: $1,000 gov seed. Grows tax-deferred like a Traditional IRA.",
      "Employer contributions up to $2,500/year excluded from income.",
      "Withdrawals taxed as ordinary income after age 18. Long-term wealth floor, not tax-free windfall."
    ]
  },
  {
    title: "Home Ownership: Section 121 Exclusion",
    icon: Home,
    points: [
      "Live in your primary residence 2 of the last 5 years = up to $250K/$500K profit exclusion (single/couple).",
      "The 'deduction' isn't the mortgage interest — it's escaping capital gains tax entirely.",
      "No renting required. Just live there 2 years."
    ]
  },
  {
    title: "HSA: Triple Tax Advantage",
    icon: Wallet,
    points: [
      "Tax-free on the way in, grows tax-free, comes out tax-free for medical.",
      "After 65, non-medical withdrawals taxed as ordinary income (like Traditional IRA).",
      "Strategy: Save receipts. Let it invest. Reimburse yourself anytime, tax-free."
    ]
  },
  {
    title: "529 Plans: The Roth Rollover",
    icon: TrendingUp,
    points: [
      "SECURE 2.0: Roll up to $35K from old 529 to kid's Roth — if 529 is 15+ years old.",
      "Kid needs earned income (mowing, tutoring, family biz work). Up to $3,500/year or their Earnings — whichever is less.",
      "Massive opportunity if started early: Kid gets a head start, tax-free growth for decades."
    ]
  },
  {
    title: "Trusts: When They Actually Help",
    icon: Shield,
    points: [
      "Revocable: Probate avoidance only. Doesn't save income tax.",
      "Irrevocable: Moves assets out of taxable estate. Vital if wealth exceeds ~$15M/$30M.",
      "Income shifting to lower-bracket family members works."
    ]
  },
  {
    title: "Backdoor Roth IRA",
    icon: Shield,
    points: [
      "Earn too much for a Roth? Contribute to traditional IRA, then convert. Legal loophole that's been tested.",
      "2026 limit: $7,000/yr. Anyone can do it — no employer needed.",
      "Watch out: Pro-rata rule if you have other traditional IRA balances."
    ]
  },
  {
    title: "HSA as Stealth Retirement Account",
    icon: Wallet,
    points: [
      "Health Savings Account = triple tax advantage. Invest the money instead of spending it.",
      "2016: $4,300 individual / $8,550 family. After 65, non-medical withdrawals taxed as ordinary income.",
      "Strategy: Save receipts. Let it invest. Reimburse yourself anytime, tax-free."
    ]
  },
  {
    title: "Mega Backdoor Roth",
    icon: TrendingUp,
    points: [
      "401k allows after-tax contributions. Convert to Roth before growth. Some employers allow this — ask HR.",
      "Potential: $30K+/yr extra to Roth. Huge for high earners maxing out 401k.",
      "Only works with employer plan that allows after-tax + in-service withdrawals/rollovers."
    ]
  }
];

export default function TaxStrategies({ onNavigate }: TaxStrategiesProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header - compact */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">
              Tax Optimization Strategies
            </h1>
          </div>
          <p className="text-base text-slate-600 italic">
            Keep more of what you earn.
          </p>
        </div>
      </section>

      {/* Intro - compact */}
      <section className="py-4 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded-r-lg">
            <p className="text-sm text-slate-700">
              Tax optimization is high-ROI. The right account layers create compounding advantages with straightforward planning.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies - compact grid */}
      <section className="py-4 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-3">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-bold text-slate-900 mb-2">{strategy.title}</h2>
                      <ul className="space-y-1 text-sm text-slate-600">
                        {strategy.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2">
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
        </div>
      </section>

      {/* Kids link - prominent */}
      <section className="py-4 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <button 
            onClick={() => onNavigate('tax-advantages-children')}
            className="inline-flex items-center gap-2 px-4 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <span>Tax-Advantaged Wealth Path for Children</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-3 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> Educational only. Consult a tax pro. Rules change — verify at IRS.gov.
          </p>
        </div>
      </section>
    </div>
  );
}