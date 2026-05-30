import { TrendingUp, MapPin, Brain, Calculator, ArrowRight, Briefcase, GraduationCap, Target, Zap } from 'lucide-react';

interface AIEraCareersProps {
  onNavigate: (page: string) => void;
}

const sectors = [
  { name: "AI/ML Engineering", outlook: "Very High", wage: "$140K-180K", growth: "+35%" },
  { name: "Data Science", outlook: "Very High", wage: "$110K-150K", growth: "+28%" },
  { name: "Cloud & DevOps", outlook: "High", wage: "$115K-155K", growth: "+20%" },
  { name: "Cybersecurity", outlook: "Very High", wage: "$100K-140K", growth: "+22%" },
  { name: "Product Management", outlook: "High", wage: "$110K-150K", growth: "+18%" },
  { name: "UX/UI Design", outlook: "Medium", wage: "$80K-120K", growth: "+12%" }
];

const roles = [
  { category: "Tech & Software", percent: "47%", note: "Core AI development, cloud, products" },
  { category: "Healthcare & Bio", percent: "22%", note: "AI diagnostics, drug discovery, healthtech" },
  { category: "Finance & Fintech", percent: "18%", note: "Algorithmic trading, risk, fraud detection" },
  { category: "Manufacturing & Logistics", percent: "13%", note: "Automation, supply chain AI, robotics" }
];

export default function AIEraCareers({ onNavigate }: AIEraCareersProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-emerald-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Careers in the AI Era
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            Wealth-building jobs for the next 25 years.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            AI reshapes work — it automates routine tasks while creating far more opportunities. Position yourself to capture the upside.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
            <h2 className="font-bold text-slate-900 mb-2">First Principle</h2>
            <p className="text-sm text-slate-700">
              <strong>AI will reshape jobs, not eliminate them.</strong> It automates routine tasks while creating net new opportunities that combine AI literacy with irreplaceable human skills: empathy, judgment, creativity. Treat AI as a collaborator to capture the productivity gains that drive higher earnings and wealth building.
            </p>
          </div>
        </div>
      </section>

      {/* Fastest Growing Roles */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Fastest Growing Roles</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-200">
                  <th className="text-left p-3 font-semibold text-slate-700 rounded-tl-lg">Role</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Outlook</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Salary Range</th>
                  <th className="text-center p-3 font-semibold text-slate-700 rounded-tr-lg">Growth</th>
                </tr>
              </thead>
              <tbody>
                {sectors.map((role, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-slate-900">{role.name}</td>
                    <td className="p-3 text-center">
                      <span className={`text-xs px-2 py-1 rounded ${
                        role.outlook === 'Very High' ? 'bg-emerald-100 text-emerald-700' :
                        role.outlook === 'High' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {role.outlook}
                      </span>
                    </td>
                    <td className="p-3 text-center text-slate-600">{role.wage}</td>
                    <td className="p-3 text-center font-semibold text-emerald-600">{role.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where AI Jobs Are */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Where the Jobs Are</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-3">
            {roles.map((role, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900">{role.category}</h3>
                  <span className="text-sm font-bold text-emerald-600">{role.percent}</span>
                </div>
                <p className="text-xs text-slate-500">{role.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starting Out Navigation */}
      <section className="py-6 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Your Path Starting Out</h2>
          <p className="text-sm text-slate-600 mb-4">
            Begin here, then branch into the areas that match your goals:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <button 
              onClick={() => onNavigate('job-heatmap')}
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Job Heatmap</span>
              </div>
              <p className="text-xs text-slate-500">Where jobs are growing fastest — 10 top metros</p>
            </button>
            
            <button 
              onClick={() => onNavigate('housing-map')}
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Housing Map</span>
              </div>
              <p className="text-xs text-slate-500">Where to live — buy vs rent by market</p>
            </button>
            
            <button 
              onClick={() => onNavigate('ai-skills-worksheet')}
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">AI Skills</span>
              </div>
              <p className="text-xs text-slate-500">Map your skills and identify gaps</p>
            </button>
            
            <button 
              onClick={() => onNavigate('ai-tools-arsenal')}
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Tools</span>
              </div>
              <p className="text-xs text-slate-500">AI tools for your job search</p>
            </button>
          </div>
        </div>
      </section>

      {/* Freelance AI Gigs Explorer - replaces Remote Work */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Freelance AI Gigs Explorer</h3>
                <p className="text-slate-700 leading-relaxed">
                  Discover accessible freelance opportunities that combine basic AI tools with your current skills. Most gigs require only prompting skills and 5–10 hours per week to start.
                </p>
              </div>
            </div>

            {/* Gigs Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden text-sm">
                <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Gig</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                    <th className="px-4 py-3 text-left font-semibold">Who It's Good For</th>
                    <th className="px-4 py-3 text-left font-semibold">Monthly</th>
                    <th className="px-4 py-3 text-left font-semibold">Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">AI-Assisted Content</td>
                    <td className="px-4 py-3 text-slate-700">Draft blog posts, social media for small biz</td>
                    <td className="px-4 py-3 text-slate-700">Writers, marketers</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">$800–$2,500</td>
                    <td className="px-4 py-3 text-slate-700">Beginner</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">Prompt Engineering</td>
                    <td className="px-4 py-3 text-slate-700">Better prompts for ChatGPT, Claude</td>
                    <td className="px-4 py-3 text-slate-700">Comfortable with AI chat</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">$1,000–$3,000</td>
                    <td className="px-4 py-3 text-slate-700">Beginner</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">AI Workflow Automation</td>
                    <td className="px-4 py-3 text-slate-700">Simple Zapier + AI for small biz</td>
                    <td className="px-4 py-3 text-slate-700">Organized, likes systems</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">$1,200–$4,000</td>
                    <td className="px-4 py-3 text-slate-700">Intermediate</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">AI Data Labeling</td>
                    <td className="px-4 py-3 text-slate-700">Label data for AI models</td>
                    <td className="px-4 py-3 text-slate-700">Detail-oriented</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">$600–$1,800</td>
                    <td className="px-4 py-3 text-slate-700">Beginner</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">AI-Enhanced Consulting</td>
                    <td className="px-4 py-3 text-slate-700">Niche consulting w/ AI research</td>
                    <td className="px-4 py-3 text-slate-700">Experienced professionals</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">$1,500–$5,000+</td>
                    <td className="px-4 py-3 text-slate-700">Intermediate</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">AI Image/Video Gen</td>
                    <td className="px-4 py-3 text-slate-700">Visuals using Midjourney</td>
                    <td className="px-4 py-3 text-slate-700">Creative people</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">$900–$2,800</td>
                    <td className="px-4 py-3 text-slate-700">Beginner</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* How to Get Started */}
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <h4 className="font-bold text-slate-900 mb-3">How to Get Started</h4>
              <ol className="text-sm text-slate-700 space-y-1">
                <li>1. Take AI Literacy Assessment to identify your level</li>
                <li>2. Pick 1–2 gigs matching your skills</li>
                <li>3. Practice 1 week, then create Upwork/Fiverr profile</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}