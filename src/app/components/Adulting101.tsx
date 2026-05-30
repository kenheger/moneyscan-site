import { ArrowRight, TrendingUp, Home, Wallet, Target, Sparkles } from 'lucide-react';

interface Adulting101Props {
  onNavigate: (page: string) => void;
}

export default function Adulting101({ onNavigate }: Adulting101Props) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-emerald-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Adulting 101: The AI Force Multiplier
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            For the 22-year-old D1 athlete turned adult. You've got the grit. Now multiply it.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            Your competitive advantage: Use AI as a force multiplier across career, investing, real estate, and daily habits.
          </p>
        </div>
      </section>

      {/* Quick Tip Banner */}
      <section className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-blue-200">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Start Now. $200/mo matters more than you think.</h3>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">At 22, $200/mo × 40 years at 8% = $485,000+</span> — vs waiting until 35 and investing $1,000/mo = $365,000. 
                Starting early with less beats starting later with more. That's the AI-era wealth secret.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1: Career */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">1. Career: Your Salary Accelerator</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Skill Augmentation */}
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h3 className="font-bold text-slate-900 mb-2">Prompt Engineering = Income Multiplier</h3>
              <p className="text-sm text-slate-700 mb-3">
                Don't just write — manage AI-driven content workflows. Use AI to handle the "drudge work" (transcription, initial drafting, data sorting) so you can focus on high-level strategy that employers pay for.
              </p>
              <div className="bg-white rounded p-3 border border-emerald-100">
                <p className="text-xs font-semibold text-slate-600 mb-1">Tool: Copy.ai, Jasper, or ChatGPT for:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Initial email drafts to recruiters</li>
                  <li>• Resume optimization per job</li>
                  <li>• Follow-up sequences</li>
                </ul>
              </div>
            </div>

            {/* Negotiation */}
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h3 className="font-bold text-slate-900 mb-2">The Invisible Career Coach</h3>
              <p className="text-sm text-slate-700 mb-3">
                AI platforms can now simulate salary negotiations and high-stakes interviews. Practice asking for 10-15% more. That one conversation, practiced 10x, compounds to <span className="font-bold text-emerald-600">$100K+ over 20 years</span>.
              </p>
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-xs font-semibold text-slate-600 mb-1">Tools:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Interviewing.io (mock interviews)</li>
                  <li>• ChatGPT (role-play salary counter)</li>
                  <li>• Teal (resume & negotiation guides)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Investing */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Investing: The Autonomous Roth IRA</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Robo-Advisors */}
            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <h3 className="font-bold text-slate-900 mb-2">Set It and Forget It</h3>
              <p className="text-sm text-slate-700 mb-3">
                AI-driven robo-advisors automatically rebalance your portfolio and perform tax-loss harvesting. You're 22 — you won't check this for years. Let the algorithm do the work.
              </p>
              <a 
                href="https://www.betterment.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Try Betterment <ArrowRight className="w-4 h-4" />
              </a>
              <span className="mx-2">|</span>
              <a 
                href="https://www.wealthfront.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Wealthfront <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Indexing */}
            <div className="border border-emerald-200 rounded-lg p-4 bg-white">
              <h3 className="font-bold text-slate-900 mb-2">Direct Indexing (2026 Native)</h3>
              <p className="text-sm text-slate-700 mb-3">
                Buy actual stocks in an index vs. ETFs. Customize to your values (tech-heavy, ESG-focused) with surgical precision — and often lower fees than traditional funds.
              </p>
              <div className="bg-emerald-50 rounded p-3 border border-emerald-100">
                <p className="text-xs font-semibold text-slate-600">Why it matters at 22:</p>
                <p className="text-xs text-slate-600">Time = biggest edge. 40 years of tax-loss harvesting beats 10 years of scrambling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Real Estate */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Real Estate: The House Hacking Scout</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Market Analysis */}
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-2">AI Market Analysis</h3>
              <p className="text-sm text-slate-700 mb-2">
                AI can find undervalued neighborhoods by ingesting data on transit lines, school ratings, and local business permits — predicting where values rise in 5 years.
              </p>
              <p className="text-xs text-slate-500 italic">Tool: Zillow AI, RE Devita, or Spark AI</p>
            </div>

            {/* ADU Strategy */}
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold text-slate-900 mb-2">The ADU Strategy</h3>
              <p className="text-sm text-slate-700 mb-2">
                Buy a home with a backyard? Design a Tiny Home or ADU (Accessory Dwelling Unit). Rent it out. Your "adulting" journey becomes cash-flow positive from day one.
              </p>
              <p className="text-xs text-blue-600 font-semibold">$800-1,500/mo rental income offset</p>
            </div>

            {/* House Hacking */}
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
              <h3 className="font-bold text-slate-900 mb-2">House Hacking 101</h3>
              <p className="text-sm text-slate-700 mb-2">
                Buy a 2-4 unit, live in one, rent the rest. Rent covers your mortgage. You're not just a renter — you're building equity while paying less than an apartment.
              </p>
              <p className="text-xs text-emerald-600 font-semibold">Zero down payment programs exist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Lifestyle */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. Lifestyle: Frictionless Budgeting</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Predictive Spending */}
            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <h3 className="font-bold text-slate-900 mb-2">The Wealth Leak Stopper</h3>
              <p className="text-sm text-slate-700 mb-3">
                Most 22-year-olds lose $200-500/mo to subscription creep and lifestyle inflation. AI banking apps predict bills 3 months out and automatically move money to wealth accounts <span className="font-semibold">before</span> you spend it.
              </p>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-xs font-semibold text-blue-700">Try: Rocket Money, Monarch, or YNAB</p>
              </div>
            </div>

            {/* Subscription Audit */}
            <div className="border border-emerald-200 rounded-lg p-4 bg-white">
              <h3 className="font-bold text-slate-900 mb-2">The Subscription Audit</h3>
              <p className="text-sm text-slate-700 mb-3">
                Run an AI audit on your bank statements. Find every $9.99 recurring charge. Cancel what you don't use. That's $120-600/ year back in your pocket.
              </p>
              <p className="text-xs text-emerald-600 font-semibold">Set it on autopilot: Truebill, Rocket Money</p>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Year Roadmap */}
      <section className="py-8 bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The 20-Year Wealth Roadmap</h2>
          
          <div className="grid md:grid-cols-4 gap-3">
            {/* Year 1-5 */}
            <div className="bg-white rounded-lg p-4 border border-emerald-200 shadow-sm">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-bold">Y1-5</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Foundation</h3>
              <ul className="text-xs text-slate-600 space-y-1 mt-2">
                <li>• Open Roth IRA ($7K/yr max)</li>
                <li>• Automate $200/mo</li>
                <li>• Build 3-mo emergency fund</li>
                <li>• Learn 1 AI tool deeply</li>
              </ul>
            </div>

            {/* Year 6-10 */}
            <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-bold">Y6-10</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Acceleration</h3>
              <ul className="text-xs text-slate-600 space-y-1 mt-2">
                <li>• Max Roth ($7K/yr)</li>
                <li>• Increase to $500-1K/mo</li>
                <li>• Consider house hacking</li>
                <li>• Side income stream</li>
              </ul>
            </div>

            {/* Year 11-15 */}
            <div className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-bold">Y11-15</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Building</h3>
              <ul className="text-xs text-slate-600 space-y-1 mt-2">
                <li>• 6-12 month expenses saved</li>
                <li>• Property or RE investment</li>
                <li>• Tax-advantaged maxing</li>
                <li>• Career negotiation</li>
              </ul>
            </div>

            {/* Year 16-20 */}
            <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-bold">Y16-20</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Freedom</h3>
              <ul className="text-xs text-slate-600 space-y-1 mt-2">
                <li>• $500K+ in investments</li>
                <li>• Option to slow down</li>
                <li>• Passive income &gt; expenses</li>
                <li>• Help others start</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-700 mb-4">
            You've got the athlete's discipline. Now apply it to wealth.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all"
          >
            Explore More Tools <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}