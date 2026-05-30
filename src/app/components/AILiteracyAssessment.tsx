import { useState } from 'react';
import { Brain, CheckCircle, ArrowRight, Target, TrendingUp, Sparkles, AlertCircle, ChevronRight, RotateCcw } from 'lucide-react';

interface AILiteracyAssessmentProps {
  onNavigate: (page: string) => void;
}

// Assessment questions - Ken's 10-question assessment (1-4 scale)
const questions = [
  {
    id: 1,
    question: "How familiar are you with how modern AI tools (ChatGPT, Claude, Gemini, etc.) basically work?",
    label: "Understanding AI Basics"
  },
  {
    id: 2,
    question: "How often do you currently use AI tools for business tasks (research, writing, analysis, brainstorming)?",
    label: "Business Use Frequency"
  },
  {
    id: 3,
    question: "How confident are you writing clear, effective prompts to get good results from AI?",
    label: "Prompt Writing"
  },
  {
    id: 4,
    question: "How well can you evaluate AI output for accuracy, bias, or outdated information?",
    label: "Evaluating Output"
  },
  {
    id: 5,
    question: "How familiar are you with important AI ethics topics (bias, privacy, transparency)?",
    label: "AI Ethics"
  },
  {
    id: 6,
    question: "How comfortable are you using AI to analyze data or find insights (e.g., summarizing spreadsheets or reports)?",
    label: "Data Analysis"
  },
  {
    id: 7,
    question: "How often do you think critically about when to use AI versus doing the work yourself?",
    label: "Critical Usage"
  },
  {
    id: 8,
    question: "How familiar are you with AI applications in business areas (marketing, finance, operations, customer service)?",
    label: "Business Applications"
  },
  {
    id: 9,
    question: "How confident are you in quickly learning and adapting to new AI tools?",
    label: "Learning Agility"
  },
  {
    id: 10,
    question: "How well do you understand the current limitations of AI (hallucinations, lack of real understanding)?",
    label: "Understanding Limitations"
  }
];

const scoreLabels = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" }
];

const getReadinessLevel = (score: number) => {
  if (score >= 32) {
    return {
      level: "Strong Foundation",
      color: "emerald",
      description: "You're already ahead of most. Focus on advanced integration, AI strategy, and using AI as a powerful co-pilot in real business projects.",
      nextSteps: ["Advanced AI strategy", "Cross-functional integration", "Mentor others"]
    };
  } else if (score >= 24) {
    return {
      level: "Solid Starting Point",
      color: "blue",
      description: "Great base! Strengthen prompt engineering, critical evaluation, and daily hands-on practice in your chosen business field.",
      nextSteps: ["Daily core tool use", "Prompt mastery", "Field-specific AI applications"]
    };
  } else if (score >= 16) {
    return {
      level: "Growing Fast",
      color: "amber",
      description: "Very normal for new grads. Start with consistent daily use of core tools and build prompt + evaluation skills.",
      nextSteps: ["Daily ChatGPT/Claude use", "Basic prompts", "Practice evaluation"]
    };
  } else {
    return {
      level: "Early Stage",
      color: "red",
      description: "Perfect time to begin! Focus on fundamentals — you'll see fast progress with regular practice.",
      nextSteps: ["Sign up for ChatGPT", "Try 10 mins daily", "Learn basic prompts"]
    };
  }
};

export default function AILiteracyAssessment({ onNavigate }: AILiteracyAssessmentProps) {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [currentQuestion]: score };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const maxScore = questions.length * 4;
  const readiness = getReadinessLevel(totalScore);

  const restart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const percentComplete = (Object.keys(answers).length / questions.length) * 100;

  if (!started) {
    return (
      <div className="w-full">
        {/* Hero */}
        <section className="bg-gradient-to-br from-violet-50 via-purple-50 to-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                AI Literacy Assessment
              </h1>
            </div>
            
            <p className="text-lg text-slate-700 mb-4">
              You always need to bring your own creativity and judgement to build a career, 
              but AI brings another level of skills to consider for career development.
            </p>
            <p className="text-md text-slate-600 mb-6">
              Below is a quick 10-question assessment will help you identify your current AI 
              comfort level and point to the most valuable skills to think about right now.
            </p>
            <p className="text-sm font-semibold text-slate-500">
              Instructions: Rate each statement on a scale of 1 to 4<br/>
              1 = Not at all / Never &nbsp;|&nbsp; 4 = Very well / Regularly
            </p>
          </div>
        </section>

        {/* Start Button */}
        <section className="py-10 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <button
              onClick={() => setStarted(true)}
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl"
            >
              Start Assessment
            </button>
            <p className="mt-4 text-sm text-slate-500">
              10 questions · Takes about 2 minutes · Instant results
            </p>
          </div>
        </section>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="w-full">
        {/* Results Hero */}
        <section className="bg-gradient-to-br from-violet-50 via-purple-50 to-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Your AI Readiness Level
            </h1>
            
            <div className={`inline-block px-6 py-3 rounded-xl text-2xl font-bold text-white bg-${readiness.color}-500 mb-4`}>
              {readiness.level}
            </div>
            
            <p className="text-xl text-slate-700 mb-4">
              Total Score: <span className="font-bold">{totalScore}</span> / {maxScore}
            </p>

            <p className="text-lg text-slate-600 mb-6">
              {readiness.description}
            </p>
          </div>
        </section>

        {/* Score Breakdown */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Score Breakdown</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {questions.slice(0, 10).map((q, idx) => (
                  <div key={q.id} className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">{idx + 1}</p>
                    <p className="text-lg font-bold text-slate-900">{answers[idx] || '-'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Recommendation */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border-2 border-violet-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Next Steps Recommendation</h2>
              <p className="text-base text-slate-700 mb-4">
                No matter your score, prioritize these high-impact skills in the next 3–6 months:
              </p>
              <ul className="text-base text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-violet-500" />
                  <span className="font-semibold">Prompt Engineering</span> (the #1 skill)
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-violet-500" />
                  Mastering 3–5 core AI tools
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-violet-500" />
                  Applying AI to your target business area (marketing, finance, etc.)
                </li>
              </ul>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('essential-skills')}
                  className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Explore AI Tools
                </button>
                <button
                  onClick={() => onNavigate('prompts-vault')}
                  className="bg-white border-2 border-violet-500 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Learn Prompts
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Retry */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Assessment
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Question View
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <section className="bg-slate-100 py-3 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between text-sm text-slate-600 mb-1">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(percentComplete)}% complete</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-violet-500 transition-all duration-300"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {scoreLabels.map((score) => (
              <button
                key={score.value}
                onClick={() => handleAnswer(score.value)}
                className="w-full p-4 text-left rounded-xl border-2 border-slate-200 hover:border-violet-400 hover:bg-violet-50 transition-all flex items-center justify-between group"
              >
                <span className="text-lg text-slate-700 group-hover:text-violet-700">
                  {score.label}
                </span>
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  answers[currentQuestion] === score.value 
                    ? 'bg-violet-500 text-white' 
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {score.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}