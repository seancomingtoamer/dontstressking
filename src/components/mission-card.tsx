import type { LucideIcon } from "lucide-react";

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <div className="p-6 bg-card-bg rounded-xl border border-white/10 hover:border-gold/30 transition-colors group">
      <div className="w-12 h-12 bg-gold-glow rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-text-body text-sm leading-relaxed">{description}</p>
    </div>
  );
}
