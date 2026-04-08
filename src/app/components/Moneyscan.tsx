import { ArrowRight } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

interface MoneyscanProps {
  onNavigate: (page: string) => void;
  hasLeftLanding?: boolean;
}

export default function Moneyscan({ onNavigate, hasLeftLanding }: MoneyscanProps) {
  // Temporary: For testing/preview, the CTA goes to home. 
  // TODO: Replace with actual payment flow
  const handleGetAccess = () => {
    onNavigate('home');
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      {/* Minimal Header - Moneyscan Landing Page Only */}
      <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="MONEYSCAN"
                className="h-10 w-auto"
              />
            </div>
            <button
              onClick={() => hasLeftLanding && onNavigate('home')}
              disabled={!hasLeftLanding}
              className={`text-sm transition-colors ${hasLeftLanding ? 'text-slate-600 hover:text-emerald-600 cursor-pointer' : 'text-slate-300 cursor-not-allowed'}`}
            >
              Back to Site
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Centered with Generous Spacing */}
      <section className="pt-8 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* MONEYSCAN Logo */}
            <div className="flex justify-center" style={{ paddingTop: '40px', marginBottom: '70px' }}>
              <img
                src={logoImage}
                alt="MONEYSCAN"
                className="w-full max-w-[450px] h-auto"
                style={{ maxWidth: '450px' }}
              />
            </div>

            {/* Stacked Hero Headline */}
            <div className="max-w-4xl mx-auto" style={{ marginBottom: '45px' }}>
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-slate-900 leading-tight">
                Building Lasting Wealth
              </h2>
              <p className="text-3xl md:text-4xl font-bold font-sans text-slate-900 mt-2">
                A First Principles Blueprint
              </p>
            </div>

            {/* Tag Line - 24-28px on desktop */}
            <p className="text-2xl md:text-[28px] text-slate-700 max-w-3xl mx-auto" style={{ marginBottom: '45px' }}>
              Understand the math. Choose your path. Build wealth that lasts.
            </p>

            {/* Sub Tag - 18-22px italicized */}
            <p className="text-lg md:text-xl italic text-slate-600 max-w-xl mx-auto" style={{ marginBottom: '55px' }}>
              Directional & Actionable in the AI Era
            </p>

            {/* What You Get - Stacked Text with Title and Infinity Symbols */}
            <div className="max-w-2xl mx-auto px-12" style={{ marginBottom: '55px' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What You Get:</h3>
              <div className="space-y-3 text-left">
                <p className="text-base md:text-lg text-slate-700 leading-snug">
                  <span className="text-xl mr-2">♾️</span>
                  <strong>First Principles Framework</strong> — Timeless math-based guidance on investing, cash flow, debt elimination, and wealth building.
                </p>
                <p className="text-base md:text-lg text-slate-700 leading-snug">
                  <span className="text-xl mr-2">♾️</span>
                  <strong>Practical Tools Included</strong> — Compound interest calculator, debt payoff projector, AI literacy assessment, and skills mapping worksheet.
                </p>
                <p className="text-base md:text-lg text-slate-700 leading-snug">
                  <span className="text-xl mr-2">♾️</span>
                  <strong>Lifetime Access</strong> — One-time $49 fee. No subscription. Includes future updates as AI and markets evolve.
                </p>
              </div>
            </div>

            {/* Pricing - 36-42px */}
            <div style={{ marginBottom: '55px' }}>
              <p className="text-[40px] font-bold text-emerald-600">
                One-Time Fee: $49
              </p>
            </div>

            {/* CTA Button - Large and Prominent */}
            <div style={{ marginBottom: '35px' }}>
              {/* Legal Agreement Text */}
              <p className="text-sm md:text-base text-slate-600 mb-4">
                By purchasing, you agree to our{' '}
                <button
                  onClick={() => {
                    onNavigate('legal-privacy');
                    setTimeout(() => {
                      document.getElementById('disclaimers')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Disclaimers
                </button>
                {' '}and{' '}
                <button
                  onClick={() => {
                    onNavigate('legal-privacy');
                    setTimeout(() => {
                      document.getElementById('privacy-policy')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Privacy Policy
                </button>
                .
              </p>

              <button onClick={handleGetAccess} className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-12 py-5 md:px-16 md:py-6 rounded-xl font-bold text-xl md:text-2xl transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-3 group min-w-[360px] md:min-w-[440px]">
                <span>Get Instant Access — $49</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Trust Line */}
            <div className="mb-20">
              <p className="text-lg md:text-xl text-slate-600">
                Instant access. No subscription. Lifetime updates.
              </p>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-8">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">
                  Contact: <a href="mailto:info@moneyscan.com" className="text-emerald-400 hover:text-emerald-300">info@moneyscan.com</a>
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  © 2026 Moneyscan Financial. Educational only — not personalized advice.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
