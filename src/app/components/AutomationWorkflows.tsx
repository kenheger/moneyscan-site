import { CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';

interface AutomationWorkflowsProps {
  onNavigate: (page: string) => void;
}

interface CategoryGroup {
  title: string;
  tools: { name: string; description: string; url: string }[];
}

const categories: CategoryGroup[] = [
  {
    title: "Email Drafting",
    tools: [
      { name: "Grammarly", description: "Writing assistant", url: "https://www.grammarly.com/" },
      { name: "Flowrite", description: "AI email writer", url: "https://www.flowrite.com/" },
      { name: "Superhuman", description: "AI compose", url: "https://superhuman.com/" },
      { name: "Compose AI", description: "Email automation", url: "https://www.compose.ai/" },
      { name: "Lavender", description: "Sales email optimizer", url: "https://www.lavender.ai/" },
    ]
  },
  {
    title: "Meeting Notes",
    tools: [
      { name: "Otter.ai", description: "Transcription + summaries", url: "https://otter.ai/" },
      { name: "Fireflies.ai", description: "Meeting transcription", url: "https://fireflies.ai/" },
      { name: "Notion AI", description: "Notes, summaries", url: "https://www.notion.so/product/ai" },
      { name: "Grain", description: "Record + highlight meetings", url: "https://grain.co/" },
    ]
  },
  {
    title: "Report Generation",
    tools: [
      { name: "Jasper", description: "AI content generator", url: "https://www.jasper.ai/" },
      { name: "Copy.ai", description: "Marketing copy", url: "https://www.copy.ai/" },
      { name: "ChatGPT", description: "Custom reports", url: "https://chatgpt.com/" },
      { name: "Claude", description: "Long-form reasoning", url: "https://www.anthropic.com/" },
    ]
  },
  {
    title: "Data Formatting",
    tools: [
      { name: "Parabola", description: "No-code data flows", url: "https://parabola.io/" },
      { name: "OpenRefine", description: "Data cleaning", url: "https://openrefine.org/" },
      { name: "Airtable", description: "Automations", url: "https://airtable.com/" },
      { name: "Zapier", description: "Convert/format via automations", url: "https://zapier.com/" },
    ]
  },
];

export default function AutomationWorkflows({ onNavigate }: AutomationWorkflowsProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 via-orange-100 to-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">4</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Automation & Workflows
            </h1>
          </div>
          <p className="text-base text-slate-600 mb-3">
            Connect AI tools to automate repetitive tasks.
          </p>
          <p className="text-sm text-slate-500 italic">
            If you do it twice, automate it — reclaim your time.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-6 last:mb-0">
              <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  {catIndex + 1}
                </span>
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <a
                    key={toolIndex}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg p-3 border-2 border-orange-100 hover:border-orange-300 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm">{tool.name}</h3>
                      <p className="text-xs text-orange-600">{tool.description}</p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-orange-400 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <h2 className="text-base font-bold text-slate-900 mb-3">Quick Start Tips</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Start with <strong>Grammarly</strong> — it's the easiest email automation to start using today.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Use <strong>Otter.ai</strong> or <strong>Fireflies</strong> to automatically transcribe meetings — no more manual notes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Once you're ready, try <strong>Zapier</strong> or <strong>Make</strong> to connect multiple tools and automate entire workflows.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}