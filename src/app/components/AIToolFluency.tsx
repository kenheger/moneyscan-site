import { CheckCircle, ExternalLink } from 'lucide-react';

interface AIToolFluencyProps {
  onNavigate: (page: string) => void;
}

interface ToolLink {
  name: string;
  useCase: string;
  urls: string[];
}

const tools: ToolLink[] = [
  { name: "ChatGPT", useCase: "Writing", urls: ["https://chatgpt.com/"] },
  { name: "Claude", useCase: "Writing — Anthropic", urls: ["https://www.anthropic.com/"] },
  { name: "Perplexity", useCase: "Research", urls: ["https://www.perplexity.ai/", "https://research.perplexity.ai/"] },
  { name: "DALL·E", useCase: "Image Generation", urls: ["https://openai.com/index/dall-e-3/", "https://openai.com/index/dall-e/"] },
  { name: "Midjourney", useCase: "Image Generation", urls: ["https://www.midjourney.com/"] },
  { name: "Zapier", useCase: "Workflow Automation", urls: ["https://zapier.com/"] },
  { name: "Make", useCase: "Workflow Automation", urls: ["https://www.make.com/"] },
];

export default function AIToolFluency({ onNavigate }: AIToolFluencyProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI Tool Fluency
            </h1>
          </div>
          <p className="text-base text-slate-600 mb-3">
            Master these essential AI tools — start using them today.
          </p>
          <p className="text-sm text-slate-500 italic">
            The difference between a mediocre response and a brilliant one comes down to how well you use these tools.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 border-2 border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{tool.name}</h3>
                    <p className="text-xs text-blue-600 font-medium">{tool.useCase}</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  {tool.urls.map((url, urlIndex) => (
                    <a
                      key={urlIndex}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-slate-600 hover:text-blue-600 hover:underline break-all"
                    >
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      {url.replace('https://', '').replace('www.', '')}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <h2 className="text-base font-bold text-slate-900 mb-3">Quick Start Tips</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Start with <strong>ChatGPT</strong> for general writing and brainstorming — it's the most versatile.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Use <strong>Claude</strong> for longer documents and analysis — it handles context better.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Use <strong>Perplexity</strong> for research — it cites sources and keeps you grounded in facts.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Once you're comfortable, experiment with image generation (DALL·E, Midjourney) and automation (Zapier, Make).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}