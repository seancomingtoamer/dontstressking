import { Crown } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showCrown?: boolean;
}

export function SectionHeader({ title, subtitle, showCrown = true }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      {showCrown && (
        <Crown className="w-8 h-8 text-gold mx-auto mb-4 opacity-60" />
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-body max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
