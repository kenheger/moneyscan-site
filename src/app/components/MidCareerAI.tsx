import { Shield, TrendingUp, Brain, ArrowRight, Target, AlertTriangle, Briefcase, UserCheck, GraduationCap, Calculator, Scale, Building2, LineChart } from 'lucide-react';

interface MidCareerAIPageProps {
  onNavigate: (page: string) => void;
}

const atRiskRoles = [
  { role: "Data Entry & Processing", risk: "High", reason: "OCR + AI extraction handles faster" },
  { role: "Basic Accounting/Bookkeeping", risk: "High", reason: "Automation software replaces" },
  { role: "Customer Service (Tier 1)", risk: "High", reason: "Chatbots handle routine inquiries" },
  { role: "Paralegal / Legal Research", risk: "Medium", reason: "AI document review accelerates" },
  { role: "Basic Coding (Junior Dev)", risk: "Medium", reason: "AI code generation tools" },
  { role: "Content Writing (Basic)", risk: "Medium", reason: "LLMs produce standard content" }
];

const defensePaths = [
  {
    title: "Reskill Into AI-Adjacent Roles",
    icon: Brain,
    description: "Use your industry knowledge + learn AI tools. Become the person who works WITH AI, not against it.",
    example: "Marketing manager → AI Marketing Specialist"
  },
  {
    title: "Pivot to Advisory & Management",
    icon: UserCheck,
    description: "Experience matters where judgment matters. Move toward client relationships, team leadership, strategy.",
    example: "Accountant → Financial Advisor / Controller"
  },
  {
    title: "Leverage Into Consulting",
    icon: Briefcase,
    description: "Your years of expertise have value. Consult on what AI can't replicate: relationships, context, nuance.",
    example: "Operations → Process Optimization Consultant"
  },
  {
    title: "Teach & Mentor",
    icon: GraduationCap,
    description: "Companies need internal trainers. Train others on what you've mastered — including AI literacy.",
    example: "Manager → Corporate Training Lead"
  }
];

export default function MidCareerAIPage({ onNavigate }: MidCareerAIPageProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-emerald-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Career Defense in the AI Era
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            You've built expertise. Now protect and extend it.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            AI isn't just affecting new grads. It's disrupting experienced workers too. Here's how to defend and grow your career.
          </p>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-slate-900 mb-2">The Reality for Experienced Workers</h2>
                <p className="text-sm text-slate-700">
                  AI doesn't just create new jobs — it devalues some experience-based skills faster than ever before. Tasks that took years to master can now be automated. <strong>If you're not actively working WITH AI, you're falling behind.</strong> But your industry knowledge, judgment, and relationships? That's your moat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At-Risk Roles */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Roles Under Pressure</h2>
          <p className="text-sm text-slate-600 mb-4">
            If your current role overlaps with these, consider your defense path:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-200">
                  <th className="text-left p-3 font-semibold text-slate-700 rounded-tl-lg">Role Type</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Risk Level</th>
                  <th className="text-left p-3 font-semibold text-slate-700 rounded-tr-lg">Why</th>
                </tr>
              </thead>
              <tbody>
                {atRiskRoles.map((role, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-slate-900">{role.role}</td>
                    <td className="p-3 text-center">
                      <span className={`text-xs px-2 py-1 rounded ${
                        role.risk === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {role.risk}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 text-xs">{role.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Your Defense Paths */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Your Defense Paths</h2>
          <p className="text-sm text-slate-600 mb-4">
            Four ways to turn experience into AI-proof advantage:
          </p>
          
          <div className="grid md:grid-cols-2 gap-3">
            {defensePaths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-orange-600" />
                    <h3 className="font-bold text-slate-900">{path.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{path.description}</p>
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Example:</span> {path.example}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investing Section */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Investing</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button 
              onClick={() => onNavigate('equities-investing')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Traditional + AI Platforms</h3>
                  <p className="text-sm text-slate-600">Roboadvisors, AI stock picking, ETFs</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Housing Section */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Housing</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button 
              onClick={() => onNavigate('house-hacking')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Hacking</h3>
                  <p className="text-sm text-slate-600">House hacking strategies</p>
                </div>
              </div>
            </button>
            <button 
              onClick={() => onNavigate('real-estate-paths')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Passive</h3>
                  <p className="text-sm text-slate-600">REITs, crowdfunding</p>
                </div>
              </div>
            </button>
            <button 
              onClick={() => onNavigate('build-your-own-home')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Build Your Own</h3>
                  <p className="text-sm text-slate-600">BRICS, exurb investing</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-6 bg-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-4 border border-orange-200">
            <h2 className="font-bold text-slate-900 mb-2">Start With the Baseline</h2>
            <p className="text-sm text-slate-600 mb-3">
              Take the AI Literacy Assessment to understand where you stand. Your score identifies the gaps to close.
            </p>
            <button 
              onClick={() => onNavigate('ai-literacy-assessment')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
            >
              Take AI Literacy Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Note */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">What About Your Skills?</h3>
            <p className="text-sm text-slate-700">
              Your industry experience is an asset — but only if paired with AI fluency. Use the AI Skills Worksheet to map what you know vs. what you need to learn. The goal isn't becoming a coder. It's knowing enough to collaborate with AI in your domain.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-slate-600 mb-3">
              The experienced workers who thrive aren't the ones who ignore AI. They're the ones who pair decades of knowledge with AI tools.
            </p>
            <p className="text-sm font-semibold text-slate-700">
              Your experience is your moat. AI is the bridge. Cross it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}