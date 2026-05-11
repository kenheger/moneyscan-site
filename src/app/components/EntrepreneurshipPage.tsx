import { ArrowRight, Lightbulb, CheckCircle } from 'lucide-react';

interface EntrepreneurshipPageProps {
  onNavigate: (page: string) => void;
}

export default function EntrepreneurshipPage({ onNavigate }: EntrepreneurshipPageProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header - Compact like PromptsVault */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Entrepreneurship In the AI Era
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            Do you have a personal skill set that may be a passion or a hobby? Well, good news: AI has effectively lowered the technical barrier to create and monetize your skill set into a viable business on the web.
          </p>
          <p className="text-sm font-bold text-slate-700">Here are some examples:</p>
        </div>
      </section>

      {/* Business Models - Compact */}
      <section className="py-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            
            {/* 1. Niche Educational Curating */}
            <div className="border border-emerald-200 rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 text-xs font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Niche Educational Curating</h3>
                  <p className="text-sm text-slate-700 mb-1">
                    Deep domain expertise → digestible newsletters or courses.
                  </p>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div><span className="font-semibold">AI:</span> LLMs summarize white papers, track sentiment, generate lessons</div>
                    <div><span className="font-semibold">Viable:</span> "Know a boring topic" → subscription service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Aesthetic Content Creation */}
            <div className="border border-blue-200 rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-700 text-xs font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Aesthetic Content Creation</h3>
                  <p className="text-sm text-slate-700 mb-1">
                    Art/design skills → boutique at big-agency frequency.
                  </p>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div><span className="font-semibold">AI:</span> Midjourney/DALL-E, Sora/Runway for images & video</div>
                    <div><span className="font-semibold">Viable:</span> Single artist produces at agency scale</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Specialized Data Storytelling */}
            <div className="border border-purple-200 rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 text-xs font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Specialized Data Storytelling</h3>
                  <p className="text-sm text-slate-700 mb-1">
                    Analytical skills → niche trend-tracking site.
                  </p>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div><span className="font-semibold">AI:</span> Data scraping + Python agents find correlations</div>
                    <div><span className="font-semibold">Viable:</span> You provide opinion + lens, AI provides evidence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Hyper-Local Guide */}
            <div className="border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 text-xs font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Hyper-Local / Community</h3>
                  <p className="text-sm text-slate-700 mb-1">
                    Local expertise → global Micro-SaaS or guides.
                  </p>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div><span className="font-semibold">AI:</span> Chatbots handle 24/7 support, translation for multiple languages</div>
                    <div><span className="font-semibold">Viable:</span> Neighborhood expert scales globally</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Technical Translation */}
            <div className="border border-rose-200 rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-700 text-xs font-bold">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Technical Translation</h3>
                  <p className="text-sm text-slate-700 mb-1">
                    Complex concepts → laypeople (Legal, Medical, Tech).
                  </p>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div><span className="font-semibold">AI:</span> Simplify documents to reading levels or formats (TikTok, infographics)</div>
                    <div><span className="font-semibold">Viable:</span> Bridge between experts and consumers</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Summary Table - Compact */}
      <section className="py-2 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-bold text-slate-900 mb-3 text-sm">Summary of AI-Enabled Business Viability</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-300 rounded-lg">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-2 border-r border-slate-300 font-semibold">Skill</th>
                  <th className="text-left p-2 border-r border-slate-300 font-semibold">AI Toolset</th>
                  <th className="text-left p-2 font-semibold">Business Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-300">
                  <td className="p-2 border-r border-slate-300">Writing/Editing</td>
                  <td className="p-2 border-r border-slate-300">LLMs (GPT-4, Claude)</td>
                  <td className="p-2">Paid Newsletters / Ghostwriting</td>
                </tr>
                <tr className="border-t border-slate-300 bg-slate-50">
                  <td className="p-2 border-r border-slate-300">Visual Arts</td>
                  <td className="p-2 border-r border-slate-300">Image/Video Gen AI</td>
                  <td className="p-2">Digital Assets / Courses</td>
                </tr>
                <tr className="border-t border-slate-300">
                  <td className="p-2 border-r border-slate-300">Analysis</td>
                  <td className="p-2 border-r border-slate-300">Data Modeling / Agents</td>
                  <td className="p-2">Research Reports / Dashboards</td>
                </tr>
                <tr className="border-t border-slate-300 bg-slate-50">
                  <td className="p-2 border-r border-slate-300">Organization</td>
                  <td className="p-2 border-r border-slate-300">Zapier/Make</td>
                  <td className="p-2">Services / Coaching</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Combine your skills with AI. Start with one niche, expand from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => onNavigate('prompts-vault')}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Get AI Prompts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('ai-era-careers')}
              className="bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>AI Careers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}