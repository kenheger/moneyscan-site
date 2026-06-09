import { Shield, Brain, ArrowRight, Target, Briefcase, FileText, BarChart3, Users, AlertTriangle, CheckCircle2, Lightbulb, TrendingDown, TrendingUp } from 'lucide-react';

interface MidCareerAIPageProps {
  onNavigate: (page: string) => void;
}

// Skills and Steps from Ken's content
const coreSkills = [
  {
    title: "Skill A: Contextual Prompting",
    subtitle: "Directing the AI",
    description: "Give Claude, ChatGPT, or Grok a role, a specific dataset, and a clear goal. The better the context, the sharper the output.",
    example: "The Prompt: \"You are a senior strategy consultant analyzing retail trends. Given this sales data, identify our three biggest opportunities and three biggest risks.\""
  },
  {
    title: "Skill B: Natural Language Data Analysis",
    subtitle: "Finding Hidden Trends",
    description: "Take a massive CSV file, competitor report, or market analysis and ask AI to surface what's buried.",
    example: "The Prompt: \"What are the top three hidden trends in this data that our current strategy is missing?\""
  }
];

const juniorBreakthroughSteps = [
  {
    step: "Step 1",
    title: "Arrive with the Executive Summary",
    description: "Rip that 50-page industry report or competitor's financials. Summarize into three key strategic threats and three immediate revenue opportunities.",
    example: "The Prompt: \"Summarize this report into three key strategic threats and three immediate revenue opportunities for a company of our size. Format it as an executive briefing.\""
  },
  {
    step: "Step 2",
    title: "Build Interactive Financial Models",
    description: "Nothing establishes authority faster than financial or operational clarity. Visually demonstrate how a strategy impacts the bottom line.",
    example: "Build custom calculators or simulators to stress-test business ideas right in front of leadership."
  },
  {
    step: "Step 3",
    title: "Use AI as an Executive Board",
    description: "Test your ideas from three distinct perspectives: a conservative CFO, an aggressive CMO, and a cynical COO.",
    example: "\"Review this plan from three distinct perspectives... Give me their objections so I can prepare.\""
  },
  {
    step: "Step 4",
    title: "Bridge Gaps - Connect Dots",
    description: "Translate client/field feedback into actionable documentation. Have field managers record audio memos, then generate formal PRDs.",
    example: "\"Take this raw transcript of client feedback and generate a formal Product Requirements Document (PRD).\""
  },
  {
    step: "Step 5",
    title: "Develop Asynchronous Oversight",
    description: "You don't control everything, but need everything to complete successfully. Use AI to track what's actually happening.",
    example: "Use AI tools to create variance reports and translate chaotic project data into impacts/mitigations."
  },
  {
    step: "Step 6",
    title: "Predictive Risk Scoring",
    description: "CEOs hate surprises, but they don't mind timeline shifts when framed around risk mitigation.",
    example: "\"Calculate the true statistical probability of hitting our live date based on current velocity.\""
  }
];

const atRiskRoles = [
  { role: "Data Entry & Processing", risk: "High", reason: "OCR + AI extraction handles faster" },
  { role: "Basic Accounting/Bookkeeping", risk: "High", reason: "Automation software replaces" },
  { role: "Customer Service (Tier 1)", risk: "High", reason: "Chatbots handle routine inquiries" },
  { role: "Paralegal / Legal Research", risk: "Medium", reason: "AI document review accelerates" },
  { role: "Basic Coding (Junior Dev)", risk: "Medium", reason: "AI code generation tools" },
  { role: "Content Writing (Basic)", risk: "Medium", reason: "LLMs produce standard content" }
];

export default function MidCareerAIPage({ onNavigate }: MidCareerAIPageProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header - REWRITTEN */}
      <section className="bg-gradient-to-br from-blue-50 via-emerald-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Mid-Career AI Leverage
            </h1>
          </div>
          <p className="text-lg text-slate-600 font-medium mb-3">
            Think of AI as an incredibly fast, highly capable chief of staff that needs a sharp, experienced director (you) to give it context, guardrails, and ultimate direction.
          </p>
          <p className="text-sm text-slate-700">
            The secret of the current AI wave? Your language is now the programming language. Bring real insights to problems that have impact — and increase your authority status.
          </p>
        </div>
      </section>

      {/* The Core Skills */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The Core AI Skills to Learn First</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {coreSkills.map((skill, idx) => (
              <div key={idx} className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-slate-900">{skill.title}</h3>
                </div>
                <p className="text-sm font-semibold text-emerald-700 mb-2">{skill.subtitle}</p>
                <p className="text-sm text-slate-600 mb-3">{skill.description}</p>
                <div className="bg-white rounded p-3 border border-emerald-100">
                  <p className="text-xs text-slate-500">{skill.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-slate-900 mb-2">The Reality for Experienced Workers</h2>
                <p className="text-sm text-slate-700">
                  AI doesn't just create new jobs — it devalues some experience-based skills faster than ever. Tasks that took years to master can now be automated. <strong>If you're not actively working WITH AI, you're falling behind.</strong> But your industry knowledge, judgment, and relationships? That's your moat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At-Risk Roles */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Roles Under Pressure</h2>
          <p className="text-sm text-slate-600 mb-4">
            If your current role overlaps with these, it's time to pivot:
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

      {/* Breaking Through Junior Status - THE 6 STEPS */}
      <section className="py-6 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">How to Break Through "Junior Status"</h2>
          <p className="text-sm text-slate-600 mb-2">
            In addition to ChatGPT, Gemini, Claude and Grok, use Project Management tools like Notion AI, Asana Intelligence. Project Data tools like ChatGPT Data Analysis or ClickUp. Record tools like Whisper or Otter.ai.
          </p>
          <p className="text-sm text-slate-600 mb-4">
            Six steps to shift from "doer" to "strategic director" in the AI era:
          </p>
          
          <div className="space-y-3">
            {juniorBreakthroughSteps.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                    <div className="bg-slate-50 rounded p-2 border border-slate-100">
                      <p className="text-xs text-slate-500">{item.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-800 text-lg font-semibold mb-3">
            Your experience is your moat. AI is the bridge. Cross it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="#equities-investing"
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>On to Investing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#ai-tools-arsenal"
              className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md border border-slate-200 inline-flex items-center justify-center gap-2"
            >
              <span>AI Tools</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}