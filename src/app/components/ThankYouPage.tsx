import { CheckCircle, ArrowRight, Home } from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (page: string) => void;
}

export default function ThankYouPage({ onNavigate }: ThankYouPageProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="cursor-pointer">
            <img 
              src="https://api.chilledsites.com/storage/v1/object/public/user-uploads/1d550b20-2c2f-43a2-8b87-2c36e780a0ce/1778781581101-h95pdrhfe9.jpg" 
              alt="Moneyscan" 
              className="h-10"
            />
          </button>
        </div>
      </div>

      {/* Thank You Content */}
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-emerald-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-xl text-slate-600 mb-8">
          Your payment was successful. You now have full access to Moneyscan.
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">
            What's Next?
          </h2>
          <ul className="text-left text-emerald-700 space-y-2">
            <li>✅ Explore all premium pages and tools</li>
            <li>✅ Use the Trade Opportunity Finder</li>
            <li>✅ Access budgeting and wealth calculators</li>
            <li>✅ Build your wealth strategy</li>
          </ul>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors mx-auto"
        >
          <Home className="w-5 h-5" />
          Go to Home
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-sm text-slate-500 mt-6">
          A receipt has been sent to your email.
        </p>
      </div>
    </div>
  );
}
