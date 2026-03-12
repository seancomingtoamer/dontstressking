"use client";

import { useEffect, useRef, useState } from "react";

interface CounterItem {
  label: string;
  target: number;
  suffix?: string;
}

const counters: CounterItem[] = [
  { label: "Cities Served", target: 2 },
  { label: "Dignity Kits Goal", target: 500 },
  { label: "Volunteers Needed", target: 50 },
];

function AnimatedNumber({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return <span>{count.toLocaleString()}</span>;
}

export function ImpactCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {counters.map((item) => (
        <div
          key={item.label}
          className="text-center p-6 bg-card-bg rounded-xl border border-white/10"
        >
          <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
            <AnimatedNumber target={item.target} active={visible} />
          </div>
          <div className="text-text-body text-sm font-medium">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
