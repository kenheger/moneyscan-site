import { useEffect } from 'react';

interface LegalPrivacyProps {
  onNavigate: (page: string) => void;
}

export default function LegalPrivacy({ onNavigate }: LegalPrivacyProps) {
  useEffect(() => {
    // Handle anchor navigation after component mounts
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Legal & Privacy
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Last updated: April 2026
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Please read the following sections carefully. They govern your use of this website and any purchase you make.
          </p>

          {/* Jump Links */}
          <div className="flex flex-wrap gap-4 text-lg">
            <a
              href="#disclaimers"
              className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('disclaimers')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Disclaimers
            </a>
            <span className="text-slate-400">|</span>
            <a
              href="#privacy-policy"
              className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('privacy-policy')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Disclaimers Section */}
        <section id="disclaimers" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Disclaimers
          </h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              This website and all its content, including the Moneyscan Blueprint, tools, worksheets, and guidance, are provided for general educational and informational purposes only.
            </p>
            <p>
              Nothing on this site constitutes personalized financial, investment, tax, legal, or professional advice. The information presented — including compound interest illustrations, career guidance, trade data, and calculators — is not tailored to any individual's specific financial situation, risk tolerance, or goals.
            </p>
            <p>
              Past performance is not indicative of future results. Actual investment returns, career outcomes, and earnings will vary significantly based on your personal circumstances, market conditions, location, experience, and effort.
            </p>
            <p>
              You should consult with a qualified financial advisor, tax professional, attorney, or other licensed expert before making any financial, investment, or career decisions.
            </p>
            <p>
              We make no representations or warranties regarding the accuracy, completeness, or suitability of the information provided. Your use of this site and any materials purchased is entirely at your own risk.
            </p>
            <p>
              By accessing or purchasing from this site, you agree that MoneyScan (and its owners/operators) shall not be liable for any losses, damages, or claims arising from your use of the content or tools.
            </p>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Last updated: April 2026
          </p>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              We respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit MoneyScan or purchase the Blueprint.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Information We Collect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>When you purchase the Blueprint:</strong> name, email address, and payment information (processed securely by our payment provider).
                </li>
                <li>
                  <strong>Usage data</strong> (pages visited, tools interacted with) to improve the site and user experience.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                How We Use Your Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To deliver your purchase and provide lifetime updates.</li>
                <li>To send occasional important updates or announcements (you can unsubscribe at any time).</li>
                <li>To analyze site usage and improve our content and tools.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                We Do Not
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sell your personal data to third parties.</li>
                <li>Share your information except as necessary to process payments (e.g., with Stripe) or host the website.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Your Rights
              </h3>
              <p>
                You may request access to, correction of, or deletion of your personal data by contacting us. We will respond promptly.
              </p>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-lg text-slate-600">
            If you have any questions about these Disclaimers or Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
