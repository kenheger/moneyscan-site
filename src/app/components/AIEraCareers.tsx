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
            <a 
              href="#job-heatmap"
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left block"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Job Heatmap</span>
              </div>
              <p className="text-xs text-slate-500">Where jobs are growing fastest — 10 top metros</p>
            </a>
            
            <a 
              href="#housing-map"
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left block"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Housing Map</span>
              </div>
              <p className="text-xs text-slate-500">Where to live — buy vs rent by market</p>
            </a>
            
            <a 
              href="#entrepreneurship-page"
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Entrepreneurship</span>
              </div>
              <p className="text-xs text-slate-500">In this AI Era - You could be your own boss</p>
            </a>
            
            <a 
              href="#gig-economy"
              className="bg-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-400 transition-all text-left block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Gig Economy</span>
              </div>
              <p className="text-xs text-slate-500">Explore more hybrid job opportunities</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}