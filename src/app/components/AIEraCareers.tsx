import { Bot, TrendingUp, CheckCircle, ArrowRight, Zap, Cpu, User, Brain, Wrench } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface AIEraCareersProps {
  onNavigate: (page: string) => void;
}

export default function AIEraCareers({ onNavigate }: AIEraCareersProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Careers in the AI Era
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Wealth-Building Jobs for the Next 25 Years
          </p>
          <p className="text-base text-slate-600">
            Position yourself to leverage AI as a collaborator and capture the productivity gains that drive higher earnings and surplus.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="relative">
                <User className="w-6 h-6 text-blue-600" />
                <Cpu className="w-3 h-3 text-blue-700 absolute -bottom-0.5 -right-0.5 bg-white rounded-sm border border-blue-200" />
              </div>
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              AI will reshape jobs, not eliminate them. It automates routine tasks while creating far more opportunities and boosting productivity in roles that combine AI literacy with irreplaceable human skills (empathy, judgment, creativity, and physical dexterity). <strong>The wealth-building principle is clear: treat AI as a collaborator so you capture higher pay, equity, and entrepreneurial upside that fuels your Wealth Engine.</strong>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              Over the next 25 years, AI-driven productivity gains will create net new jobs and accelerate wage growth. Those who adapt proactively will build surplus faster and compound wealth more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">Projected U.S. Job Growth & Wage Premiums (2025–2050 Outlook)</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Sector / Role Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Projected Growth (through 2030–2035)</th>
                  <th className="px-6 py-4 text-left font-semibold">Wage Premium from AI Exposure</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Wealth-Building Advantage</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Healthcare (nurses, technicians, AI-assisted diagnosticians)</td>
                  <td className="px-6 py-4 text-slate-700">+5.5 million new roles</td>
                  <td className="px-6 py-4 text-slate-700">High (specialized pay)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Stable demand + entrepreneurship</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">STEM & AI-Native (engineers, data scientists, MLOps)</td>
                  <td className="px-6 py-4 text-slate-700">+23%+ in core tech roles</td>
                  <td className="px-6 py-4 text-slate-700">56% higher wages</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Equity, startups, $150K–$300K+</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Skilled Trades & Infrastructure (electricians, HVAC, data-center techs)</td>
                  <td className="px-6 py-4 text-slate-700">Hundreds of thousands of openings</td>
                  <td className="px-6 py-4 text-slate-700">Strong overtime/certification upside</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Short training → rapid high earnings</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-600 italic">
            Data synthesized from WEF, McKinsey, PwC, and BLS 2025–2026 projections; AI-exposed roles see skills change 66% faster and command a 56% wage premium.
          </p>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Key Takeaway</h3>
            <p className="text-slate-700">
              AI-exposed roles see skills change 66% faster and command a 56% wage premium. The biggest winners combine AI tools with human strengths, turning higher earnings into consistent contributions for long-term compounding.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p>Healthcare workers using AI for diagnostics advance faster while keeping the human connection that patients value.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p>AI/ML engineers routinely earn $150K–$300K+ (salary + equity) and launch side businesses with AI-lowered barriers.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p>Skilled tradespeople maintaining AI-powered factories reach six-figure incomes through certifications and overtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Simple Actionable Vehicles (Examples Only)
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            These practical paths help you position yourself for AI-era wealth building. Research programs, costs, and local demand carefully.
          </p>

          <div className="grid gap-8">
            {/* Hybrid AI + Domain Certification */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Hybrid AI + Domain Certification Programs</h3>
                  <p className="text-slate-700 mb-4">
                    Combine short AI literacy courses with domain-specific training in healthcare, trades, or fintech.
                  </p>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> Google AI Essentials + healthcare domain certification (3–6 months).
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    <strong>Practical note:</strong> Many programs lead to immediate wage premiums and faster advancement.
                  </p>
                </div>
              </div>
            </div>

            {/* AI-Augmented Side-Hustle */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Augmented Side-Hustle or Entrepreneurship Launch</h3>
                  <p className="text-slate-700 mb-4">
                    Use AI tools to start or scale a small business in your domain (consulting, content, or niche apps).
                  </p>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> AI-assisted freelancing or no-code app for a niche service.
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    <strong>Practical note:</strong> AI dramatically lowers startup costs — funnel early profits into your Wealth Engine (VTI/SCHB).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential AI Skills to Start Right Now */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Essential AI Skills to Start Right Now</h2>
            <p className="text-slate-600 mb-6">
              The AI Era is here and it's Real! Don't delay — Explore AI skills today.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">1. Prompt Engineering</h3>
                <p className="text-slate-600 text-sm mb-3">Write effective prompts to get useful output from ChatGPT, Claude, Gemini.</p>
                <a href="#" className="text-emerald-600 text-sm hover:text-emerald-800 underline">Learn More →</a>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">2. AI Tool Fluency</h3>
                <p className="text-slate-600 text-sm mb-3">Use AI as a daily productivity tool — drafting, researching, analyzing faster.</p>
                <button
                  onClick={() => onNavigate('ai-career-tools')}
                  className="text-emerald-600 text-sm hover:text-emerald-800 underline"
                >
                  Take AI Literacy Assessment →
                </button>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">3. Critical Evaluation</h3>
                <p className="text-slate-600 text-sm mb-3">Spot AI hallucinations, bias, and know when AI is wrong.</p>
                <a href="#" className="text-emerald-600 text-sm hover:text-emerald-800 underline">Learn More →</a>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">4. Task Automation</h3>
                <p className="text-slate-600 text-sm mb-3">Automate repetitive work — emails, drafts, data processing.</p>
                <button
                  onClick={() => onNavigate('tools-hub')}
                  className="text-emerald-600 text-sm hover:text-emerald-800 underline"
                >
                  Explore Tools Hub →
                </button>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">5. AI-Augmented Decisions</h3>
                <p className="text-slate-600 text-sm mb-3">Use AI for better decision support in career and finances.</p>
                <button
                  onClick={() => onNavigate('ai-skills-worksheet')}
                  className="text-emerald-600 text-sm hover:text-emerald-800 underline"
                >
                  Launch Skills Map →
                </button>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">6. Understanding AI Limits</h3>
                <p className="text-slate-600 text-sm mb-3">Know what AI sucks at vs. what it's great at — your edge.</p>
                <a href="#" className="text-emerald-600 text-sm hover:text-emerald-800 underline">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Execute */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Execute</h2>
          <p className="text-lg text-slate-700 mb-4">
            Assess your skills → dedicate 5–10 hours/week to upskilling → start one small project or certification → automate surplus from higher earnings into investing.
          </p>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Caveats</h2>
          <ul className="space-y-3 text-lg text-slate-700">
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-600">•</span>
              <span>Job markets evolve quickly; projections are not guarantees. Focus on adaptable hybrid skills rather than chasing single "hot" roles.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-600">•</span>
              <span>These are general examples only. This is educational direction, not personalized career advice. Consider your location, risk tolerance, and personal circumstances.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How This Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Higher earnings and entrepreneurial income become larger, consistent contributions to index funds (VTI/SCHB) for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
              color="emerald"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Stronger paychecks make 'pay yourself first' easier and more powerful"
              onClick={() => onNavigate('cash-flow-mastery')}
              color="emerald"
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Faster income growth helps crush high-interest debt quicker"
              onClick={() => onNavigate('debt-elimination')}
              color="red"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Lifelong learning counters inertia and overconfidence biases that keep people stuck in declining roles"
              onClick={() => onNavigate('behavioral-finance')}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* AI Career Tools Callout */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Take Action?
              </h2>
              <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
                Use our free AI Era Career Tools to assess your current AI literacy, map your skills, and create a concrete 30–90 day action plan.
              </p>
              <button
                onClick={() => onNavigate('ai-career-tools')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore AI Career Tools</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-slate-600 mt-4">
                Includes: Interactive AI Literacy Assessment • Skills Map Worksheet • Free Learning Resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skilled Trades Callout */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-emerald-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Explore Skilled Trades & Blue-Collar Wealth Building
              </h2>
              <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
                Discover AI-resistant, high-earning trade paths with shorter training timelines and real entrepreneurship potential — often delivering surplus faster than traditional college routes.
              </p>
              <button
                onClick={() => onNavigate('skilled-trades')}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore Skilled Trades</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-slate-600 mt-4">
                Includes: Trade Opportunity Finder • BLS Projections • $100K Income Timelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Future-Proof Your Income?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Position yourself in high-growth sectors and funnel increased earnings into your compounding engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <span>The Wealth Engine</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <span>Cash Flow Mastery</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
