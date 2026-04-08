import { CheckCircle, ArrowRight, FileText, Target, BookOpen, TrendingUp, ClipboardList } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';
import { useState } from 'react';

interface AICareerToolsProps {
  onNavigate: (page: string) => void;
}

export default function AICareerTools({ onNavigate }: AICareerToolsProps) {
  const [answers, setAnswers] = useState<number[]>(Array(12).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const questions = [
    "How comfortable are you using AI tools like ChatGPT, Grok, or Claude for everyday tasks (writing, research, brainstorming)?",
    "Can you write an effective, detailed prompt to get useful and accurate output from an AI model?",
    "How familiar are you with basic AI concepts such as machine learning, generative AI, and training data?",
    "Have you used AI to analyze data, create summaries, or automate repetitive work?",
    "How confident are you spotting potential biases, inaccuracies, or hallucinations in AI-generated content?",
    "Do you understand the difference between using AI as a helpful tool versus letting it make important decisions for you?",
    "Have you experimented with AI tools for image, video, or audio generation?",
    "How quickly can you learn and start using a brand-new AI tool when it is released?",
    "How familiar are you with basic privacy, copyright, and ethical considerations when using AI?",
    "Have you used AI tools to help with career-related tasks (resume writing, job search, interview prep)?",
    "How confident are you combining AI tools with your current professional expertise or domain knowledge?",
    "Are you actively experimenting with AI to create side income or improve your work output?"
  ];

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((sum, val) => sum + (val >= 0 ? val : 0), 0);
  };

  const handleSubmit = () => {
    if (answers.every(a => a >= 0)) {
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById('assessment-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const getResultsData = (score: number) => {
    if (score <= 12) {
      return {
        level: "Beginner",
        range: "0–12",
        description: "You're just getting started with AI.",
        recommendations: [
          "Start with Google AI Essentials (free)",
          "Take Coursera \"AI for Everyone\"",
          "Goal this week: Use AI for one daily task"
        ],
        color: "blue"
      };
    } else if (score <= 24) {
      return {
        level: "Intermediate",
        range: "13–24",
        description: "You have a solid foundation and are ready to apply AI in real work.",
        recommendations: [
          "Focus on domain-specific projects",
          "Combine AI with your current job skills",
          "Try a small side project using AI tools"
        ],
        color: "emerald"
      };
    } else {
      return {
        level: "Advanced",
        range: "25–36",
        description: "You're well-positioned to lead or create value with AI.",
        recommendations: [
          "Explore AI consulting, building small tools, or teaching others",
          "Look for entrepreneurial opportunities",
          "Mentor others or experiment with advanced prompting/agent workflows"
        ],
        color: "purple"
      };
    }
  };

  const score = calculateScore();
  const results = getResultsData(score);
  const allAnswered = answers.every(a => a >= 0);

  return (
    <div className="w-full">{/* Hero */}
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              AI Era Career Tools
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Turn AI Awareness into Action and Surplus
          </p>
          <p className="text-base text-slate-600">
            Free tools to assess your skills, build a plan, and develop hybrid AI + human capabilities that fuel your Wealth Engine.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="relative">
                <ClipboardList className="w-6 h-6 text-blue-600" />
                <TrendingUp className="w-3 h-3 text-blue-700 absolute -bottom-0.5 -right-0.5 bg-white rounded-sm border border-blue-200" />
              </div>
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              The best way to future-proof your income is to honestly assess where you stand today and build a clear, repeatable plan to develop hybrid AI + human skills. <strong>These free tools turn awareness into consistent action and surplus that fuels your Wealth Engine.</strong>
            </p>
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Why This Matters</h3>
            <p className="text-slate-700">
              AI is reshaping jobs faster than ever. Regular self-assessment and small, deliberate experiments help you stay adaptable, increase your value, and direct more surplus into long-term compounding.
            </p>
          </div>
        </div>
      </section>

      {/* Available Tools */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Available Tools</h2>

          <div className="space-y-6">
            {/* Tool 1: AI Literacy Assessment */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. AI Literacy Assessment</h3>
                  <p className="text-slate-700 mb-4">
                    A quick 12-question self-check to gauge your current AI comfort level and get personalized next-step recommendations. Takes 5–7 minutes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#assessment"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Take the Interactive AI Literacy Assessment</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 2: Current Skills Map Worksheet */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Current Skills Map Worksheet</h3>
                  <p className="text-slate-700 mb-4">
                    A simple template to map your existing skills against high-growth AI-era opportunities and create a concrete 30–90 day action plan.
                  </p>
                  <button
                    onClick={() => onNavigate('ai-skills-worksheet')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Launch Interactive Worksheet</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tool 3: Recommended Free Learning Resources */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Recommended Free Learning Resources</h3>
                  <p className="text-slate-700 mb-4 font-semibold">
                    Start here before paying for anything:
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Google AI Essentials</strong> – Free, short, practical introduction to using AI daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Coursera: AI for Everyone (by Andrew Ng)</strong> – Excellent overview of how AI works and its impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Microsoft Learn: AI Fundamentals</strong> – Clear, structured modules with hands-on practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>freeCodeCamp AI & Prompt Engineering</strong> – Free courses focused on practical prompting skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Get Started (3 Simple Steps)</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Assess</h3>
              <p className="text-slate-700">
                Take the AI Literacy Assessment
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Map</h3>
              <p className="text-slate-700">
                Complete the Skills Map Worksheet
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Act</h3>
              <p className="text-slate-700">
                Pick one free resource and commit to 5–10 hours this month
              </p>
            </div>
          </div>

          <p className="text-slate-700 text-center">
            Repeat this cycle every 6–12 months. Small, consistent actions compound into higher earnings and stronger surplus for your Wealth Engine.
          </p>
        </div>
      </section>

      {/* AI Literacy Assessment Interactive */}
      <section id="assessment" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Literacy Assessment (Full Interactive Version)</h2>
            <p className="text-lg text-slate-700">
              Answer each question honestly.
            </p>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg inline-block">
              <p className="text-sm text-slate-700 font-semibold">
                <strong>Scoring:</strong> 0 = Not at all / Never | 1 = Somewhat / Occasionally | 2 = Comfortable / Regularly | 3 = Very confident / Frequently
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <p className="text-slate-900 font-semibold mb-4">
                  {index + 1}. {question}
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {[0, 1, 2, 3].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(index, value)}
                      className={`p-3 rounded-lg font-semibold transition-all ${
                        answers[index] === value
                          ? 'bg-blue-600 text-white border-2 border-blue-700'
                          : 'bg-slate-50 text-slate-700 border-2 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center gap-2 ${
                allAnswered
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>Calculate My Score</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            {!allAnswered && (
              <p className="text-sm text-slate-600 mt-3">
                Please answer all 12 questions to see your results
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Assessment Results */}
      {showResults && (
        <section id="assessment-results" className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Your Results</h2>

              <div className="text-center mb-8">
                <div className="inline-block p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl text-white">
                  <p className="text-lg font-semibold mb-2">Your Total Score</p>
                  <p className="text-6xl font-black">{score}</p>
                  <p className="text-2xl font-semibold mt-2">/ 36</p>
                </div>
              </div>

              <div className={`p-6 rounded-xl border-2 mb-6 ${
                results.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                results.color === 'emerald' ? 'bg-emerald-50 border-emerald-200' :
                'bg-purple-50 border-purple-200'
              }`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {results.level} ({results.range})
                </h3>
                <p className="text-lg text-slate-700 mb-4">{results.description}</p>

                <h4 className="text-xl font-bold text-slate-900 mb-3">Recommended Next Steps:</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        results.color === 'blue' ? 'text-blue-600' :
                        results.color === 'emerald' ? 'text-emerald-600' :
                        'text-purple-600'
                      }`} />
                      <span className="text-slate-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-300 rounded-lg text-center">
                <p className="text-slate-700 mb-4">
                  <strong>Now that you know your level,</strong> launch the interactive Skills Map Worksheet to turn this insight into a concrete action plan. Save your progress in-browser.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => onNavigate('ai-skills-worksheet')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-emerald-700 transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>Launch Interactive Worksheet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Important Notes */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 border border-slate-300 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Important Notes</h2>
            <p className="text-slate-700">
              These are general educational tools only. They are not personalized career advice. Your best results come from combining AI skills with your existing domain knowledge and human strengths (empathy, judgment, creativity, physical dexterity).
            </p>
          </div>
        </div>
      </section>

      {/* How This Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Higher earnings become larger, consistent contributions to index funds (VTI/SCHB)"
              onClick={() => onNavigate('wealth-engine')}
              color="emerald"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Better income makes 'pay yourself first' easier and more powerful"
              onClick={() => onNavigate('cash-flow-mastery')}
              color="emerald"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Regular self-assessment builds adaptability and counters inertia"
              onClick={() => onNavigate('behavioral-finance')}
              color="purple"
            />
            <ConnectionCard
              title="AI Era Careers"
              description="Turns concepts into immediate, practical action"
              onClick={() => onNavigate('ai-era-careers')}
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Next Steps
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with the AI Literacy Assessment today.
          </p>
          <p className="text-lg text-blue-100 mb-8">
            Ready to turn AI awareness into surplus?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Return to AI Era Careers</span>
            </button>
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Back to The Wealth Engine</span>
            </button>
          </div>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="text-blue-100 hover:text-white underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Cash Flow Mastery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
