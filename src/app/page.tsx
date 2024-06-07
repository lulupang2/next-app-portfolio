'use client';
import { Home, Work } from '@/components/sections';
import Contact from '@/components/sections/contact';
import { useScroll } from '@/hooks/useScroll';

export default function Page() {
  const scrollProgress = useScroll();
  return (
    <main className="container mx-auto">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <Home />
      <Work />
      <Contact />
    </main>
  );
}
