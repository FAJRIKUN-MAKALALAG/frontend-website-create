
import { Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
        AI Website Generator
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Deskripsikan website impian Anda dan dapatkan kode HTML + CSS siap pakai dalam hitungan detik! 
        Powered by Artificial Intelligence terdepan.
      </p>
    </div>
  );
};
