import { ArrowRight, Home, Building, Calculator, TrendingUp, DollarSign, Shield, Users } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

interface RealEstatePathsProps {
  onNavigate: (page: string) => void;
  hasLeftLanding?: boolean;
}

export default function RealEstatePaths({ onNavigate, hasLeftLanding }: RealEstatePathsProps) {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl mb-6">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Real Estate Paths
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
              Your foundation for building wealth — whether you're renting, buying, or investing.
            </p>
          </div>
        </div>
      </section>

      {/* First Principles */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-blue-50 rounded-xl border border-blue-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-3xl">📐</span> First Principles: Why Housing Matters
            </h2>
            <div className="space-y-4 text-slate-700">
              <p className="text-lg">
                <strong>Housing is the largest expense for most Americans — and the biggest opportunity for wealth creation.</strong>
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span><strong>Rent is dead money</strong> — every rent payment goes to someone else's mortgage. When you buy, your payments build <em>your</em> equity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span><strong>Leverage</strong> — real estate lets you control a massive asset with a small down payment. A $300K home with 3% down = you control $300K with $9K.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span><strong>Tax advantages</strong> — mortgage interest, property taxes, depreciation (on rentals) — Uncle Sam helps you win.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span><strong>Forced savings</strong> — a mortgage is a forced savings plan. Renters save voluntarily; homeowners save automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span><strong>Appreciation</strong> — historically, real estate tracks inflation + a little more. Over 30 years, that compounds beautifully.</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-slate-900 pt-4">
                The path to wealth almost always includes owning real estate somehow. The question is <em>how</em> — and we'll show you options for every situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Path Options */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Choose Your Path</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* House Hacking */}
            <div 
              onClick={() => onNavigate('house-hacking')}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 cursor-pointer hover:shadow-xl hover:border-emerald-300 transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                House Hacking
              </h3>
              <p className="text-slate-600 mb-4">
                Live in a multi-unit property, rent out the other units, and live for free or nearly free while building equity.
              </p>
              <div className="flex items-center text-emerald-600 font-semibold">
                <span>Explore House Hacking</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Real Estate Crowdfunding */}
            <div 
              onClick={() => onNavigate('real-estate-crowdfunding')}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Real Estate Crowdfunding
              </h3>
              <p className="text-slate-600 mb-4">
                Invest in real estate deals without being a landlord. Start with as little as $500 in vetted syndications.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Explore Crowdfunding</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* First-Time Home Buyer */}
            <div 
              onClick={() => onNavigate('first-time-home-buyer')}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 cursor-pointer hover:shadow-xl hover:border-amber-300 transition-all group"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                First-Time Home Buyer
              </h3>
              <p className="text-slate-600 mb-4">
                Everything you need to buy your first home — down payment programs, FHA vs conventional, closing costs.
              </p>
              <div className="flex items-center text-amber-600 font-semibold">
                <span>Explore Home Buying</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-emerald-600 mb-2">66%</div>
              <div className="text-slate-600">of millionaire homeowners have no mortgage</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-blue-600 mb-2">$1.7M</div>
              <div className="text-slate-600">median net worth of homeowners vs $190K for renters</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-amber-600 mb-2">3-5%</div>
              <div className="text-slate-600">down payments with FHA and conventional loans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
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
