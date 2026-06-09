import { Calculator, Target, TrendingUp, Wrench, ArrowRight } from 'lucide-react';

interface ToolsHubProps {
  onNavigate: (page: string) => void;
}

const tools = [
  {
    title: "AI Essentials",
    description: "Know what time it is in the AI Era - and the kind of skills you should focus on.",
    page: "essential-skills",
    icon: Target,
    color: "purple"
  },
  {
    title: "Compound Calculator",
    description: "See how small, consistent contributions grow over decades. Visualize the power of compounding at the ~10% benchmark.",
    page: "compound-interest-tool",
    icon: TrendingUp,
    color: "emerald"
  },
  {
    title: "Wealth Goal Calculator",
    description: "Reverse-engineer your number. Input your goal, get the monthly save rate needed to hit it.",
    page: "wealth-goal",
    icon: Calculator,
    color: "blue"
  },
  {
    title: "Skilled Trades Database",
    description: "Browse 50+ skilled trades with salary data. Find work that pays well and can't be outsourced to AI.",
    page: "skilled-trades",
    icon: Wrench,
    color: "amber"
  }
];

export default function ToolsHub({ onNavigate }: ToolsHubProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Tools to Use
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            Quantify your path. Find what pays.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            Interactive calculators and databases — free to use.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((tool, idx) => (
              <a
                key={idx}
                href={`#${tool.page}`}
                className="bg-white p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group block"
              >
                <div className={`w-12 h-12 bg-${tool.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <tool.icon className={`w-6 h-6 text-${tool.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {tool.description}
                </p>
                <div className={`inline-flex items-center gap-1 text-${tool.color}-600 text-sm font-medium`}>
                  Launch <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Note */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-700">
            Numbers clarify decisions. Use these tools to quantify your path and stay on track.
          </p>
        </div>
      </section>
    </div>
  );
}