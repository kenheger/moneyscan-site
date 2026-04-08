import { ArrowRight } from 'lucide-react';

interface ConnectionCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  accentColor?: string;
}

export default function ConnectionCard({ title, description, onClick, accentColor = "emerald" }: ConnectionCardProps) {
  const colorClasses = {
    emerald: "hover:border-emerald-300 group-hover:text-emerald-600 text-emerald-600",
    purple: "hover:border-purple-300 group-hover:text-purple-600 text-purple-600",
    red: "hover:border-red-300 group-hover:text-red-600 text-red-600",
    indigo: "hover:border-indigo-300 group-hover:text-indigo-600 text-indigo-600",
    blue: "hover:border-blue-300 group-hover:text-blue-600 text-blue-600"
  };

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.emerald;
  const [hoverBorder, groupHoverText, textColor] = colors.split(' ');

  return (
    <button
      onClick={onClick}
      className={`bg-slate-50 p-6 rounded-xl border border-slate-200 ${hoverBorder} hover:shadow-lg transition-all text-left group`}
    >
      <h3 className={`text-lg font-bold text-slate-900 mb-2 ${groupHoverText} transition-colors`}>
        {title}
      </h3>
      <p className="text-sm text-slate-600">{description}</p>
      {onClick && (
        <div className={`mt-3 ${textColor} text-sm font-semibold flex items-center gap-1`}>
          Explore <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </button>
  );
}
