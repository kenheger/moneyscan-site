import { ArrowRight, TrendingUp, DollarSign, CreditCard, Briefcase, Calculator } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-base text-slate-600 mb-2">
            First Principles. Lasting Wealth.
          </p>

          <h1 className="text-xl md:text-base lg:text-lg font-bold text-slate-900 mb-2 leading-tight">
            Build Lasting Wealth – A First Principles Blueprint
          </h1>

          <p className="text-base md:text-lg text-slate-700 mb-2 max-w-3xl mx-auto">
            Understand the math. Choose your path. Build wealth that lasts.
          </p>

          <p className="text-lg md:text-xl italic text-slate-600 mb-4">
            Directional & Actionable in the AI Era
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <span>Explore the Wealth Engine</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('moneyscan')}
              className="bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Get the $49 Blueprint</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why First Principles Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 text-center">
            Why First Principles Matter
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center mb-3">
            Most financial advice changes with trends and market noise. First principles never do.
          </p>

          <h3 className="text-base md:text-lg font-bold text-slate-900 mb-4 text-center">
            One Simple Truth That Changes Everything
          </h3>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center mb-4">
            Even pro athletes with massive contracts are often stunned when they first see a basic compound interest table. Once you understand how consistently investing a portion of your money grows over time — after taxes, spending, and fees — everything clicks. That single benchmark becomes your clearest overlay for every investing decision.
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            This is where we start: with the math that actually builds lasting wealth.
          </p>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 text-center">
            Your Blueprint for Building Wealth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Wealth Engine */}
            <button
              onClick={() => onNavigate('compound-interest')}
              className="bg-white p-4 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Compound Interest
              </h3>
              <p className="text-slate-700">
                The 10% benchmark — the foundation every wealth path must beat
              </p>
            </button>

            {/* Wealth Engine */}
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-white p-4 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Wealth Engine
              </h3>
              <p className="text-slate-700">
                Master the core math of compounding and steady investing
              </p>
            </button>

            {/* Cash Flow Mastery */}
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="bg-white p-4 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Cash Flow Mastery
              </h3>
              <p className="text-slate-700">
                Create consistent surplus you can actually invest
              </p>
            </button>

            {/* Debt Elimination */}
            <button
              onClick={() => onNavigate('debt-elimination-page')}
              className="bg-white p-4 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Debt Elimination
              </h3>
              <p className="text-slate-700">
                Stop reverse compounding and free up your money
              </p>
            </button>

            {/* AI Era Careers */}
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="bg-white p-4 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                AI Era Careers
              </h3>
              <p className="text-slate-700">
                High-growth, AI-resistant paths including skilled trades
              </p>
            </button>

            {/* Tools */}
            <button
              onClick={() => onNavigate('tools-hub')}
              className="bg-white p-4 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Tools
              </h3>
              <p className="text-slate-700">
                Practical calculators, assessments, and worksheets
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* AI Era Insight Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 text-center">
            Built for the AI Era
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            AI is reshaping jobs and opportunities. This site helps you navigate both white-collar hybrid roles and high-demand skilled trades so you can build surplus faster and protect your wealth long-term.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg md:text-xl font-bold text-white mb-3">
            Ready to Build Lasting Wealth?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('moneyscan')}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <span>Get the $49 Blueprint</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('tools-hub')}
              className="bg-white/10 backdrop-blur border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <span>Browse Free Tools</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
