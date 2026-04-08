import { ArrowRight, CreditCard, Heart, Shield, CheckCircle } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

interface CreditCardDealsProps {
  onNavigate: (page: string) => void;
  hasLeftLanding?: boolean;
}

export default function CreditCardDeals({ onNavigate, hasLeftLanding }: CreditCardDealsProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      {/* Minimal Header */}
      <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="MONEYSCAN"
                className="h-10 w-auto"
              />
            </div>
            <button
              onClick={() => hasLeftLanding && onNavigate('home')}
              disabled={!hasLeftLanding}
              className={`text-sm transition-colors ${hasLeftLanding ? 'text-slate-600 hover:text-emerald-600 cursor-pointer' : 'text-slate-300 cursor-not-allowed'}`}
            >
              Back to Site
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Credit Card Deals
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-8">
              Hand-picked cards with no hidden fees. Save money on interest and balance transfers.
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Curated recommendations for savvy consumers. Always read the fine print.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Card */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                FEATURED
              </span>
              <span className="text-slate-600 font-medium">Five Star Credit Union</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Platinum Visa Credit Card
            </h2>
            
            <p className="text-lg text-slate-700 mb-8">
              No balance transfer fees. No annual fees. Low interest rates. Everything you'd want in a credit card — plus the peace of mind that comes with a credit union.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Key Benefits
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>0% Balance Transfer Fee</strong> — Transfer high-interest debt without extra costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>No Annual Fee</strong> — Keep more of your money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>13%–17.99% APR</strong> — Competitive rates based on credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Free ID theft protection from Norton LifeLock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Visa Zero Liability Guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Free text alerts for suspicious activity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Why Five Star?
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span><strong>Serving Members Nationwide</strong> — Join online from anywhere in the US</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>NCUA insured — your deposits are safe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Alabama & Georgia based, serving nationwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Digital banking — bank from anywhere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Mobile wallet ready (Apple Pay, Google Pay)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-slate-700">
                <strong>APR:</strong> Annual percentage rate ranges from 13% to 17.99% based on creditworthiness. Introductory APR applies to retail purchases for the first six months (11.25%–17.99%). Rates may vary annually.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://www.fivestarcu.com/personal/platinum-visa-credit-card"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Learn More at Five Star</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-slate-600 mt-4">
                MONEYSCAN may receive compensation for referrals. This is an independent recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-slate-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm text-slate-700">
              Credit card offers, terms, and rates are subject to change. APR varies based on credit score and creditworthiness. Always review the terms and conditions before applying. MONEYSCAN provides these links as a service — we are not affiliated with Five Star Credit Union and this is not personalized financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Contact: <a href="mailto:info@moneyscan.com" className="text-emerald-400 hover:text-emerald-300">info@moneyscan.com</a>
          </p>
          <p className="text-xs text-slate-500 mt-2">
            © 2026 Moneyscan Financial. Educational only — not personalized advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
