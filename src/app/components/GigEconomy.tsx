import { ArrowRight, TrendingUp, Zap, Target, DollarSign, Clock, Briefcase } from 'lucide-react';

interface GigEconomyPageProps {
  onNavigate: (page: string) => void;
}

export default function GigEconomyPage({ onNavigate }: GigEconomyPageProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[820px] mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <a
              href="#ai-era-careers"
              className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
            >
              ← Back
            </a>
            <div className="flex flex-col items-end">
              <a
                href="#ai-tools-arsenal"
                className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Check AI Tools →
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-4 py-4">
        {/* Hero */}
        <section className="mb-4">
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Still More Opportunities</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              The Gig Economy
            </h1>
            <p className="text-base text-slate-600 max-w-[600px] mx-auto italic">
              Many young careerists are leaning into entrepreneurship and gigs precisely because of these AI shifts — it's turning potential challenges into opportunities for independence.
            </p>
          </div>
        </section>

        {/* Why These Work Well */}
        <section className="mb-4">
          <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-lg font-bold text-emerald-800 mb-3 text-center">
              Why These Work Well for a Young Careerist
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Low startup cost</span>
                  <span className="text-slate-600"> — Many free & low cost AI tools + existing laptop skills & knowledge.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Flexible gig model</span>
                  <span className="text-slate-600"> — Start part-time on Upwork, Fiverr, or LinkedIn while job hunting or building experience.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">High leverage</span>
                  <span className="text-slate-600"> — AI speeds up delivery so you can serve more clients and charge based on value (not just hours).</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Human edge</span>
                  <span className="text-slate-600"> — Bring perspectives where pure AI falls short - client communications, strategy discussions, process understandings.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Freelance AI Gigs Explorer Table */}
        <section className="mb-4">
          <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3 text-center">
              Freelance AI Gigs Explorer
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden text-sm">
                <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Gig</th>
                    <th className="px-3 py-2 text-left font-semibold">Description</th>
                    <th className="px-3 py-2 text-left font-semibold">Who's Good</th>
                    <th className="px-3 py-2 text-left font-semibold">Monthly</th>
                    <th className="px-3 py-2 text-left font-semibold">Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-3 py-2 font-semibold text-slate-900">AI-Assisted Content</td>
                    <td className="px-3 py-2 text-slate-700">Draft blog posts, social media for small biz</td>
                    <td className="px-3 py-2 text-slate-700">Writers, marketers</td>
                    <td className="px-3 py-2 text-emerald-700 font-semibold">$800–$2,500</td>
                    <td className="px-3 py-2 text-slate-700">Beginner</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-3 py-2 font-semibold text-slate-900">Prompt Engineering</td>
                    <td className="px-3 py-2 text-slate-700">Better prompts for ChatGPT, Claude</td>
                    <td className="px-3 py-2 text-slate-700">Comfortable with AI chat</td>
                    <td className="px-3 py-2 text-emerald-700 font-semibold">$1,000–$3,000</td>
                    <td className="px-3 py-2 text-slate-700">Beginner</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-3 py-2 font-semibold text-slate-900">AI Workflow Automation</td>
                    <td className="px-3 py-2 text-slate-700">Simple Zapier + AI for small biz</td>
                    <td className="px-3 py-2 text-slate-700">Organized, likes systems</td>
                    <td className="px-3 py-2 text-emerald-700 font-semibold">$1,200–$4,000</td>
                    <td className="px-3 py-2 text-slate-700">Intermediate</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-3 py-2 font-semibold text-slate-900">AI Data Labeling</td>
                    <td className="px-3 py-2 text-slate-700">Label data for AI models</td>
                    <td className="px-3 py-2 text-slate-700">Detail-oriented</td>
                    <td className="px-3 py-2 text-emerald-700 font-semibold">$600–$1,800</td>
                    <td className="px-3 py-2 text-slate-700">Beginner</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-3 py-2 font-semibold text-slate-900">AI-Enhanced Consulting</td>
                    <td className="px-3 py-2 text-slate-700">Niche consulting w/ AI research</td>
                    <td className="px-3 py-2 text-slate-700">Experienced professionals</td>
                    <td className="px-3 py-2 text-emerald-700 font-semibold">$1,500–$5,000+</td>
                    <td className="px-3 py-2 text-slate-700">Intermediate</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-3 py-2 font-semibold text-slate-900">AI Image/Video Gen</td>
                    <td className="px-3 py-2 text-slate-700">Visuals using Midjourney</td>
                    <td className="px-3 py-2 text-slate-700">Creative people</td>
                    <td className="px-3 py-2 text-emerald-700 font-semibold">$900–$2,800</td>
                    <td className="px-3 py-2 text-slate-700">Beginner</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* How to Get Started */}
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r-lg">
              <h4 className="font-bold text-slate-900 mb-2">How to Get Started</h4>
              <ol className="text-sm text-slate-700 space-y-1">
                <li>1. Review your AI tools resource</li>
                <li>2. Pick 1–2 gigs matching your skills</li>
                <li>3. Practice 1 week, then create Upwork/Fiverr profile</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
