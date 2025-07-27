// pages/index.tsx
import AdvertiseHeader from '@/components/AdvertiseHeader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <AdvertiseHeader />
      <Header />
      <Hero/>
    </div>
  );
}
