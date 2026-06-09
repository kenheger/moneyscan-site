import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.png';

interface MoneyscanProps {
  onNavigate: (page: string) => void;
  hasLeftLanding?: boolean;
  stripeCheckoutUrl?: string;
}

export default function Moneyscan({ onNavigate, hasLeftLanding, stripeCheckoutUrl }: MoneyscanProps) {
  // Check if user already paid
  const hasAccess = () => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('moneyscan_unlocked') === 'true';
  };

  // Stripe checkout via API - enables automatic receipt emails
  const handleGetAccess = async () => {
    // Get price ID from environment variable (set in Vercel project settings)
    const priceId = import.meta.env.VITE_STRIPE_PRICE_ID || 'price_1R0Z2jLfvY7Kf9bZDqJqJqJq';
    
    try {
      const response = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: priceId,
          productName: 'MONEYSCAN Financial Blueprint',
          successUrl: window.location.origin + '/?payment=success',
          cancelUrl: window.location.origin + '/?payment=cancelled',
        }),
      });
      
      const data = await response.json();
      
      if (data.url) {
        // Redirect to Stripe Checkout - this will collect email and send receipt automatically
        window.location.href = data.url;
      } else if (stripeCheckoutUrl) {
        // Fallback to old payment link if API fails
        window.open(stripeCheckoutUrl, '_blank');
      } else {
        window.location.href = 'https://buy.stripe.com/cNidRb0ONcy6caR1kSfMA06';
      }
    } catch (error) {
      console.error('Checkout error:', error);
      // Fallback to payment link on error
      if (stripeCheckoutUrl) {
        window.open(stripeCheckoutUrl, '_blank');
      } else {
        window.location.href = 'https://buy.stripe.com/cNidRb0ONcy6caR1kSfMA06';
      }
    }
  };

  // Check if just returned from payment
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') {
      // Unlock access and clean URL
      localStorage.setItem('moneyscan_unlocked', 'true');
      window.history.replaceState({}, '', '/');
      onNavigate('home');
    }
    if (params.get('payment') === 'cancelled') {
      // Clean URL
      window.history.replaceState({}, '', '/');
    }
  }, [onNavigate]);

  // After Back from Stripe, check if just returned - unlock if coming back from checkout
  const checkReturn = () => {
    // Unlock and go to home
    localStorage.setItem('moneyscan_unlocked', 'true');
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

      {/* Hero Section - Compact single view */}
      <section className="pt-4 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* MONEYSCAN Logo */}
            <div className="flex justify-center mb-6">
              <img
                src={logoImage}
                alt="MONEYSCAN"
                className="w-full max-w-[350px] h-auto"
              />
            </div>

            {/* Tag Line - 18pt */}
            <p className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              A First Principles Guide to Creating Wealth in the AI Era
            </p>

            {/* Understand line - 21pt */}
            <p className="text-xl md:text-2xl text-slate-700 mb-6">
              Understand the Math. Choose your Path. Build Wealth that Lasts.
            </p>

            {/* What You Get - compact box */}
            <div className="max-w-[400px] mx-auto mb-4">
              <h3 className="text-base font-bold text-slate-900 mb-1">What You Get:</h3>
              <div className="text-left text-sm text-slate-700 border border-slate-300 p-2 rounded leading-tight">
                <p><span className="text-base mr-2">♾️</span><strong>First Principles Framework</strong> — Timeless math-based guidance on investing, cash flow, debt elimination, and wealth building.</p>
                <p><span className="text-base mr-2">♾️</span><strong>Practical Tools Included</strong> — A dedicated AI Tools Arsenal, AI literacy assessment, skills mapping and US trades salaries database.</p>
                <p><span className="text-base mr-2">♾️</span><strong>Lifetime Access</strong> — One-time $49 fee. No subscription. Includes future updates as AI and markets evolve.</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-4">
              <p className="text-2xl font-bold text-emerald-600">
                One-Time Fee: $49
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-4">
              <p className="text-xs text-slate-500 mb-2">
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

              <button onClick={handleGetAccess} className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2">
                <span>Get Instant Access — $49</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Line */}
            <div className="mb-2">
              <p className="text-sm text-slate-600">
                Instant access. No subscription. Lifetime updates.
              </p>
            </div>

            {/* Footer - compact */}
            <footer className="bg-slate-100 text-slate-500 py-2 text-xs">
              <div className="max-w-5xl mx-auto text-center">
                © 2026 Moneyscan LLC.
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}