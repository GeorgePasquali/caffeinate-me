"use client";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedCard({ 
  children, 
  className = "",
  style
}: AnimatedCardProps) {
  return (
    <div className={`group relative ${className}`} style={style}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
} 