'use client';
import { Home, Work } from '@/components/sections';
import { useScroll } from '@/hooks/useScroll';

export default function Page() {
  const scrollProgress = useScroll();
  return (
    <main className="container mx-auto">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <Home name="home" />
      가나다라
      <Work />
    </main>
  );
}
