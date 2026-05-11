import { ArrowRight, CreditCard, GraduationCap, Heart, DollarSign, TrendingDown, PiggyBank } from 'lucide-react';

interface DebtEliminationPageProps {
  onNavigate: (page: string) => void;
}

export default function DebtEliminationPage({ onNavigate }: DebtEliminationPageProps) {
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
              <TrendingDown className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Wealth Destroyer → Wealth Builder</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Debt Elimination
            </h1>
            <p className="text-base text-slate-600 max-w-[600px] mx-auto italic">
              Stop the Reverse Compound Engine
            </p>
            <p className="text-base text-slate-600 max-w-[600px] mx-auto mt-2">
              High-interest debt destroys wealth faster than most investments grow it.
            </p>
          </div>
        </section>

        {/* CAVEAT */}
        <section className="mb-4">
          <div className="bg-white border border-red-300 rounded p-3">
            <p className="text-xs">
              <span className="font-bold text-red-600">CAVEAT:</span>{' '}
              <span className="text-slate-800 font-bold italic">Consult a qualified student loan fiduciary before refinancing federal loans. Federal benefits may be lost.</span>
            </p>
          </div>
        </section>

        {/* Credit Card Debt */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-600" />
            Credit Card Debt
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-4 mb-3">
            <p className="text-sm text-slate-700 mb-2">
              At 18-22% APR, credit card debt is a wealth-destroying machine. A $3,000 balance costs $600+/year — more than most investments earn.
            </p>
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm font-bold text-blue-800 mb-1">0% Balance Transfer Offers</p>
              <p className="text-xs text-blue-700 mb-2">
                Many cards offer 0% APR for 12-21 months. Typical transfer fee is 3%. So a $3,000 balance @ 20% = $600/year interest - $90 transfer fee yields a Net: $510 savings.
              </p>
              <p className="text-xs text-blue-700">
                <a href="https://wallethub.com/best-balance-transfer-credit-cards" target="_blank" rel="noopener noreferrer" className="underline font-medium">Current Best Transfer Cards</a>
              </p>
            </div>
            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded">
              <p className="text-sm font-bold text-emerald-800 mb-1">Low Interest Credit Union Example</p>
              <p className="text-xs text-emerald-700">
                <a href="https://www.starone.org" target="_blank" rel="noopener noreferrer" className="underline font-medium">Star One Credit Union Visa Signature</a> (8.7% APR, $0 Balance Transfer fees)
              </p>
            </div>
          </div>
        </section>

        {/* Student Loan Debt */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-orange-600" />
            Student Loan Debt
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-4 mb-3">
            <p className="text-sm text-slate-700 mb-2">
              Federal student loans have new options as of July 2026. Here's what to know:
            </p>
            
            <div className="mt-3 space-y-2">
              <div className="p-2 bg-slate-100 border border-slate-200 rounded">
                <p className="text-xs font-bold text-slate-800">RAP (Repayment Assistance Plan)</p>
                <p className="text-xs text-slate-700">Payments: 1-10% of adjusted gross income. Interest waiver on unpaid portions. Forgiveness after 30 years (new borrowers).</p>
              </div>
              <div className="p-2 bg-blue-50 border border-blue-200 rounded">
                <p className="text-xs font-bold text-blue-800">Tiered Standard Plan</p>
                <p className="text-xs text-blue-700">Fixed payments over 10-25 years depending on balance. Faster payoff if you can swing it.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-slate-100 border border-slate-200 rounded">
              <p className="text-xs font-bold text-yellow-800 mb-1">Action Required</p>
              <p className="text-xs text-yellow-700">
                Log into <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer" className="underline">studentaid.gov</a> → Federal Loan Simulator to model RAP vs Tiered Standard. Many families seeing lower payments under RAP.
              </p>
            </div>

            <div className="mt-3 p-2 bg-slate-50 border border-slate-200 rounded">
              <p className="text-xs text-slate-600">
                <strong>PSLF:</strong> Public Service Loan Forgiveness still exists but restrictive. 120 payments while working for qualifying employer.
              </p>
            </div>
          </div>

          {/* Should I Refinance Flowchart */}
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-sm font-bold text-slate-900 mb-2">"Should I Refinance?" Decision Tree</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold flex-shrink-0">1</div>
                <p className="text-slate-700">Do you have private student loans at 8%+?</p>
              </div>
              <div className="flex items-start gap-2 ml-6">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold flex-shrink-0">→</div>
                <p className="text-slate-700">Yes → <strong>Consider refinancing</strong> to lower rate</p>
              </div>
              <div className="flex items-start gap-2 ml-6">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold flex-shrink-0">→</div>
                <p className="text-slate-700">No → Go to #2</p>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold flex-shrink-0">2</div>
                <p className="text-slate-700">Are you pursuing PSLF or on IDR plan?</p>
              </div>
              <div className="flex items-start gap-2 ml-6">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold flex-shrink-0">→</div>
                <p className="text-slate-700">Yes → <strong>Keep federal loans</strong> — don't refinance</p>
              </div>
              <div className="flex items-start gap-2 ml-6">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold flex-shrink-0">→</div>
                <p className="text-slate-700">No → Go to #3</p>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold flex-shrink-0">3</div>
                <p className="text-slate-700">Can you afford standard payments?</p>
              </div>
              <div className="flex items-start gap-2 ml-6">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold flex-shrink-0">→</div>
                <p className="text-slate-700">Yes → Use <strong>studentaid.gov simulator</strong> to compare plans</p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Debt */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            Medical Debt
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-sm text-slate-700 mb-2">
              <a href="https://dollarfor.org" target="_blank" rel="noopener noreferrer" className="underline font-medium">Dollar For</a> is still the gold-standard free service in 2026. Hospitals are required by law to offer financial assistance — and most people don't know it exists.
            </p>
            <div className="mt-2 p-2 bg-slate-100 border border-slate-200 rounded">
              <p className="text-xs font-bold text-slate-800">Dollar For Will Help:</p>
              <ul className="text-xs text-slate-700 list-disc list-inside mt-1">
                <li>Qualification calculations</li>
                <li>Paperwork completion</li>
                <li>Negotiation with hospitals</li>
              </ul>
              <p className="text-xs text-rose-700 mt-2">
                <a href="https://dollarfor.org" target="_blank" rel="noopener noreferrer" className="underline font-medium">Check If You Qualify at Dollar For</a> → Save
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center pb-4">
          <button
            onClick={() => onNavigate('budgeting-page')}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Explore Budgeting Applications
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </main>
    </div>
  );
}