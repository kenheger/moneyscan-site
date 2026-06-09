import { TrendingUp, Zap, ArrowRight, CheckCircle } from 'lucide-react';

interface EssentialSkillsProps {
  onNavigate: (page: string) => void;
}

export default function EssentialSkills({ onNavigate }: EssentialSkillsProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Essential AI Skills to Start Right Now
          </h1>
          <p className="text-base text-slate-600 mb-3">
            The AI Era is here. Don't delay — build these skills today.
          </p>
          <p className="text-sm text-slate-500 italic">
           _master these, and you'll be ahead of 80% of workers._
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            
            {/* 1. Prompt Engineering */}
            <div className="bg-white rounded-lg p-4 border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">Prompt Engineering</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Write effective prompts to get useful output from ChatGPT, Claude, Gemini. 
                The difference between a mediocre response and a brilliant one comes down to how you ask.
              </p>
              <div className="bg-emerald-50 rounded-lg p-3 mb-3">
                <p className="text-xs font-medium text-emerald-800 mb-1">Core skills:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Clear, specific instructions</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Context and background info</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Role prompting (act as a...)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Iterative refinement</li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('prompt-engineering')}
                className="text-emerald-600 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                Explore Prompting <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* 2. AI Tool Fluency */}
            <div className="bg-white rounded-lg p-4 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">AI Tool Fluency</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Use AI as a daily productivity tool — drafting emails, researching topics, 
                analyzing data, brainstorming faster than ever before.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <p className="text-xs font-medium text-blue-800 mb-1">Tools to master:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-blue-500" /> ChatGPT / Claude (writing)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-blue-500" /> Perplexity (research)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-blue-500" /> Image generation (DALL-E, Midjourney)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-blue-500" /> Workflow automation</li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('ai-tool-fluency')}
                className="text-blue-600 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                See Top Tools <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* 3. AI-Powered Learning */}
            <div className="bg-white rounded-lg p-4 border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">AI-Powered Learning</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Use AI as your personal tutor. Explain complex topics, create study guides, 
                practice skills, get instant feedback — 24/7.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 mb-3">
                <p className="text-xs font-medium text-purple-800 mb-1">Best uses:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-purple-500" /> Explain like I'm 5</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-purple-500" /> Code tutorials</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-purple-500" /> Practice interviews</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-purple-500" /> Summarize documents</li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('ai-learning-tools')}
                className="text-purple-600 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                Explore Learning Tools <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* 4. Automation & Workflows */}
            <div className="bg-white rounded-lg p-4 border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">Automation & Workflows</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Connect AI tools to automate repetitive tasks. Drafts, reports, 
                data entry — if you do it twice, automate it.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 mb-3">
                <p className="text-xs font-medium text-orange-800 mb-1">Start with:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-orange-500" /> Email drafting</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-orange-500" /> Meeting notes</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-orange-500" /> Report generation</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-orange-500" /> Data formatting</li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('automation-workflows')}
                className="text-orange-600 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                Get Tools <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}