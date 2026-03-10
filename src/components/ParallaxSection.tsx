"use client";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  className?: string;
  overlayOpacity?: number;
}

export default function ParallaxSection({
  children,
  backgroundImage,
  className = "",
  overlayOpacity = 0.4,
}: ParallaxSectionProps) {
  return (
    <section
      className={`relative min-h-screen bg-cover bg-center bg-fixed ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
