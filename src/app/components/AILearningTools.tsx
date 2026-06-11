import { CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';

interface AILearningToolsProps {
  onNavigate: (page: string) => void;
}

interface CategoryGroup {
  title: string;
  tools: { name: string; description: string; url: string }[];
}

const categories: CategoryGroup[] = [
  {
    title: "Explain Things Like I'm 15",
    tools: [
      { name: "Khanmigo", description: "Khan Academy's AI tutor", url: "https://khanmigo.ai/" },
      { name: "Explainpaper", description: "Paper explainer", url: "https://explainpaper.com/" },
      { name: "Wolfram Alpha", description: "Step-by-step STEM explanations", url: "https://www.wolframalpha.com/" },
    ]
  },
  {
    title: "Code Tutorials",
    tools: [
      { name: "GitHub Copilot", description: "AI pair programmer", url: "https://github.com/features/copilot/" },
      { name: "Replit", description: "Ghostwriter & learn", url: "https://replit.com/" },
      { name: "Codecademy", description: "AI-assisted lessons", url: "https://www.codecademy.com/" },
      { name: "Stack Overflow", description: "AI & documentation", url: "https://stackoverflow.com/" },
    ]
  },
  {
    title: "Practice Interviews",
    tools: [
      { name: "Pramp", description: "Mock interviews", url: "https://www.pramp.com/" },
      { name: "Interviewing.io", description: "Mock interviews with real engineers", url: "https://interviewing.io/" },
      { name: "HireVue", description: "AI practice + feedback", url: "https://www.hirevue.com/" },
      { name: "LeetCode", description: "Mock coding interviews", url: "https://leetcode.com/" },
    ]
  },
  {
    title: "Summarize Documents",
    tools: [
      { name: "Perplexity", description: "Research & summarize", url: "https://www.perplexity.ai/" },
      { name: "Scholarcy", description: "Document summarizer", url: "https://www.scholarcy.com/" },
      { name: "SMMRY", description: "Text summarizer", url: "https://smmry.com/" },
      { name: "Notion AI", description: "Summaries inside notes", url: "https://www.notion.so/product/ai" },
    ]
  },
];

export default function AILearningTools({ onNavigate }: AILearningToolsProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 via-purple-100 to-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI-Powered Learning
            </h1>
          </div>
          <p className="text-base text-slate-600 mb-3">
            Use AI as your personal tutor — anytime, anywhere.
          </p>
          <p className="text-sm text-slate-500 italic">
            Explain complex topics, create study guides, practice skills, get instant feedback.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-6 last:mb-0">
              <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
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
                    className="bg-white rounded-lg p-3 border-2 border-purple-100 hover:border-purple-300 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm">{tool.name}</h3>
                      <p className="text-xs text-purple-600">{tool.description}</p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-purple-400 flex-shrink-0" />
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
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
            <h2 className="text-base font-bold text-slate-900 mb-3">Quick Start Tips</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Start with <strong>Khanmigo</strong> or <strong>Explainpaper</strong> for easy-to-understand explanations of any topic.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Use <strong>Perplexity</strong> to quickly summarize long articles or documents.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Practice interviews with <strong>Pramp</strong> or <strong>Interviewing.io</strong> — free mock practice.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}