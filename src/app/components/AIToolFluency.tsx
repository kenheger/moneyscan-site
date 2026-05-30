import { CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';

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
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => onNavigate('essential-skills')}
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Essential Skills
          </button>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              AI Tool Fluency
            </h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Master these essential AI tools — start using them today.
          </p>
          <p className="text-md text-slate-500 italic">
            The difference between a mediocre response and a brilliant one comes down to how well you use these tools.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{tool.useCase}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {tool.urls.map((url, urlIndex) => (
                    <a
                      key={urlIndex}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 hover:underline break-all"
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
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Start Tips</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Start with <strong>ChatGPT</strong> for general writing and brainstorming — it's the most versatile.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Use <strong>Claude</strong> for longer documents and analysis — it handles context better.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Use <strong>Perplexity</strong> for research — it cites sources and keeps you grounded in facts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Once you're comfortable, experiment with image generation (DALL·E, Midjourney) and automation (Zapier, Make).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}