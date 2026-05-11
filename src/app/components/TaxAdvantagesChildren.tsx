import { CheckCircle, TrendingUp, GraduationCap, PiggyBank } from 'lucide-react';

interface TaxAdvantagesChildrenProps {
  onNavigate: (page: string) => void;
}

export default function TaxAdvantagesChildren({ onNavigate }: TaxAdvantagesChildrenProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-emerald-500 text-white py-6 px-4">
        <div className="max-w-[820px] mx-auto">
          <h1 className="text-xl font-bold mb-1">A Tax-Advantaged "Wealth Path" for Children</h1>
          <p className="text-emerald-100 text-xs">Setting up the next generation for financial flexibility</p>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-4 py-4">
        <p className="text-gray-700 text-xs mb-4 leading-relaxed">
          There is a path for families with newborns and young children to set them up on their own "wealth path" before they reach age 18. This is particularly relevant in the AI Era — as there is uncertainty about the impact AI will have on traditional or expected employment careers.
        </p>

        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800 mb-1">Two Paths To Consider</h2>
          <p className="text-gray-600 text-xs">Both paths can be pursued simultaneously to provide maximum flexibility for children.</p>
        </div>

        {/* 529 Plans */}
        <div className="border border-gray-200 rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">529 Plans</h3>
              <ul className="text-gray-600 text-xs space-y-0.5">
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>For qualified education expenses (college, K-12, Trade or Technical Schools, and registered apprenticeships — combining school and work)</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Funds can be contributed by a variety of sources — family members, friends, employers, gifts, etc.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Any growth in invested funds is tax-deferred. Any money spent for educational purposes is distributed tax-free.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>If money is not spent on education, then $35,000 can be contributed to a Roth IRA (if the account is 15 years old)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trump Accounts */}
        <div className="border border-gray-200 rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2">
            <PiggyBank className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Trump Accounts</h3>
              <ul className="text-gray-600 text-xs space-y-0.5">
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>For children born between 2025 and 2028, the government provides a $1,000 seed contribution tax-free.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Accounts can also be established for children born before 2025 or after 2018 and the investment growth on all contributions is tax-deferred, like an IRA</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>$5,000 per year can be contributed — from parents, friends, others, etc. — and that money does not have to come from earned income as it does with an IRA</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>At age 18, the child owns the account — but funds must remain in the account to avoid tax penalty, but it can be used, tax-free, for a house downpayment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg mb-3">
          <p className="text-amber-800 text-xs leading-relaxed">
            <strong>Note:</strong> This is educational not personal advice. Rules are alway being reviewed and finalized by the IRS/Treasury (e.g., exact forms, custodians, and some tax details), so check IRS.gov, TrumpAccounts.gov, or a tax advisor for your situation. State 529 benefits also vary.
          </p>
        </div>

        {/* The Full-Stack Portfolio */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-1">The Full-Stack Portfolio at Age 18</h3>
          <p className="text-blue-800 text-xs mb-1 leading-relaxed">
            Remember, one of the real possibilities for a new employment path in the AI Era is starting a business of their own. There are three tax-advantaged plans that, in addition to school or retirement, can be sources of capital to start a business — even with tax penalties.
          </p>
          <ul className="text-blue-800 text-xs space-y-0.5">
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span><strong>529 Plan:</strong> Capital accumulated for specialized applications that could become a business: AI Certifications, Coding Specialization, Advanced Trade skills, even Apprenticeships where you work (and get paid) and attend school together.</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span><strong>Trump Account:</strong> The child owns the account at age 18. Any growth in this account represents potential liquid "Startup Capital." Even with a tax penalty such a liquid source of startup capital could make all the difference in starting a business.</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span><strong>Minor Roth IRA:</strong> A child can have his own ROTH IRA provided there is "earned income" that can be contributed. This could be a lawn moving service in the summer, tutoring, a family sponsored service, and alike. Growth is tax-deferred and, again, this is a liquid source of capital for a potential startup.</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 text-center">
          <button onClick={() => onNavigate('tax-strategies')} className="text-emerald-600 font-medium text-xs hover:underline">
            ← Back to Tax Strategies
          </button>
        </div>
      </main>
    </div>
  );
}