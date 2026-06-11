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
            <a
              href="#essential-skills"
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group block"
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
                <a href="#essential-skills" className="hover:underline">AI Essentials</a> · <a href="#compound-interest" className="hover:underline">Compounding</a> · <a href="#budgeting-page" className="hover:underline">Budgeting</a>
              </div>
            </a>

            {/* Early Career */}
            <a
              href="#ai-era-careers"
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group block"
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
                <a href="#job-heatmap" className="hover:underline">Jobs</a> · <a href="#housing-map" className="hover:underline">Housing</a> · <a href="#first-time-home-buyer" className="hover:underline">First Home</a> · <a href="#entrepreneurship-page" className="hover:underline">Entrepreneurship</a> · <a href="#gig-economy" className="hover:underline">Gig Economy</a>
              </div>
            </a>

            {/* Mid Career */}
            <a
              href="#mid-career-ai"
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group block"
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
                <a href="#mid-career-ai" className="hover:underline">Career Defense</a> · <a href="#equities-investing" className="hover:underline">Investing</a> · <a href="#real-estate-dynamics" className="hover:underline">Real Estate</a>
              </div>
            </a>

            {/* Tax Strategies */}
            <a
              href="#tax-strategies"
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group block"
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
                <a href="#tax-strategies" className="hover:underline">Optimization</a> · <a href="#tax-advantages-children" className="hover:underline">Kids</a>
              </div>
            </a>

            {/* Tools to Use */}
            <a
              href="#tools-hub"
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group block"
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
                <a href="#compound-interest-tool" className="hover:underline">Compound</a> · <a href="#budgeting-page" className="hover:underline">Budget</a> · <a href="#skilled-trades" className="hover:underline">Trades DB</a>
              </div>
            </a>

            {/* AI Tools Arsenal */}
            <a
              href="#ai-tools-arsenal"
              className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group block"
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
                <a href="#ai-tools-arsenal" className="hover:underline">Curated Picks</a> · <a href="#prompts-vault" className="hover:underline">Prompts Vault</a>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-700 mb-4">
            Your wealth journey has a path. Start anywhere.
          </p>
          <a
            href="#essential-skills"
            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline"
          >
            Keystones <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}