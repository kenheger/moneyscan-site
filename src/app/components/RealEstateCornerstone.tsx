import { Building2, ArrowRight, CheckCircle, Home, Users, FileText, Wrench } from 'lucide-react';

interface RealEstateCornerstoneProps {
  onNavigate: (page: string) => void;
}

export default function RealEstateCornerstone({ onNavigate }: RealEstateCornerstoneProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 via-sky-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Real Estate — Cornerstone of Wealth Building
            </h1>
          </div>
          <p className="text-xl text-red-600 italic mb-3">
            One of the most powerful financial leverage tools available — The FHA 203(k) Rehabilitation Mortgage
          </p>
          <p className="text-sm text-slate-700">
            FHA 203(k) provides homebuyers and homeowners an opportunity to build immediate equity. It allows you to purchase or refinance a property plus the cost of its renovations, rolling everything into a single, long-term, fixed-rate mortgage.
          </p>
        </div>
      </section>

      {/* Primary Advantages */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Here are the primary advantages of utilizing an FHA 203(k) loan:
          </h2>
          
          {/* Advantage 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Manufacturing Instant "Sweat Equity"</h3>
            </div>
            <div className="ml-8 border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <p className="text-sm text-slate-700 mb-2">
                A 203(k) loan allows you to target the least expensive, most distressed house in a desirable neighborhood. If you buy a fixer-upper for $200,000, put $50,000 of smart cosmetic and structural renovations into it, your total investment is $250,000. If the finished home appraises at $290,000 upon completion, you have just manufactured $40,000 in instant equity that would have otherwise taken years of market appreciation to achieve.
              </p>
            </div>
          </div>

          {/* Advantage 2 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Low Down Payment Requirement</h3>
            </div>
            <div className="ml-8 border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <p className="text-sm text-slate-700">
                FHA 203(k) requires just 3.5% down. Crucially, that 3.5% down payment is calculated based on the purchase price + total renovation costs, not the future appraised value. This keeps your upfront cash drag exceptionally low.
              </p>
            </div>
          </div>

          {/* Advantage 3 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Higher Loan Limits Based on "As-Improved" Value</h3>
            </div>
            <div className="ml-8 border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <p className="text-sm text-slate-700">
                A standard mortgage limits your borrowing power to the home's current, unimproved condition. A 203(k) lender approves your loan amount based on the "As-Improved" value (the projected value of the home after the renovations are completed). The FHA allows the total loan amount to go up to 110% of the expected after-rehab value, giving you a financial buffer during the construction phase.
              </p>
            </div>
          </div>

          {/* Advantage 4 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Single-Close Financing (One Set of Fees)</h3>
            </div>
            <div className="ml-8 border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <p className="text-sm text-slate-700">
                The 203(k) is a single-close loan. You close once, pay one set of loan origination fees and closing costs, and the renovation funds are securely held in an escrow account to pay contractors as milestones are reached.
              </p>
            </div>
          </div>

          {/* Advantage 5 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">5</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Flexible Guidelines & Streamlined Options</h3>
            </div>
            <div className="ml-8 border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <p className="text-sm text-slate-700 mb-2">
                FHA 203(k) loan qualification criteria are much more lenient than conventional renovation programs. Credit score requirements are lower, and debt-to-income (DTI) ratios are more flexible.
              </p>
              <div className="bg-white rounded-lg p-3 border border-emerald-100 mt-2">
                <p className="text-xs font-bold text-slate-800 mb-1">Two Formats to Fit the Project:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li className="flex items-start gap-1">
                    <FileText className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Limited 203(k):</strong> For minor, cosmetic repairs up to $35,000 (e.g., kitchens, baths, flooring, roofing). No structural work allowed, but requires less paperwork and avoids the mandate of an official HUD consultant.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Wrench className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Standard 203(k):</strong> For major structural changes, additions, or full gut-rehabs exceeding $35,000. Requires a HUD consultant to oversee the project draws, ensuring contractors execute the work correctly.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advantage 6 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">6</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Multi-Family Home Option</h3>
            </div>
            <div className="ml-8 border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <p className="text-sm text-slate-700">
                The FHA 203(k) program is not restricted to single-family homes. You can use it on 2-to-4 unit multifamily properties, as long as you plan to live in one of the units. This allows you to buy a distressed duplex or triplex, fully renovate it using low-down-payment government capital, and let your tenants pay down your newly upgraded asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">What's Next</h2>
          <button 
            onClick={() => onNavigate('real-estate-dynamics')}
            className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 transition-all text-left w-full md:w-auto"
          >
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-900">Real Estate — With An AI Twist</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}