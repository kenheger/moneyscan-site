import { TrendingUp, MapPin, DollarSign, Briefcase, ArrowRight, Zap } from 'lucide-react';

interface JobHeatmapProps {
  onNavigate: (page: string) => void;
}

// Job market data by region
const jobMarkets = [
  {
    region: "Austin-Round Rock, TX",
    growth: "+14.2%",
    topIndustries: ["AI/ML", "Semiconductors", "Tech Startups"],
    avgSalary: "$98,000",
    costOfLiving: "Medium",
    why: "Silicon Hills — massive tech hub, low taxes, growing fast"
  },
  {
    region: "Raleigh-Cary, NC",
    growth: "+12.8%",
    topIndustries: ["Biotech", "Fintech", "IT Services"],
    avgSalary: "$82,000",
    costOfLiving: "Low-Medium",
    why: "Research Triangle — Google, IBM, Fortune 500 presence"
  },
  {
    region: "Phoenix-Mesa-Scottsdale, AZ",
    growth: "+11.5%",
    topIndustries: ["Tech", "Healthcare", "Remote Work Hubs"],
    avgSalary: "$76,000",
    costOfLiving: "Low",
    why: "Remote work boom, low cost, business-friendly"
  },
  {
    region: "Denver-Aurora-Lakewood, CO",
    growth: "+10.9%",
    topIndustries: ["Tech", "Aerospace", "Outdoor Tech"],
    avgSalary: "$88,000",
    costOfLiving: "Medium-High",
    why: "Quality of life + tech talent magnet"
  },
  {
    region: "Nashville-Davidson, TN",
    growth: "+10.2%",
    topIndustries: ["Healthcare Tech", "Music/Entertainment", "Logistics"],
    avgSalary: "$72,000",
    costOfLiving: "Low",
    why: "No state income tax, booming downtown"
  },
  {
    region: "Charlotte-Concord, NC",
    growth: "+9.8%",
    topIndustries: ["Banking", "Tech", "Energy"],
    avgSalary: "$80,000",
    costOfLiving: "Low-Medium",
    why: "Bank of America HQ, growing tech scene"
  },
  {
    region: "Dallas-Fort Worth, TX",
    growth: "+9.5%",
    topIndustries: ["Tech", "Logistics", "Defense"],
    avgSalary: "$84,000",
    costOfLiving: "Low-Medium",
    why: "No state income tax, major corporate relocations"
  },
  {
    region: "Salt Lake City, UT",
    growth: "+9.1%",
    topIndustries: ["Tech", "Fintech", "Outdoor Industry"],
    avgSalary: "$75,000",
    costOfLiving: "Medium",
    why: "Silicon Slopes — growing startup scene"
  },
  {
    region: "Tampa-St. Petersburg, FL",
    growth: "+8.8%",
    topIndustries: ["Tech", "Finance", "Tourism"],
    avgSalary: "$70,000",
    costOfLiving: "Low",
    why: "No income tax, remote workfriendly"
  },
  {
    region: "Atlanta-Sandy Springs, GA",
    growth: "+8.5%",
    topIndustries: ["Tech", "Film/Media", "Logistics"],
    avgSalary: "$78,000",
    costOfLiving: "Low-Medium",
    why: "Hartsfield-Jackson hub, growing tech corridor"
  }
];

// Fastest growing job categories
const growingJobs = [
  { title: "AI/ML Engineer", growth: "+35%", salary: "$140K-180K", demand: "Very High" },
  { title: "Data Scientist", growth: "+28%", salary: "$110K-150K", demand: "Very High" },
  { title: "Cloud Engineer", growth: "+24%", salary: "$120K-160K", demand: "High" },
  { title: "Cybersecurity Analyst", growth: "+22%", salary: "$100K-140K", demand: "Very High" },
  { title: "Product Manager (Tech)", growth: "+18%", salary: "$110K-150K", demand: "High" },
  { title: "Solutions Architect", growth: "+16%", salary: "$130K-170K", demand: "High" },
  { title: "DevOps Engineer", growth: "+15%", salary: "$110K-145K", demand: "High" },
  { title: "UX Designer", growth: "+12%", salary: "$80K-120K", demand: "Medium" }
];

export default function JobHeatmap({ onNavigate }: JobHeatmapProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-emerald-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI-Era Job Market Heatmap
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            You're a recent college graduate or young professional. This is where the jobs are growing, and what's driving them.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            These 10 metros are seeing the fastest job growth in 2026 — driven by tech, remote work, and business-friendly policies.
          </p>
        </div>
      </section>

      {/* Top Banner */}
      <section className="bg-emerald-50 border-b border-emerald-100 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-emerald-200">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">The AI Era Advantage</h3>
              <p className="text-sm text-slate-700">
                Your location is no longer your career destiny. Remote work + AI tools = access to high-paying opportunities regardless of zip code. <span className="font-semibold">The heatmap shows where the hub jobs are — but you can work from anywhere.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Markets Table */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Top 10 Growth Markets</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700 rounded-tl-lg">Metro Area</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Job Growth</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Top Industries</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Avg Salary</th>
                  <th className="text-center p-3 font-semibold text-slate-700">Cost of Living</th>
                  <th className="text-left p-3 font-semibold text-slate-700 rounded-tr-lg">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {jobMarkets.map((market, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-slate-900">{market.region}</td>
                    <td className="p-3 text-center">
                      <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                        {market.growth}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600">
                      <div className="flex flex-wrap gap-1">
                        {market.topIndustries.map((ind, i) => (
                          <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 text-center font-semibold text-slate-700">{market.avgSalary}</td>
                    <td className="p-3 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        market.costOfLiving === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                        market.costOfLiving === 'Low-Medium' ? 'bg-emerald-50 text-emerald-600' :
                        market.costOfLiving === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {market.costOfLiving}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 text-xs">{market.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fastest Growing Jobs */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Fastest Growing Job Categories</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-3">
            {growingJobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs text-slate-500">{job.salary}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-600">{job.growth}</p>
                  <p className="text-xs text-slate-500">Demand: {job.demand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Job Search Tools */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">AI Tools for Your Job Search</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Resume Optimization</h3>
              <p className="text-sm text-slate-600 mb-3">
                Use AI to tailor your resume to each job. Tools: Teal, Resumewordly, JetBrains.
              </p>
              <a href="https://www.tealhq.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline">
                Try Teal <ArrowRight className="w-3 h-3 inline" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Interview Practice</h3>
              <p className="text-sm text-slate-600 mb-3">
                Mock interviews with AI. Get instant feedback. Tools: Interviewing.io, Pracc.
              </p>
              <a href="https://interviewing.io" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline">
                Try Interviewing.io <ArrowRight className="w-3 h-3 inline" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Salary Negotiation</h3>
              <p className="text-sm text-slate-600 mb-3">
                Research market rates + practice your ask. Tools: Glassdoor, Levels.fyi, ChatGPT.
              </p>
              <a href="https://www.levels.fyi" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline">
                Try Levels.fyi <ArrowRight className="w-3 h-3 inline" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The Heatmap Strategy</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="font-bold text-emerald-800 mb-2">1. Pick Your Hub</h3>
              <p className="text-sm text-slate-700">
                Choose 2-3 metros where you want to land. Focus your networking and applications there.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">2. Remote First</h3>
              <p className="text-sm text-slate-700">
                Apply to remote roles first. Many AI-era jobs are location-agnostic. Save money by staying in a low-COL area while earning hub-level pay.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-2">3. Build Skills</h3>
              <p className="text-sm text-slate-700">
                The fastest-growing jobs above all require AI/tech skills. Start with one. The AI Tools Arsenal can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-gradient-to-br from-emerald-50 via-blue-50 to-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-700 mb-4">
            The AI era lets you compete from anywhere. Start here, then explore real estate opportunities in these growth markets.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => onNavigate('housing-map')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all"
            >
              Housing Map <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}