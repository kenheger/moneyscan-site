import { useState } from 'react';
import { Save, Download, ArrowRight, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface SkillRow {
  skills: string;
  strengths: string;
  opportunity: string;
  action: string;
  impact: string;
}

export default function AISkillsMapWorksheet({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [skillRows, setSkillRows] = useState<SkillRow[]>([
    { skills: '', strengths: '', opportunity: '', action: '', impact: '' },
    { skills: '', strengths: '', opportunity: '', action: '', impact: '' },
    { skills: '', strengths: '', opportunity: '', action: '', impact: '' },
  ]);
  
  const [reflections, setReflections] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });
  
  const [showResults, setShowResults] = useState(false);
  const [saved, setSaved] = useState(false);

  const updateSkillRow = (index: number, field: keyof SkillRow, value: string) => {
    const newRows = [...skillRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setSkillRows(newRows);
    setSaved(false);
  };

  const addSkillRow = () => {
    setSkillRows([...skillRows, { skills: '', strengths: '', opportunity: '', action: '', impact: '' }]);
  };

  const saveToLocalStorage = () => {
    const data = { skillRows, reflections, savedAt: new Date().toISOString() };
    localStorage.setItem('ai-skills-map', JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('ai-skills-map');
    if (saved) {
      const data = JSON.parse(saved);
      setSkillRows(data.skillRows || [{ skills: '', strengths: '', opportunity: '', action: '', impact: '' }]);
      setReflections(data.reflections || { q1: '', q2: '', q3: '', q4: '' });
    }
  };

  const completedActions = skillRows.filter(r => r.action && r.action.length > 10).length;
  const totalPotential = skillRows.reduce((acc, row) => {
    const match = row.impact.match(/\$(\d+)/);
    return acc + (match ? parseInt(match[1]) : 0);
  }, 0);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">
                AI Era Skills Map
              </h1>
              <p className="text-xl text-blue-100 font-semibold">
                Turn your current skills into high-growth AI-era opportunities
              </p>
            </div>
            <div className="hidden md:block">
              <WealthEngineIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={saveToLocalStorage}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              {saved ? 'Saved!' : 'Save Progress'}
            </button>
            <button
              onClick={loadFromLocalStorage}
              className="text-sm text-slate-600 hover:text-blue-600 underline"
            >
              Load previous work
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>{completedActions} actions defined</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>${totalPotential.toLocaleString()}+ potential</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Instructions */}
        <div className="mb-8 p-6 bg-white border-2 border-blue-200 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            How This Works
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Map your <strong>current skills</strong> to <strong>AI-augmented opportunities</strong>. The goal: identify where your existing strengths can be amplified by AI to increase your earning power. Each row should represent a skill or experience you have — then define the action and potential impact.
          </p>
        </div>

        {/* Skills Map Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Skills Map</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                    <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                      Current Skills & Experience
                    </th>
                    <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                      Transferable Human Strengths
                    </th>
                    <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                      AI-Augmented Opportunity
                    </th>
                    <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                      Next Action (Next 30–90 Days)
                    </th>
                    <th className="p-3 text-left text-sm font-bold">
                      Potential Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Row */}
                  <tr className="bg-amber-50 border-b border-slate-300">
                    <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                      <span className="text-amber-700 text-xs font-semibold uppercase">Example:</span><br/>
                      <em>Registered Nurse, 8 years clinical</em>
                    </td>
                    <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                      <em>Patient empathy, clinical judgment, calm under pressure</em>
                    </td>
                    <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                      <em>AI-assisted diagnostics + patient education tools</em>
                    </td>
                    <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                      <em>Complete healthcare AI course</em>
                    </td>
                    <td className="p-3 text-sm text-slate-700">
                      <em>+$500–$1,500/mo</em>
                    </td>
                  </tr>

                  {/* User Input Rows */}
                  {skillRows.map((row, index) => (
                    <tr key={index} className="border-b border-slate-300 hover:bg-slate-50">
                      <td className="p-2 border-r border-slate-300 bg-white">
                        <input
                          type="text"
                          value={row.skills}
                          onChange={(e) => updateSkillRow(index, 'skills', e.target.value)}
                          placeholder="e.g., Sales, project management, welding..."
                          className="w-full p-2 text-sm border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </td>
                      <td className="p-2 border-r border-slate-300 bg-white">
                        <input
                          type="text"
                          value={row.strengths}
                          onChange={(e) => updateSkillRow(index, 'strengths', e.target.value)}
                          placeholder="What makes you good at this?"
                          className="w-full p-2 text-sm border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </td>
                      <td className="p-2 border-r border-slate-300 bg-white">
                        <input
                          type="text"
                          value={row.opportunity}
                          onChange={(e) => updateSkillRow(index, 'opportunity', e.target.value)}
                          placeholder="How could AI boost this?"
                          className="w-full p-2 text-sm border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </td>
                      <td className="p-2 border-r border-slate-300 bg-white">
                        <input
                          type="text"
                          value={row.action}
                          onChange={(e) => updateSkillRow(index, 'action', e.target.value)}
                          placeholder="What will you do in 30-90 days?"
                          className="w-full p-2 text-sm border border-slate-200 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </td>
                      <td className="p-2 bg-white">
                        <input
                          type="text"
                          value={row.impact}
                          onChange={(e) => updateSkillRow(index, 'impact', e.target.value)}
                          placeholder="e.g., +$500/mo, new clients..."
                          className="w-full p-2 text-sm border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <button
                onClick={addSkillRow}
                className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
              >
                + Add another skill row
              </button>
            </div>
          </div>
        </div>

        {/* Essential AI Skills to Start Right Now */}
        <div className="mb-8">
          <div className="bg-slate-50 rounded-2xl p-8 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Essential AI Skills to Start Right Now</h2>
            <p className="text-slate-600 mb-6">
              The AI Era is here and it's Real! Don't delay — Explore AI skills today.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">1. Prompt Engineering</h3>
                <p className="text-slate-600 text-sm mb-3">Write effective prompts to get useful output from ChatGPT, Claude, Gemini.</p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); }}
                  className="text-emerald-600 text-sm hover:text-emerald-800 underline"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">2. AI Tool Fluency</h3>
                <p className="text-slate-600 text-sm mb-3">Use AI as a daily productivity tool — drafting, researching, analyzing faster.</p>
                <button
                  onClick={() => onNavigate('ai-career-tools')}
                  className="text-emerald-600 text-sm hover:text-emerald-800 underline"
                >
                  Take AI Literacy Assessment →
                </button>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">3. Critical Evaluation</h3>
                <p className="text-slate-600 text-sm mb-3">Spot AI hallucinations, bias, and know when AI is wrong.</p>
                <a href="#" className="text-emerald-600 text-sm hover:text-emerald-800 underline">Learn More →</a>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">4. Task Automation</h3>
                <p className="text-slate-600 text-sm mb-3">Automate repetitive work — emails, drafts, data processing.</p>
                <button
                  onClick={() => onNavigate('tools-hub')}
                  className="text-emerald-600 text-sm hover:text-emerald-800 underline"
                >
                  Explore Tools Hub →
                </button>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">5. AI-Augmented Decisions</h3>
                <p className="text-slate-600 text-sm mb-3">Use AI for better decision support in career and finances.</p>
                <button
                  onClick={() => onNavigate('ai-era-careers')}
                  className="text-emerald-600 text-sm hover:text-emerald-800 underline"
                >
                  AI Era Careers →
                </button>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">6. Understanding AI Limits</h3>
                <p className="text-slate-600 text-sm mb-3">Know what AI sucks at vs. what it's great at — your edge.</p>
                <a href="#" className="text-emerald-600 text-sm hover:text-emerald-800 underline">Learn More →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Questions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Reflection Questions</h2>
          <p className="text-slate-600 mb-6">
            These questions help crystallize your thinking and identify your highest-leverage actions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
              <label className="block text-slate-900 font-semibold mb-3">
                1. Which of your skills is hardest for AI to replace?
              </label>
              <p className="text-xs text-slate-500 mb-2">Human judgment, creativity, empathy, or physical dexterity</p>
              <textarea
                value={reflections.q1}
                onChange={(e) => setReflections({...reflections, q1: e.target.value})}
                placeholder="Your answer..."
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
              <label className="block text-slate-900 font-semibold mb-3">
                2. Which sector excites you most for the next 10–25 years?
              </label>
              <p className="text-xs text-slate-500 mb-2">Healthcare, Skilled Trades, Tech, Education, Creative?</p>
              <textarea
                value={reflections.q2}
                onChange={(e) => setReflections({...reflections, q2: e.target.value})}
                placeholder="Your answer..."
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
              <label className="block text-slate-900 font-semibold mb-3">
                3. What's one small experiment you can run this month using AI?
              </label>
              <p className="text-xs text-slate-500 mb-2">Try a new AI tool, automate a task, or offer a new service</p>
              <textarea
                value={reflections.q3}
                onChange={(e) => setReflections({...reflections, q3: e.target.value})}
                placeholder="Your answer..."
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
              <label className="block text-slate-900 font-semibold mb-3">
                4. If you increased income by 10–20%, how much more could you invest monthly?
              </label>
              <p className="text-xs text-slate-500 mb-2">This connects to the Wealth Engine</p>
              <textarea
                value={reflections.q4}
                onChange={(e) => setReflections({...reflections, q4: e.target.value})}
                placeholder="e.g., Could invest $300-500 more per month..."
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <button
            onClick={() => setShowResults(!showResults)}
            className="w-full p-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-emerald-700 transition-all"
          >
            {showResults ? 'Hide' : 'Show'} My AI Skills Map Summary
          </button>
          
          {showResults && (
            <div className="mt-4 bg-white rounded-xl shadow-lg border-2 border-emerald-500 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Your AI Skills Map Summary</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-emerald-50 rounded-xl">
                  <div className="text-4xl font-black text-emerald-600">{skillRows.filter(r => r.skills).length}</div>
                  <div className="text-sm text-slate-600 font-semibold">Skills Mapped</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-black text-blue-600">{completedActions}</div>
                  <div className="text-sm text-slate-600 font-semibold">Actions Defined</div>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl font-black text-amber-600">${totalPotential.toLocaleString()}+</div>
                  <div className="text-sm text-slate-600 font-semibold">Monthly Potential</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-3">Next Steps:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Complete at least one action from your Skills Map in the next 30 days</span>
                  </li>
                  {reflections.q4 && (
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Use the <strong>Wealth Engine</strong> to see how extra ${totalPotential}/month compounds over time</span>
                    </li>
                  )}
                  {reflections.q3 && (
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Try your AI experiment: {reflections.q3.slice(0, 50)}{reflections.q3.length > 50 ? '...' : ''}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
