import { TrendingUp } from 'lucide-react';

export default function WealthEngineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-emerald-600" title="Links to The Wealth Engine">
      <TrendingUp className={className} />
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M21 9v0" strokeLinecap="round" />
      </svg>
    </div>
  );
}
