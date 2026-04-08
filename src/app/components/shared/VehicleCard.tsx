import { ExternalLink, TrendingUp } from 'lucide-react';

interface VehicleCardProps {
  name: string;
  description: string;
  features: string[];
  gradient?: string;
  icon?: React.ReactNode;
}

export default function VehicleCard({ name, description, features, gradient = "from-emerald-500 to-blue-600", icon }: VehicleCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all">
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            {name}
            <ExternalLink className="w-5 h-5 text-slate-400" />
          </h3>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
      <ul className={`space-y-2 ${icon ? 'ml-16' : ''}`}>
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="text-emerald-600 font-bold flex-shrink-0">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
