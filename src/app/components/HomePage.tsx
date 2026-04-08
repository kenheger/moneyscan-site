import { TrendingUp, Shield, DollarSign, Home, Lightbulb, Users, Calculator, ArrowRight, CheckCircle } from 'lucide-react';
import CompoundCalculator from './CompoundCalculator';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                First Principles for Financial Freedom
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Get timeless direction on compound growth, debt elimination, house hacking, real estate crowdfunding, and more — before you spend a dime on any app or service.
              </p>
              <p className="text-lg text-slate-700 mb-8 font-medium">
                Understand the math. Choose your path. Build wealth that lasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('wealth-engine')}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start with the Wealth Engine
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all">
                  Browse All Principles
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                General education only — not personalized advice. Past performance is no guarantee of future results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <CompoundCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* How It All Connects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              One Wealth Engine. Multiple Principles That Protect and Accelerate It.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything starts with the proven mathematics of compounding. The other principles either create more fuel for the engine, stop money from leaking out, protect it from setbacks, or provide additional paths to grow and control your wealth.
            </p>
          </div>

          {/* Visual Map */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Circle */}
            <div className="flex justify-center mb-12">
              <button
                onClick={() => onNavigate('wealth-engine')}
                className="relative group"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-16 h-16 text-white mb-4" />
                  <span className="text-2xl font-bold text-white text-center px-6">
                    The Wealth Engine
                  </span>
                  <span className="text-sm text-emerald-100 text-center px-6 mt-2">
                    Compound Interest at Work
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
              </button>
            </div>

            {/* Orbiting Modules */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ModuleCard
                icon={<DollarSign className="w-8 h-8" />}
                title="Fix the Leaks"
                description="Cash flow + debt elimination stop reverse compounding"
                onClick={() => onNavigate('debt-elimination')}
                color="from-red-500 to-orange-500"
              />

              <ModuleCard
                icon={<Shield className="w-8 h-8" />}
                title="Protect & Grow"
                description="Emergency buffers + tax-free layers"
                color="from-blue-500 to-indigo-500"
              />

              <ModuleCard
                icon={<Home className="w-8 h-8" />}
                title="Real Estate Paths"
                description="House hacking + passive crowdfunding"
                onClick={() => onNavigate('real-estate-crowdfunding')}
                color="from-purple-500 to-pink-500"
              />

              <ModuleCard
                icon={<Lightbulb className="w-8 h-8" />}
                title="Alternative Strategies"
                description="Bank on Yourself + side income"
                color="from-amber-500 to-yellow-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured First Principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Featured First Principles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrincipleCard
              title="The Wealth Engine"
              description="Consistent contributions + long-term growth (historical ~10% nominal for broad indexes) turn small monthly amounts into significant wealth over time."
              onClick={() => onNavigate('wealth-engine')}
            />

            <PrincipleCard
              title="Debt Elimination"
              description="High-interest credit card debt (~21–25% APR) is reverse compounding. Use 0% balance transfers and structured payoffs to free up cash flow fast."
              onClick={() => onNavigate('debt-elimination')}
            />

            <PrincipleCard
              title="Real Estate Paths"
              description="Turn housing from a pure expense into an asset. House hack with multi-unit properties or add passive exposure through real estate crowdfunding."
              onClick={() => onNavigate('real-estate-crowdfunding')}
            />

            <PrincipleCard
              title="Cash Flow Mastery"
              description="Create reliable surplus by paying yourself first. Automate it before lifestyle spending so your wealth engine stays fueled."
            />
          </div>
        </div>
      </section>

      {/* Life Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Choose Your Starting Point – Life Stages
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center">Not sure where to begin? Start based on where you are.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LifeStageCard
              title="Early Career"
              focus="Focus on debt payoff and building your first emergency fund."
            />
            <LifeStageCard
              title="Building a Family"
              focus="House hacking + basic protection strategies."
            />
            <LifeStageCard
              title="Mid-Career"
              focus="Max out tax-advantaged accounts and explore real estate paths."
            />
            <LifeStageCard
              title="Approaching Retirement"
              focus="Optimize drawdown and passive income streams."
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Free Tools</h2>
          <p className="text-slate-300 mb-12 text-center text-lg">Put the Principles to Work</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ToolCard icon={<Calculator />} title="Compound Growth Calculator" />
            <ToolCard icon={<DollarSign />} title="Debt Payoff Projector" />
            <ToolCard icon={<Home />} title="House Hacking Estimator" />
            <ToolCard icon={<TrendingUp />} title="Savings Rate Tracker" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Build Wealth on Solid Ground?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Start with the Wealth Engine or explore any principle that speaks to your current situation. No hype. No pressure. Just clear, first-principles direction you can trust.
          </p>
          <button
            onClick={() => onNavigate('wealth-engine')}
            className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold text-lg hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Begin Your Journey
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ModuleCard({ icon, title, description, onClick, color }: any) {
  return (
    <button
      onClick={onClick}
      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-emerald-300 text-left"
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600">{description}</p>
      <div className="mt-4 text-emerald-600 text-sm font-semibold flex items-center gap-1">
        Explore <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}

function PrincipleCard({ title, description, onClick }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all">
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <button
        onClick={onClick}
        className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 flex items-center gap-1"
      >
        Learn the principle <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function LifeStageCard({ title, focus }: any) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl shadow-md border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Users className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{focus}</p>
    </div>
  );
}

function ToolCard({ icon, title }: any) {
  return (
    <button className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all text-left group">
      <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-3 text-emerald-400 text-sm font-semibold flex items-center gap-1">
        Try Now <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}
