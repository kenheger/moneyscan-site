import { useState } from 'react';
import { Shield, AlertTriangle, TrendingUp, CheckCircle, Zap, ArrowRight, Target, Briefcase, Brain } from 'lucide-react';

interface JobData {
  title: string;
  risk: number; // 1-10 scale
  automatedTasks: string[];
  humanMoat: string[];
  pivotPaths: { title: string; why: string; salary: string }[];
  skills: { name: string; why: string; salaryImpact: string }[];
}

const jobData: Record<string, JobData> = {
  'software-developer': {
    title: 'Software Developer',
    risk: 5,
    automatedTasks: ['Writing boilerplate code', 'Basic debugging', 'Simple CRUD operations', 'Code documentation'],
    humanMoat: ['System architecture at scale', 'Understanding business context', 'Security considerations', 'Leading technical decisions'],
    pivotPaths: [
      { title: 'AI Product Manager', why: 'Leverages tech fluency + shifts to human strategy', salary: '$120K → $145K' },
      { title: 'Technical Founder', why: 'Builds products, not just features', salary: 'Equity upside' }
    ],
    skills: [
      { name: 'AI-Augmented Coding', why: 'Use AI to code 2-3x faster, not replace you', salaryImpact: 'Boost output → higher value' },
      { name: 'Prompt Engineering for Devs', why: 'Turn natural language into working code', salaryImpact: 'Expand your reach' },
      { name: 'System Design & Architecture', why: 'AI struggles with large-scale design', salaryImpact: 'Hard-to-automate expertise' },
    ],
  },
  'data-analyst': {
    title: 'Data Analyst',
    risk: 7,
    automatedTasks: ['Writing SQL queries', 'Data cleaning', 'Basic reporting', 'Creating standard dashboards'],
    humanMoat: ['Explaining data to executives', 'Deciding which problems matter', 'Stakeholder communication', 'Business context'],
    pivotPaths: [
      { title: 'AI Product Manager', why: 'Data fluency + human strategy focus', salary: '$95K → $130K' },
      { title: 'Analytics Translator', why: 'Bridge between data teams and business', salary: '$90K → $120K' }
    ],
    skills: [
      { name: 'AI Data Synthesis', why: 'Turn raw data into narratives, not just tables', salaryImpact: 'Higher-level insights' },
      { name: 'Automated Data Pipelines', why: 'Build AI-powered ETL systems', salaryImpact: 'Scale your work' },
      { name: 'Visual Storytelling', why: 'AI can crunch, not convince', salaryImpact: 'Communication differentiates' },
    ],
  },
  'marketing-manager': {
    title: 'Marketing Manager',
    risk: 6,
    automatedTasks: ['Writing marketing copy', 'Social media scheduling', 'Basic email campaigns', 'Performance reporting'],
    humanMoat: ['Brand strategy', 'Creative direction', 'Campaign strategy', 'Client relationships'],
    pivotPaths: [
      { title: 'AI Marketing Strategist', why: 'Human strategy + AI execution', salary: '$85K → $115K' },
      { title: 'Growth Lead', why: 'Data-driven growth + creative testing', salary: '$90K → $130K' }
    ],
    skills: [
      { name: 'AI Content Strategy', why: 'AI creates content, strategy wins markets', salaryImpact: 'Creative direction' },
      { name: 'Prompt Engineering for Copy', why: 'Scale content production 10x', salaryImpact: 'Volume + quality' },
      { name: 'Automated Campaign Optimization', why: 'AI manages bid/placement in real-time', salaryImpact: 'Efficiency gains' },
    ],
  },
  'project-manager': {
    title: 'Project Manager',
    risk: 7,
    automatedTasks: ['Status updates', 'Schedule tracking', 'Basic resource allocation', 'Documentation'],
    humanMoat: ['Stakeholder communication', 'Managing conflicts', 'Team motivation', 'Strategic planning'],
    pivotPaths: [
      { title: 'AI Operations Lead', why: 'Human oversight + AI systems', salary: '$80K → $110K' },
      { title: 'Product Manager', why: 'Strategy + execution', salary: '$90K → $130K' }
    ],
    skills: [
      { name: 'AI-Augmented Project Management', why: 'AI handles status, you handle people', salaryImpact: 'More bandwidth' },
      { name: 'Automated Risk Detection', why: 'Predict blockers before they happen', salaryImpact: 'Proactive value' },
      { name: 'Stakeholder Communication', why: 'AI writes updates, not relationships', salaryImpact: 'Human touch matters' },
    ],
  },
  'accountant': {
    title: 'Accountant / Bookkeeper',
    risk: 7,
    automatedTasks: ['Data entry', 'Basic reconciliation', 'Tax form preparation', 'Standard reporting'],
    humanMoat: ['Tax strategy', 'Financial advisory', 'Client relationships', 'Audit defense'],
    pivotPaths: [
      { title: 'Financial Planner', why: 'Advisory + wealth context', salary: '$70K → $100K' },
      { title: 'AI Tax Specialist', why: 'AI research + human strategy', salary: '$75K → $105K' }
    ],
    skills: [
      { name: 'AI Tax Research', why: 'AI finds deductions faster', salaryImpact: 'Better outcomes for clients' },
      { name: 'Automated Reconciliation', why: 'AI catches anomalies', salaryImpact: 'Efficiency + accuracy' },
      { name: 'Financial Advisory', why: 'AI prepares reports, you advise', salaryImpact: 'Relationship value' },
    ],
  },
  'graphic-designer': {
    title: 'Graphic Designer',
    risk: 7,
    automatedTasks: ['Creating standard graphics', 'Batch resizing', 'Template-based designs', 'Basic photo editing'],
    humanMoat: ['Brand identity design', 'Art direction', 'Creative strategy', 'Client presentation'],
    pivotPaths: [
      { title: 'Brand Strategist', why: 'Creative + business strategy', salary: '$65K → $95K' },
      { title: 'AI Art Director', why: 'Human creative direction + AI tools', salary: '$70K → $110K' }
    ],
    skills: [
      { name: 'AI Image Generation', why: 'Speed up ideation and iterations', salaryImpact: '10x output' },
      { name: 'Brand Strategy', why: 'AI follows rules, you set them', salaryImpact: 'Strategic value' },
      { name: 'Motion & Interactive Design', why: 'AI weak here', salaryImpact: 'Specialization premium' },
    ],
  },
  'customer-service': {
    title: 'Customer Service Rep',
    risk: 8,
    automatedTasks: ['Answering FAQs', 'Basic troubleshooting', 'Order processing', 'Ticket routing'],
    humanMoat: ['Handling escalations', 'Empathy and emotional support', 'Complex problem solving', 'Building loyalty'],
    pivotPaths: [
      { title: 'AI Chatbot Trainer', why: 'Train AI agents, not answer FAQs', salary: '$55K → $85K' },
      { title: 'Customer Success Manager', why: 'Retention + upsell', salary: '$60K → $95K' }
    ],
    skills: [
      { name: 'AI Chatbot Management', why: 'Train and improve AI agents', salaryImpact: 'Supervisor value' },
      { name: 'Escalation Excellence', why: 'Handle what AI cannot', salaryImpact: 'Premium support' },
      { name: 'Process Improvement', why: 'Design systems that scale', salaryImpact: 'Operational value' },
    ],
  },
  'sales-rep': {
    title: 'Sales Representative',
    risk: 5,
    automatedTasks: ['Lead research', 'Basic follow-ups', 'Scheduling demos', 'CRM updates'],
    humanMoat: ['Negotiation', 'Building relationships', 'Closing deals', 'Strategic account development'],
    pivotPaths: [
      { title: 'Enterprise Account Executive', why: 'Strategic accounts, bigger deals', salary: '$75K → $140K' },
      { title: 'Sales Enablement Lead', why: 'Enable other reps with AI tools', salary: '$80K → $110K' }
    ],
    skills: [
      { name: 'AI Lead Research', why: 'AI finds prospects, you close', salaryImpact: 'Better pipeline' },
      { name: 'Automated Follow-ups', why: 'Never miss a lead', salaryImpact: 'Conversion boost' },
      { name: 'Negotiation Mastery', why: 'AI cannot read people', salaryImpact: 'Hard-to-replace skill' },
    ],
  },
  'hr-generalist': {
    title: 'HR Generalist',
    risk: 6,
    automatedTasks: ['Resume screening', 'Benefits administration', 'Policy communications', 'Employee onboarding paperwork'],
    humanMoat: ['Employee relations', 'Culture building', 'Performance coaching', 'Strategic workforce planning'],
    pivotPaths: [
      { title: 'People Operations Lead', why: 'Strategy + AI systems', salary: '$70K → $100K' },
      { title: 'AI HR Specialist', why: 'AI tools + human touch', salary: '$65K → $95K' }
    ],
    skills: [
      { name: 'AI Recruitment Screening', why: 'Speed resume review', salaryImpact: 'More placements' },
      { name: 'Employee Engagement', why: 'AI measures, you build culture', salaryImpact: 'Retention value' },
      { name: 'Compliance Automation', why: 'Stay compliant at scale', salaryImpact: 'Risk mitigation' },
    ],
  },
  'writer': {
    title: 'Writer / Content Creator',
    risk: 7,
    automatedTasks: ['Research', 'First drafts', 'SEO optimization', 'Social media posts'],
    humanMoat: ['Brand voice', 'Long-form storytelling', 'Strategic messaging', 'Editorial direction'],
    pivotPaths: [
      { title: 'Content Strategist', why: 'Strategy + AI tools', salary: '$60K → $90K' },
      { title: 'Ghostwriter / Thought Leader', why: 'Voice + credibility', salary: '$80K → $150K' }
    ],
    skills: [
      { name: 'AI Research & Outlining', why: 'Speed research 10x', salaryImpact: 'More output' },
      { name: 'SEO + Distribution', why: 'Get found', salaryImpact: 'Reach' },
      { name: 'Brand Voice Mastery', why: 'AI mimics, you define', salaryImpact: 'Unique value' },
    ],
  },
  'teacher': {
    title: 'Teacher / Educator',
    risk: 4,
    automatedTasks: ['Grading', 'Lesson planning', 'Basic explanations', 'Quiz creation'],
    humanMoat: ['Mentoring students', 'Handling classroom dynamics', 'Emotional support', 'Custom adaption'],
    pivotPaths: [
      { title: 'AI Learning Designer', why: 'Create AI-enhanced curricula', salary: '$65K → $95K' },
      { title: 'Educational Consultant', why: 'Advise schools on AI integration', salary: '$70K → $110K' }
    ],
    skills: [
      { name: 'AI-Assisted Lesson Planning', why: 'Personalize at scale', salaryImpact: 'Better outcomes' },
      { name: 'Adaptive Learning Design', why: 'AI adapts to students', salaryImpact: 'Differentiation' },
      { name: 'Student Coaching', why: 'AI assists, you mentor', salaryImpact: 'Relationships' },
    ],
  },
  'operations': {
    title: 'Operations Manager',
    risk: 6,
    automatedTasks: ['Reporting', 'Basic scheduling', 'Inventory tracking', 'Process documentation'],
    humanMoat: ['Strategic planning', 'Supplier relationships', 'Team leadership', 'Crisis management'],
    pivotPaths: [
      { title: 'Supply Chain Analyst', why: 'AI + logistics expertise', salary: '$75K → $105K' },
      { title: 'AI Operations Lead', why: 'Human oversight + AI optimization', salary: '$85K → $120K' }
    ],
    skills: [
      { name: 'AI Process Automation', why: 'Streamline workflows', salaryImpact: 'Cost savings' },
      { name: 'Predictive Analytics', why: 'Forecast demand', salaryImpact: 'Planning value' },
      { name: 'Supply Chain Optimization', why: 'AI optimizes routes', salaryImpact: 'Efficiency' },
    ],
  },
  'legal-assistant': {
    title: 'Legal Assistant / Paralegal',
    risk: 7,
    automatedTasks: ['Document review', 'Filing paperwork', 'Research', 'Contract formatting'],
    humanMoat: ['Legal strategy', 'Client communication', 'Case preparation', 'Trial support'],
    pivotPaths: [
      { title: 'Legal Tech Specialist', why: 'Law + AI tools', salary: '$60K → $90K' },
      { title: 'Compliance Officer', why: 'Regulatory expertise', salary: '$70K → $105K' }
    ],
    skills: [
      { name: 'AI Legal Research', why: 'Find case law faster', salaryImpact: 'Better research' },
      { name: 'Contract Automation', why: 'Speed document creation', salaryImpact: 'More capacity' },
      { name: 'Legal Strategy', why: 'AI assists, you decide', salaryImpact: 'Advisory value' },
    ],
  },
  'financial-analyst': {
    title: 'Financial Analyst',
    risk: 7,
    automatedTasks: ['Data compilation', 'Basic modeling', 'Report generation', 'Excel manipulation'],
    humanMoat: ['Investment judgment', 'Client advice', 'Risk assessment', 'Strategic recommendations'],
    pivotPaths: [
      { title: 'Wealth Advisor', why: 'Client relationships + financial expertise', salary: '$80K → $130K' },
      { title: 'FinTech Consultant', why: 'Finance + technology', salary: '$90K → $140K' }
    ],
    skills: [
      { name: 'AI Financial Modeling', why: 'Speed analysis 10x', salaryImpact: 'More coverage' },
      { name: 'Automated Reporting', why: 'Real-time dashboards', salaryImpact: 'Better insights' },
      { name: 'Investment Research', why: 'AI assists, you advise', salaryImpact: 'Client value' },
    ],
  },
  'administrative-assistant': {
    title: 'Administrative Assistant',
    risk: 8,
    automatedTasks: ['Email management', 'Calendar scheduling', 'Data entry', 'Document preparation'],
    humanMoat: ['Executive support', 'Event planning', 'Client relations', 'Strategic coordination'],
    pivotPaths: [
      { title: 'Executive Assistant', why: 'Senior leadership support', salary: '$55K → $85K' },
      { title: 'Operations Coordinator', why: 'Strategic support + AI tools', salary: '$60K → $90K' }
    ],
    skills: [
      { name: 'AI Calendar Management', why: 'Optimize scheduling', salaryImpact: 'More efficiency' },
      { name: 'Automated Workflows', why: 'Streamline processes', salaryImpact: 'Scale support' },
      { name: 'Strategic Coordination', why: 'AI assists, you lead', salaryImpact: 'Visibility value' },
    ],
  },
  'copywriter': {
    title: 'Copywriter',
    risk: 7,
    automatedTasks: ['Ad copy', 'Product descriptions', 'Email sequences', 'Landing page copy'],
    humanMoat: ['Brand voice', 'Conversion copywriting', 'Strategic messaging', 'Creative direction'],
    pivotPaths: [
      { title: 'Conversion Copywriter', why: 'High-impact direct response', salary: '$65K → $120K' },
      { title: 'Brand Strategist', why: 'Creative + business', salary: '$75K → $110K' }
    ],
    skills: [
      { name: 'AI Copy Acceleration', why: 'Generate variations fast', salaryImpact: 'More output' },
      { name: 'A/B Testing Mastery', why: 'Data-driven creative', salaryImpact: 'Proven results' },
      { name: 'Strategic Positioning', why: 'AI assists, you decide', salaryImpact: 'Premium value' },
    ],
  },
  'IT-support': {
    title: 'IT Support Specialist',
    risk: 7,
    automatedTasks: ['Password resets', 'Basic troubleshooting', 'Ticket routing', 'Documentation'],
    humanMoat: ['Complex problem solving', 'Security incidents', 'User training', 'System architecture'],
    pivotPaths: [
      { title: 'Cybersecurity Analyst', why: 'Growing field, human judgment', salary: '$70K → $120K' },
      { title: 'AI IT Operations', why: 'Human + AI monitoring', salary: '$80K → $115K' }
    ],
    skills: [
      { name: 'AI Troubleshooting', why: 'Faster diagnosis', salaryImpact: 'More tickets resolved' },
      { name: 'Automated Monitoring', why: 'AI catches issues', salaryImpact: 'Proactive support' },
      { name: 'Security Awareness', why: 'AI assists, you defend', salaryImpact: 'Critical value' },
    ],
  },
  'realtor': {
    title: 'Real Estate Agent',
    risk: 6,
    automatedTasks: ['Property listings', 'Market analysis', 'Document preparation', 'Virtual tours'],
    humanMoat: ['Negotiation', 'Building client trust', 'Market knowledge', 'Local expertise'],
    pivotPaths: [
      { title: 'Luxury Real Estate', why: 'Relationships + expertise', salary: '$80K → $200K+' },
      { title: 'Property Investor', why: 'Build equity portfolio', salary: 'Variable + equity' }
    ],
    skills: [
      { name: 'AI Property Matching', why: 'Better client matches', salaryImpact: 'More closes' },
      { name: 'Virtual Tour Creation', why: 'Modern marketing', salaryImpact: 'More reach' },
      { name: 'Market Analysis', why: 'AI assists, you advise', salaryImpact: 'Client value' },
    ],
  },
  'insurance-agent': {
    title: 'Insurance Agent',
    risk: 6,
    automatedTasks: ['Quote generation', 'Policy comparisons', 'Application processing', 'Renewal reminders'],
    humanMoat: ['Claims advocacy', 'Risk assessment', 'Client relationships', 'Policy customization'],
    pivotPaths: [
      { title: 'Financial Advisor', why: 'Expanded product suite', salary: '$70K → $130K' },
      { title: 'Benefits Consultant', why: 'Employer-focused', salary: '$75K → $115K' }
    ],
    skills: [
      { name: 'AI Quote Automation', why: 'Faster quotes', salaryImpact: 'More applications' },
      { name: 'Risk Analysis', why: 'AI assists, you advise', salaryImpact: 'Better outcomes' },
      { name: 'Client Advocacy', why: 'AI cannot advocate', salaryImpact: 'Relationship value' },
    ],
  },
  'medical-biller': {
    title: 'Medical Biller',
    risk: 8,
    automatedTasks: ['Code entry', 'Claim submission', 'Payment posting', 'Basic appeals'],
    humanMoat: ['Denial management', 'Complex case advocacy', 'Provider relationships', 'Regulatory knowledge'],
    pivotPaths: [
      { title: 'Revenue Cycle Manager', why: 'Strategic oversight', salary: '$65K → $100K' },
      { title: 'Healthcare Consultant', why: 'AI + healthcare expertise', salary: '$80K → $130K' }
    ],
    skills: [
      { name: 'AI Coding Assistance', why: 'Faster accurate coding', salaryImpact: 'Fewer denials' },
      { name: 'Automated Claims', why: 'Batch processing', salaryImpact: 'More volume' },
      { name: 'Denial Management', why: 'AI assists, you recover', salaryImpact: 'Revenue recovery' },
    ],
  },
  'bookkeeper': {
    title: 'Bookkeeper',
    risk: 8,
    automatedTasks: ['Data entry', 'Reconciliation', 'Invoice processing', 'Basic reporting'],
    humanMoat: ['Financial analysis', 'Tax preparation', 'Advisory conversations', 'Business coaching'],
    pivotPaths: [
      { title: 'Virtual CFO', why: 'Strategic financial oversight', salary: '$70K → $120K' },
      { title: 'Business Consultant', why: 'Finance + business strategy', salary: '$80K → $150K' }
    ],
    skills: [
      { name: 'AI Automation', why: 'Streamline bookkeeping', salaryImpact: 'More clients' },
      { name: 'Financial Analysis', why: 'AI assists, you advise', salaryImpact: 'Advisory value' },
      { name: 'Tax Knowledge', why: 'Strategic planning', salaryImpact: 'Premium services' },
    ],
  },
  'social-media-manager': {
    title: 'Social Media Manager',
    risk: 6,
    automatedTasks: ['Post scheduling', 'Basic engagement', 'Content repurposing', 'Analytics reporting'],
    humanMoat: ['Community building', 'Crisis management', 'Content strategy', 'Influencer relationships'],
    pivotPaths: [
      { title: 'Brand Strategist', why: 'Creative + business', salary: '$60K → $95K' },
      { title: 'Influencer Manager', why: 'Creator economy', salary: '$70K → $150K' }
    ],
    skills: [
      { name: 'AI Content Creation', why: 'Scale production', salaryImpact: 'More content' },
      { name: 'Analytics Mastery', why: 'Data-driven strategy', salaryImpact: 'Proven ROI' },
      { name: 'Community Building', why: 'AI assists, you connect', salaryImpact: 'Loyalty value' },
    ],
  },
  'video-editor': {
    title: 'Video Editor',
    risk: 6,
    automatedTasks: ['Basic cuts', 'Transitions', 'Color grading', 'Audio sync'],
    humanMoat: ['Storytelling', 'Creative direction', 'Client communication', 'Strategic editing'],
    pivotPaths: [
      { title: 'Content Creator', why: 'Build personal brand', salary: 'Variable' },
      { title: 'Creative Director', why: 'Lead creative teams', salary: '$80K → $130K' }
    ],
    skills: [
      { name: 'AI Editing Tools', why: 'Speed post-production', salaryImpact: 'Faster turnaround' },
      { name: 'Motion Graphics', why: 'Specialization premium', salaryImpact: 'Higher rates' },
      { name: 'Storytelling', why: 'AI assists, you direct', salaryImpact: 'Creative value' },
    ],
  },
  'recruiter': {
    title: 'Recruiter',
    risk: 6,
    automatedTasks: ['Resume screening', 'Job posting', 'Scheduling interviews', 'Basic outreach'],
    humanMoat: ['Candidate relationships', 'Negotiation', 'Cultural assessment', 'Strategic hiring'],
    pivotPaths: [
      { title: 'Executive Search', why: 'High-value placements', salary: '$80K → $200K' },
      { title: 'Talent Strategy Lead', why: 'AI + human insight', salary: '$90K → $140K' }
    ],
    skills: [
      { name: 'AI Sourcing', why: 'Find candidates faster', salaryImpact: 'More placements' },
      { name: 'Automated Screening', why: 'AI filters, you decide', salaryImpact: 'Better fit' },
      { name: 'Relationship Building', why: 'AI assists, you connect', salaryImpact: 'Placement value' },
    ],
  },
};

const jobTitles = Object.keys(jobData);

export default function AISkillsProtector({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedJob, setSelectedJob] = useState('');
  const [yearsExp, setYearsExp] = useState('');
  const [showResults, setShowResults] = useState(false);

  const job = selectedJob ? jobData[selectedJob as keyof typeof jobData] : null;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">AI Career Shield & Pivot Generator</h1>
        </div>

      </div>

      {/* Tool */}
      <div className="bg-white rounded-xl border-2 border-slate-200 p-6 mb-6">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Select your current role:
            </label>
            <select
              value={selectedJob}
              onChange={(e) => {
                setSelectedJob(e.target.value);
                setShowResults(false);
              }}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-base focus:border-emerald-500 focus:outline-none"
            >
              <option value="">— Choose your role —</option>
              {jobTitles.map((key) => (
                <option key={key} value={key}>
                  {jobData[key].title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Years of experience:
            </label>
            <select
              value={yearsExp}
              onChange={(e) => setYearsExp(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-base focus:border-emerald-500 focus:outline-none"
            >
              <option value="">— Select —</option>
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
        </div>

        {job && (
          <button
            onClick={() => setShowResults(true)}
            className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Get My Career Shield Plan
          </button>
        )}
      </div>

      {/* Results */}
      {showResults && job && (
        <div className="space-y-4 animate-fade-in">
          {/* Risk Score */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                job.risk <= 4 ? 'bg-emerald-100' : job.risk <= 6 ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                <span className={`text-2xl font-bold ${
                  job.risk <= 4 ? 'text-emerald-600' : job.risk <= 6 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {job.risk}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {job.risk <= 4 ? (
                    <Shield className="w-5 h-5 text-emerald-500" />
                  ) : job.risk <= 6 ? (
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-semibold text-slate-900">
                    AI Automation Risk: {job.risk <= 4 ? 'Low' : job.risk <= 6 ? 'Moderate' : 'High'}
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  {job.risk <= 4 
                    ? "Your role has strong human elements that are hard to automate."
                    : job.risk <= 6
                    ? "AI can handle parts of your role — build these skills to stay ahead."
                    : "Significant parts of your role can be automated — pivot now to protect your value."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Your Human Moat */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Your Human Moat</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              What AI cannot easily replicate — lean into these:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {job.humanMoat.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-blue-50 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pivot Paths */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">Your Pivot Paths</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Two adjacent career moves that leverage your background:
            </p>
            <div className="space-y-3">
              {job.pivotPaths.map((pivot, idx) => (
                <div key={idx} className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{pivot.title}</p>
                      <p className="text-sm text-slate-600 mb-1">{pivot.why}</p>
                      <p className="text-sm font-medium text-purple-600">{pivot.salary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium CTA */}
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl p-6 text-white">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-2">Ready to Execute This Pivot?</h3>
              <p className="text-emerald-100">
                Your custom roadmap is locked below. Pay a one-time fee to unlock:
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 mb-4 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-sm">Skill-Gap Roadmap: Exact micro-skills to make the pivot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-sm">Interactive Wealth Projector: Pivot lifetime earnings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-sm">Prompt Generator: Automate current job by 40%</span>
              </div>
            </div>
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/cNidRb0ONcy6caR1kSfMA06?success_url=https://moneyscan.com/%3Fpayment%3Dsuccess'}
              className="w-full bg-white text-emerald-600 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Unlock Full Lifetime Access for $49
            </button>
          </div>
        </div>
      )}
    </div>
  );
}