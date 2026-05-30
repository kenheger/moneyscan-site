import { TrendingUp, Zap, Briefcase, Calculator, Brain } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white pb-12 pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Building Lasting Wealth in the AI Era
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 mb-3 max-w-3xl mx-auto">
            Understand the math. Choose your path. Build wealth that lasts.
          </p>

          <p className="text-md md:text-lg italic text-slate-600 mb-6">
            AI is reshaping jobs and opportunities. Stay on top of it right here.
          </p>

          <p className="text-lg font-medium text-red-600">
            Explore Your Wealth Path Resources
          </p>
        </div>
      </section>

      {/* 6 Navigation Boxes - moved up closer to title */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Keystones */}
            <button
              onClick={() => onNavigate('ai-literacy-assessment')}
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Keystones
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Master the 10% benchmark. Know where you stand. Build core skills for the AI shift.
              </p>
              <div className="text-xs text-emerald-600 font-medium">
                Skills Assessment · Compounding · Budgeting
              </div>
            </button>

            {/* Early Career */}
            <button
              onClick={() => onNavigate('job-heatmap')}
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Early Career
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Find your rising tide. Map the hottest jobs. Build skills that pay — now and into the AI shift.
              </p>
              <div className="text-xs text-blue-600 font-medium">
                Jobs · Housing · First Home
              </div>
            </button>

            {/* Mid Career */}
            <button
              onClick={() => onNavigate('mid-career-ai')}
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                Mid Career
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Defend your position. Grow what you've built. Build wealth that survives AI disruption.
              </p>
              <div className="text-xs text-purple-600 font-medium">
                Career Defense · Investing · Real Estate
              </div>
            </button>

            {/* Tax Strategies */}
            <button
              onClick={() => onNavigate('tax-strategies')}
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                Tax Strategies
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Keep more of what you earn. Smart optimization strategies for every stage.
              </p>
              <div className="text-xs text-orange-600 font-medium">
                Optimization · Kids · Retirement
              </div>
            </button>

            {/* Tools to Use */}
            <button
              onClick={() => onNavigate('tools-hub')}
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                Tools to Use
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Interactive calculators and databases. Quantify your path. Find trades that pay.
              </p>
              <div className="text-xs text-teal-600 font-medium">
                Compound · Budget · Trades DB
              </div>
            </button>

            {/* AI Tools Arsenal */}
            <button
              onClick={() => onNavigate('ai-tools-arsenal')}
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                AI Tools Arsenal
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Curated AI tools by category. Proven prompts that work. Build your productivity edge.
              </p>
              <div className="text-xs text-violet-600 font-medium">
                Curated Picks · Prompts Vault
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-700 mb-4">
            Your wealth journey has a path. Start anywhere.
          </p>
          <button
            onClick={() => onNavigate('ai-literacy-assessment')}
            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline"
          >
            Keystones <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}