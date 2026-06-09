import { CheckCircle, ArrowLeft } from 'lucide-react';

interface PromptEngineeringProps {
  onNavigate: (page: string) => void;
}

interface Technique {
  title: string;
  description: string;
  prompt: string;
}

const techniques: Technique[] = [
  {
    title: "Clear, Specific Instructions",
    description: "Concise task + constraints",
    prompt: `"You are an expert [field/role]. Produce a [type of output — e.g., 300‑word article, bulleted checklist, Python function] about [topic]. Requirements: [3–5 constraints, e.g., word limit, tone, audience level, must include examples or no jargon]. End with a 2‑sentence summary and one suggested follow‑up question."`
  },
  {
    title: "Context & Background Info",
    description: "Supply relevant data",
    prompt: `"You are an expert [role]. Here's background: [1–3 short facts: project goal, audience, deadline, existing materials]. Using that, create [deliverable]. Use this data: [paste key facts, bullet list, or dataset]. Highlight any assumptions you make and list 3 things you need clarified."`
  },
  {
    title: "Role Prompting",
    description: "Set persona + style",
    prompt: `"Act as a [persona — e.g., product manager, college professor, startup founder] with [X] years experience. Explain [concept/task] to [audience: e.g., 15‑year‑old, junior developer, nontechnical manager] in [format: step‑by‑step, analogy, diagram description]. Use an encouraging tone, include 2 examples, and provide one simple exercise for the reader."`
  },
  {
    title: "Iterative Refinement",
    description: "Improve or tailor output",
    prompt: `Initial prompt:\n"Draft a first version of [deliverable] on [topic]. Requirements: [constraints]."\n\nFollow-up prompts:\n• "Shorten the draft to [N] words while keeping the main argument and 2 examples."\n• "Change tone to [tone] and replace technical terms with plain language; keep structure."\n• "Add a 3‑point checklist for implementation and bold the most critical step."\n• "Create a 1‑paragraph executive summary and a 3‑item action list for a busy manager."`
  },
];

export default function PromptEngineering({ onNavigate }: PromptEngineeringProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 via-emerald-100 to-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => onNavigate('essential-skills')}
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline text-sm"
            >
              ← Back to Essential Skills
            </button>
            <button 
              onClick={() => onNavigate('ai-tool-fluency')}
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline text-sm"
            >
              Next: AI Tool Fluency →
            </button>
          </div>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Prompt Engineering
            </h1>
          </div>
          <p className="text-base text-slate-600 mb-3">
            Write effective prompts to get useful output from AI.
          </p>
          <p className="text-sm text-slate-500 italic">
            The difference between a mediocre response and a brilliant one comes down to how you ask.
          </p>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {techniques.map((technique, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 border-2 border-emerald-100 hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{technique.title}</h3>
                    <p className="text-xs text-emerald-600 font-medium">{technique.description}</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <pre className="text-xs text-slate-600 whitespace-pre-wrap font-mono leading-relaxed">
{technique.prompt}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
            <h2 className="text-base font-bold text-slate-900 mb-3">Quick Start Tips</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Always <strong>be specific</strong> — vague prompts give vague results.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>Role prompting</strong> is powerful — set a persona and audience from the start.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>Iterate</strong> — good output often takes 2–3 refinement rounds.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}