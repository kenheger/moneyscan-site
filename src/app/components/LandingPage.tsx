import { Lock, ArrowRight, Check, TrendingUp, Zap, Brain, DollarSign, Home, Briefcase, Code, BarChart3, Shield, Target, BookOpen, Layers, CreditCard, PiggyBank } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
  stripeCheckoutUrl?: string;
}

export default function LandingPage({ onNavigate, stripeCheckoutUrl }: LandingPageProps) {
  return (
    <div className="w-full bg-white">
      {/* Top Band - Logo + CTA */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
          <button onClick={() => onNavigate('landing-page')} className="cursor-pointer">
            <img 
              src="https://api.chilledsites.com/storage/v1/object/public/user-uploads/1d550b20-2c2f-43a2-8b87-2c36e780a0ce/1778781581101-h95pdrhfe9.jpg" 
              alt="Moneyscan" 
              className="h-10"
            />
          </button>
          
          <div className="flex items-center gap-4">
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-md text-sm font-semibold">
              One-Time $49
            </span>
            <a 
              href={stripeCheckoutUrl}
              className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-600 transition-colors"
            >
              <Lock className="w-4 h-4" />
              Get Access
            </a>
            <button 
              onClick={() => {
                const hasFullAccess = localStorage.getItem('moneyscan_unlocked') === 'true';
                const hasTradesAccess = localStorage.getItem('moneyscan_trades_unlocked') === 'true';
                if (hasFullAccess || hasTradesAccess) {
                  onNavigate('home');
                } else {
                  alert('Payment not detected. If you recently paid, your access should activate within a few minutes. Contact info@moneyscan.com for help.');
                }
              }}
              className="text-sm text-slate-500 hover:text-emerald-600 underline"
            >
              Returning customer?
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Split Layout */}
      <section className="py-9 px-4 bg-gradient-to-b from-emerald-100 via-emerald-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left - Copy */}
          <div>
            <span className="inline-block bg-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              BUILDING WEALTH IN THE AI ERA
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              AI Focused.<br />
              Building Wealth.
            </h1>
            <p className="text-lg text-slate-600 italic mb-2">
              Careers and financial paths change significantly when factoring in AI automation.
            </p>
            <p className="text-lg text-slate-600 italic mb-4">
              Unlock this FREE "AI Skills Salary Protector" tool to get a readout on career impacts and actionable defenses.
            </p>
            
            <button 
              onClick={() => onNavigate('ai-skills-protector')}
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-colors cursor-pointer mb-4"
            >
              <Zap className="w-5 h-5" />
              Try Free AI Skills Salary Protector
            </button>
            
            <p className="text-lg text-slate-600 italic mb-4">
              Access our interactive tools, information and opportunities to thrive in this AI Era! (And, yes — we even have an interactive skilled-trades database tool!)
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Moneyscan is designed to help make financial, career and wealth building decisions - navigating the AI economy. Our interactive guide covers essential AI skills, some new ways to think about investments, real estate, taxes and debt - all in an effort to create lasting wealth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={stripeCheckoutUrl}
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
              >
                <Lock className="w-5 h-5" />
                Get Instant Access — $49
              </a>
              <button 
                onClick={() => document.getElementById('inside')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-white text-slate-700 border-2 border-slate-300 px-7 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                See What's Inside
              </button>
            </div>
          </div>
          
          {/* Right - Feature Card with Graphic */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="/landing-hero.png" 
              alt="Financial Analysis" 
              className="w-full rounded-lg mb-6"
            />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700">AI Tools Arsenal — full curated database</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700">Jobs & Housing Heat Maps</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700">Trades Salaries Database (all 50 states)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700">Interactive calculators</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700">Wealth Building Frameworks</span>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-slate-500 line-through">Valued at $200+</span>
                <span className="text-3xl font-bold text-emerald-600 ml-2">$49</span>
                <span className="text-slate-600 ml-2">one-time</span>
              </div>
              
              <a 
                href={stripeCheckoutUrl}
                className="block w-full bg-emerald-500 text-white py-3 rounded-lg font-bold text-center hover:bg-emerald-600 transition-colors"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Row */}
      <section className="py-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <PiggyBank className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-slate-700">One-time fee, no subscription</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <BookOpen className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-slate-700">10–15 focused paths</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Brain className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-slate-700">AI - focused guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside - Product Features */}
      <section id="inside" className="py-9 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Inside Moneyscan</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Everything you need to build wealth in the AI Era
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              { icon: Brain, title: "AI Literacy & Skills Assessment", desc: "Know where you stand with AI tools" },
              { icon: Zap, title: "AI Tools Arsenal", desc: "Curated and ranked database of AI tools" },
              { icon: Home, title: "Jobs and Housing Heat Maps", desc: "Location-specific data for decisions" },
              { icon: Briefcase, title: "Trades Salaries Database", desc: "Comprehensive salary data across skilled trades" },
              { icon: CreditCard, title: "Debt & Cash Flow Applications", desc: "Frameworks for managing debt" },
              { icon: TrendingUp, title: "Wealth Building & Investing Frameworks", desc: "First-principles investing thinking" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <item.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-emerald-50 p-6 rounded-xl text-center">
            <span className="text-slate-500 line-through font-medium">Valued at $200+</span>
            <span className="text-3xl font-bold text-emerald-600 ml-3">$49</span>
            <span className="text-slate-600 ml-2">One-time · Instant access</span>
          </div>
        </div>
      </section>

      {/* Things You Haven't Paid Attention To */}
      <section className="py-9 px-4 bg-blue-50 text-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Things You've Paid Less Attention To
          </h2>
          <p className="text-center text-slate-600 mb-4 max-w-2xl mx-auto">
            AI is reshaping salaries, job security, and investment returns faster than most people realise. The window to adapt is open — but not forever.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Under-Realized Happenings</h3>
              <p className="text-slate-600 text-sm">AI is now active in employment decisions, valued skills, job opportunities, housing and wealth building among other things that are not always top-of mind. That's why we focus on Paths.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Layers className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">New Things You're Missing</h3>
              <p className="text-slate-600 text-sm">Tokenized real estate, algorithmic portfolio rebalancing, predictive spending and other opportunities that the AI era has created.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">The Math Has Changed</h3>
              <p className="text-slate-600 text-sm">Understanding compounding, cash flow leverage, and AI-augmented earning isn't optional anymore. It's the foundation of any modern wealth strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-9 px-4 bg-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white">
            <div>
              <div className="text-4xl font-bold">10–15</div>
              <div className="text-emerald-100">Focused Paths</div>
            </div>
            <div>
              <div className="text-4xl font-bold">$49</div>
              <div className="text-emerald-100">One-Time Only</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4</div>
              <div className="text-emerald-100">Core Pillars</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Moneyscan? */}
      <section className="py-9 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-slate-500 font-medium">What Is Moneyscan?</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              A First Principles Guide Built for the AI Era
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Moneyscan isn't personal financial advice. It's a structured, research-backed guide that hands you the frameworks, data, and tools you need to make smarter wealth decisions — on your own terms, in an economy being reshaped by AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "Keystones", desc: "We provide wealth building principles that are always applicable and rather essential in this AI Era that is now upon us." },
              { icon: Briefcase, title: "Early Career Considerations", desc: "With a vast array of circumstances in front of you, we focus on decision making that helps start and develop a wealth path for the future." },
              { icon: Shield, title: "Mid Career Defenses", desc: "The AI factor in employment is real but we explore a number of ways to defend, adjust and thrive in your wealth building future." },
              { icon: Brain, title: "AI Tools Arsenal", desc: "Use our completely curated arsenal of AI tools to leverage your skills, and emerging income pathways that many people are still sleeping on." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-9 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-500 font-medium">What Makes It Different</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Interactive Focus on AI Impacts
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Moneyscan includes tools and databases you won't find bundled anywhere else at this price point.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { badge: "", icon: Zap, title: "AI Prompts Vault", desc: "We compliment a curated, ranked database of AI tools mapped to wealth-building use cases with an AI prompts vault - so you can make deep queries." },
              { badge: "", icon: Brain, title: "Wealth Building - With An AI Twist", desc: "Know the emerging AI assisted investment and real estate vehicles that show you a number of new ways to participate in your wealth building future." },
              { badge: "", icon: Code, title: "AI Skills Essentials", desc: "Discover which AI skills to start exploring immediately - so you can support existing careers and explore new ones." },
              { badge: "", icon: Briefcase, title: "US Trades Salaries Database", desc: "Comprehensive salary data across skilled trades — one of the most underrated wealth-building paths in America. Includes location-adjusted figures." },
              { badge: "", icon: BarChart3, title: "Understand the Math", desc: "Compounding, leverage, net worth velocity, debt cost — presented clearly so you can run your own numbers and make confident decisions." },
              { badge: "", icon: Target, title: "Choose Your Path", desc: "Multiple wealth-building frameworks — from real estate to investing to AI-augmented income — so you can pick what fits your situation." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                {item.badge && (
                  <span className="inline-block bg-emerald-100 text-emerald-600 text-xs font-bold px-2 py-1 rounded mb-3">
                    {item.badge}
                  </span>
                )}
                <item.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understand the Math */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 font-medium">Understand the Math</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-3">
            The Numbers That Actually Matter
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            Most people never learn the core mathematical relationships that drive wealth. Moneyscan makes them impossible to ignore.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="text-center p-3">
              <div className="text-4xl font-bold text-emerald-500">7%</div>
              <h3 className="text-base font-bold text-slate-900">Real Return</h3>
              <p className="text-slate-600 text-xs">Inflation-adjusted equity return</p>
            </div>
            <div className="text-center p-3">
              <div className="text-4xl font-bold text-red-500">24%</div>
              <h3 className="text-base font-bold text-slate-900">Credit Card APR</h3>
              <p className="text-slate-600 text-xs">Guaranteed return by paying off</p>
            </div>
            <div className="text-center p-3">
              <div className="text-4xl font-bold text-blue-500">72</div>
              <h3 className="text-base font-bold text-slate-900">Rule of 72</h3>
              <p className="text-slate-600 text-xs">Years to double money</p>
            </div>
          </div>
          
          <a 
            href={stripeCheckoutUrl}
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            <Lock className="w-5 h-5" />
            Get the Full Math — $49 One-Time
          </a>
        </div>
      </section>

      {/* Simple Pricing */}
      <section className="py-6 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 font-medium">Simple Pricing</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-3">
            One Guide. One Price. No Subscriptions.
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            Everything inside Moneyscan for a single, one-time payment.
          </p>
          
          <div className="bg-white p-5 rounded-xl shadow border border-slate-200 max-w-sm mx-auto">
            <div className="text-xs text-slate-500 mb-1">Complete Access</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-3xl font-bold text-slate-900">$</span>
              <span className="text-5xl font-bold text-slate-900">49</span>
            </div>
            <p className="text-slate-600 text-sm mb-3">One-time payment · Instant access</p>
            
            <ul className="text-left space-y-1 mb-4">
              {[
                "Complete guidance (10–15 paths)",
                "AI Tools Arsenal",
                "AI Prompts Vault",
                "Trades Salaries Database",
                "Interactive calculators",
                "Wealth Building Frameworks",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href={stripeCheckoutUrl}
              className="block w-full bg-emerald-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-colors"
            >
              Get Instant Access — $49
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Landing Page Only */}
      <footer className="py-6 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-600">
          <p className="mb-3 font-semibold text-slate-700">
            © 2026 Moneyscan LLC · <a href="mailto:info@moneyscan.com" className="text-emerald-600 hover:underline">info@moneyscan.com</a>
          </p>
          <div className="text-xs bg-white p-4 rounded-lg border border-slate-200 text-left max-w-2xl mx-auto">
            <p className="font-semibold text-slate-700 mb-2">Disclaimer</p>
            <p className="mb-3">
              This website is for directional education and information purposes only. Nothing here constitutes personalized financial, investment, tax, or legal advice - consult professionals in those areas for personal advice. Past performance does not guarantee future results. Your use of this site is at your own risk.
            </p>
            <p className="font-semibold text-slate-700 mb-2">Privacy Policy</p>
            <p>
              We collect only what you provide (name, email) for purchase delivery. We do not sell or share your data. Payment processing is handled securely by Stripe.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}