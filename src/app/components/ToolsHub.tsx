import { Wrench, CheckCircle, ArrowRight, FileText, BookOpen, Calculator, TrendingUp, Download, Brain, Zap, DollarSign } from 'lucide-react';

interface ToolsHubProps {
  onNavigate: (page: string) => void;
}

export default function ToolsHub({ onNavigate }: ToolsHubProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Tools Hub
            </h1>
          </div>
          <p className="text-2xl text-slate-600 mb-4">
            Free Resources to Build Wealth and Advance Your Career
          </p>
          <p className="text-sm text-slate-500">
            Practical tools to assess your situation, plan your next steps, and turn principles into action.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Awareness without action is just information. These tools turn timeless first-principles thinking into consistent, repeatable behaviors that create surplus and build lasting wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Wealth Tools Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Core Wealth Tools</h2>

          <div className="space-y-6">
            {/* Compound Interest Calculator */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Compound Interest Calculator</h3>
                  <p className="text-slate-700 leading-relaxed">
                    See exactly how small, consistent monthly contributions grow over decades using the historical ~10% nominal benchmark. Adjust contribution amount, time horizon, and rate to visualize the real power of compounding.
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Calculator className="w-5 h-5" />
                <span>Try It Free</span>
              </button>
            </div>

            {/* Debt Payoff Projector */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Debt Payoff Projector</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Reverse the compounding engine. Input your highest-interest debts and see how aggressive payoff strategies free up future surplus — often dramatically faster than minimum payments.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('debt-elimination')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Launch Tool</span>
              </button>
            </div>

            {/* Surplus Tracker Worksheet */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Surplus Tracker Worksheet</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A simple monthly framework to help you "pay yourself first," track spending leaks, and direct consistent surplus toward investing and wealth building.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('cash-flow-mastery')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>Get Worksheet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Era Career Tools Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">AI Era Career Tools</h2>

          <div className="space-y-6">
            {/* AI Literacy Assessment */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">AI Literacy Assessment</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    12-question interactive quiz designed to measure not just familiarity, but your ability to use AI strategically for career advantage and wealth building.
                  </p>
                  <button
                    onClick={() => onNavigate('ai-career-tools')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>Take the Assessment</span>
                  </button>
                </div>
              </div>

              {/* Assessment Details */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Rate each statement from 0–3 (0 = Never / Strongly Disagree, 3 = Always / Strongly Agree):</h4>
                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <ol className="space-y-3 text-slate-700 list-decimal list-inside">
                    <li>I regularly use AI tools (ChatGPT, Claude, Gemini, etc.) to help me work faster or smarter.</li>
                    <li>I know how to write effective prompts that get useful, specific results instead of generic answers.</li>
                    <li>I can critically evaluate AI output for accuracy, bias, or hallucinations.</li>
                    <li>I use AI to research or analyze topics related to my career or finances.</li>
                    <li>I understand the difference between using AI as a tool versus becoming overly dependent on it.</li>
                    <li>I have experimented with AI to automate repetitive tasks in my job or side projects.</li>
                    <li>I actively look for ways AI can increase my earning power (e.g., new services, faster delivery, better quality).</li>
                    <li>I track how AI is changing jobs and opportunities in my industry or local area.</li>
                    <li>I combine my existing domain knowledge/skills with AI tools to create unique value.</li>
                    <li>I have a basic understanding of AI's limitations (what it's good at and what it still struggles with).</li>
                    <li>I regularly practice using AI for wealth-building activities (researching investments, analyzing side hustle ideas, optimizing budgets, etc.).</li>
                    <li>I view AI as a collaborator that can help me build surplus faster rather than a threat to my career.</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Scoring</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>0–12 points: Beginner</strong> – Focus on foundational prompting and daily use.</li>
                    <li><strong>13–24 points: Intermediate</strong> – Start experimenting with automation and career applications.</li>
                    <li><strong>25–36 points: Advanced</strong> – Look for high-leverage opportunities to turn AI into real surplus.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Map Worksheet */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Skills Map Worksheet</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Interactive digital worksheet to map your existing skills, identify transferable strengths, and spot high-leverage opportunities where AI can amplify your earning power. Save your progress in-browser.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('ai-skills-worksheet')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Launch Interactive Worksheet</span>
                </button>
              </div>
            </div>

            {/* Freelance AI Gigs Explorer */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Freelance AI Gigs Explorer</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Discover accessible freelance opportunities that combine basic AI tools with your current skills. Most gigs require only prompting skills and 5–10 hours per week to start.
                  </p>
                </div>
              </div>

              {/* Gigs Table */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Example Freelance AI Gigs (Realistic 2026 Opportunities)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Gig</th>
                        <th className="px-6 py-4 text-left font-semibold">Description</th>
                        <th className="px-6 py-4 text-left font-semibold">Who It's Good For</th>
                        <th className="px-6 py-4 text-left font-semibold">Monthly Earnings (Part-Time)</th>
                        <th className="px-6 py-4 text-left font-semibold">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI-Assisted Content Creation</td>
                        <td className="px-6 py-4 text-slate-700">Use AI tools to draft, edit, and optimize blog posts, social media, or email campaigns for small businesses.</td>
                        <td className="px-6 py-4 text-slate-700">Writers, marketers, teachers</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">$800 – $2,500</td>
                        <td className="px-6 py-4 text-slate-700">Beginner</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Prompt Engineering for Small Businesses</td>
                        <td className="px-6 py-4 text-slate-700">Help local businesses create better prompts for ChatGPT, Claude, or Midjourney to improve their marketing or operations.</td>
                        <td className="px-6 py-4 text-slate-700">Anyone comfortable with AI chat tools</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">$1,000 – $3,000</td>
                        <td className="px-6 py-4 text-slate-700">Beginner–Intermediate</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI Workflow Automation</td>
                        <td className="px-6 py-4 text-slate-700">Build simple automations (e.g., Zapier + AI) for tradespeople, real estate agents, or small retailers to save them time.</td>
                        <td className="px-6 py-4 text-slate-700">Organized people who like systems</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">$1,200 – $4,000</td>
                        <td className="px-6 py-4 text-slate-700">Intermediate</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI Data Labeling / Training Data</td>
                        <td className="px-6 py-4 text-slate-700">Review and label data for AI models (images, text, audio). Steady remote work.</td>
                        <td className="px-6 py-4 text-slate-700">Detail-oriented people</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">$600 – $1,800</td>
                        <td className="px-6 py-4 text-slate-700">Beginner</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI-Enhanced Consulting</td>
                        <td className="px-6 py-4 text-slate-700">Offer niche consulting using AI research tools (e.g., market research, competitor analysis for local businesses).</td>
                        <td className="px-6 py-4 text-slate-700">Experienced professionals in any field</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">$1,500 – $5,000+</td>
                        <td className="px-6 py-4 text-slate-700">Intermediate–Advanced</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Custom AI Image or Video Generation</td>
                        <td className="px-6 py-4 text-slate-700">Create professional visuals or short videos for businesses using tools like Midjourney or Runway.</td>
                        <td className="px-6 py-4 text-slate-700">Creative people</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">$900 – $2,800</td>
                        <td className="px-6 py-4 text-slate-700">Beginner–Intermediate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Get Started */}
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-slate-900 mb-4">How to Get Started (Simple 3-Step Process)</h4>
                <ol className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 text-lg flex-shrink-0">1.</span>
                    <span>Take the AI Literacy Assessment to identify your current level.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 text-lg flex-shrink-0">2.</span>
                    <span>Pick 1–2 gigs that match your existing skills.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 text-lg flex-shrink-0">3.</span>
                    <span>Practice with free tools for 1 week, then create a simple profile on Upwork, Fiverr, or LinkedIn.</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-emerald-100 rounded-lg border-l-4 border-emerald-600">
                  <p className="text-slate-900 font-semibold mb-2">💡 Pro Tip</p>
                  <p className="text-slate-700">Many people start earning their first $500–$1,000 within 30–45 days by offering "AI-enhanced" versions of services they already understand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade & Opportunity Tools Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Trade & Opportunity Tools</h2>

          <div className="space-y-6">
            {/* Trade Opportunity Finder */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Opportunity Finder</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Interactive tool: Enter your zip code and select a trade to instantly see local demand, salary ranges, growth projections, training options, and time to $100K+ potential.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('skilled-trades')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Wrench className="w-5 h-5" />
                <span>Launch Trade Finder</span>
              </button>
            </div>

            {/* National Trades Report - Upgraded to Interactive */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Explore High-Demand Trade Careers</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The free Trade Opportunity Finder lets you look up wages for 50+ trades by ZIP code. Explore detailed trade profiles, training paths, and compare trades vs. white-collar careers.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4">
                    <p className="text-emerald-800 font-semibold mb-2">💡 Free Resource</p>
                    <p className="text-emerald-700 text-sm">All trade data is free to explore on the Skilled Trades page.</p>
                  </div>
                </div>
              </div>
              <button onClick={() => onNavigate('skilled-trades')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-bold hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <TrendingUp className="w-5 h-5" />
                <span>Explore Trade Opportunities</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use These Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Use These Tools</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Start with the <strong>Compound Interest Calculator</strong> or <strong>AI Literacy Assessment</strong> — they provide the clearest "aha" moments. Then move to the <strong>Surplus Tracker</strong>, <strong>Freelance AI Gigs Explorer</strong>, or <strong>Trade Opportunity Finder</strong> to turn insight into consistent action.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              How This Connects
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Wealth Engine</strong> → Use the calculators to fuel steady investing</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Cash Flow Mastery</strong> → The Surplus Tracker helps you create the fuel</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>AI Era Careers & Skilled Trades</strong> → The assessment, gigs explorer, and finder help you protect and grow your earning power</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-xl border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Next Steps</h3>
            <p className="text-lg text-slate-800">
              Pick one tool and use it today. Small, consistent action compounds faster than you think.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Take Action?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start with one tool today and build momentum toward lasting wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Return to The Wealth Engine</span>
            </button>
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Explore AI Era Careers</span>
            </button>
          </div>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="text-emerald-100 hover:text-white underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Back to Cash Flow Mastery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
