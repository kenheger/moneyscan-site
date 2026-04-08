import { ArrowRight, Heart, Shield, DollarSign, CheckCircle } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

interface MedicalDebtReliefProps {
  onNavigate: (page: string) => void;
  hasLeftLanding?: boolean;
}

export default function MedicalDebtRelief({ onNavigate, hasLeftLanding }: MedicalDebtReliefProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-white">
      {/* Minimal Header */}
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

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Erase Medical Debt
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-8">
              A medical crisis shouldn't mean a financial crisis. Help is available — and it's free.
            </p>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h2>
              <p className="text-slate-700 mb-4">
                Medical debt is the #1 cause of bankruptcy in the United States. 
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Over <strong>100 million Americans</strong> have medical debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Hospitals are required to offer financial assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>But they don't make it easy to find or use</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h2>
              <p className="text-slate-700 mb-4">
                Five Star Credit Union has partnered with <strong>Dollar For</strong> — a national nonprofit — to help members reduce or eliminate their hospital bills.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Free service</strong> — no hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>5-question form tells you if you qualify</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>They guide you through the entire process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Dollar For Has Already Helped Thousands</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black text-emerald-400 mb-2">$26M+</div>
                <div className="text-slate-400">Medical Debt Erased</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-emerald-400 mb-2">1,500+</div>
                <div className="text-slate-400">Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-emerald-400 mb-2">100%</div>
                <div className="text-slate-400">Free Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Answer 5 Questions</h3>
              <p className="text-slate-600">
                Fill out a simple form about your income, insurance, and hospital bills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Get Matched</h3>
              <p className="text-slate-600">
                Dollar For checks if you qualify for hospital charity care programs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Crush That Bill</h3>
              <p className="text-slate-600">
                If you qualify, Dollar For helps you apply and negotiates on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <DollarSign className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Crush Your Medical Debt?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              This service is free. You have nothing to lose — and everything to gain.
            </p>
            <a
              href="https://forms.dollarfor.org/?aid=fivestar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Check If You Qualify</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-slate-600 mt-4">
              You'll be redirected to Dollar For's secure form.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-slate-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm text-slate-700">
              MONEYSCAN provides this information as a service. Dollar For is an independent nonprofit. Results vary based on your specific circumstances and hospital's financial assistance policies. This is not financial advice — consult with a qualified professional for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-12">
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
  );
}
