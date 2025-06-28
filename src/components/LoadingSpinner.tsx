
import { Sparkles, Code, Palette, Rocket } from 'lucide-react';

export const LoadingSpinner = () => {
  const steps = [
    { icon: Sparkles, text: 'Memproses prompt Anda...', delay: '0s' },
    { icon: Code, text: 'Generating HTML & CSS...', delay: '0.5s' },
    { icon: Palette, text: 'Menerapkan styling...', delay: '1s' },
    { icon: Rocket, text: 'Finalizing website...', delay: '1.5s' }
  ];

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-violet-600 animate-pulse" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          🤖 AI sedang bekerja...
        </h3>
        <p className="text-gray-500 mb-6">
          Website Anda sedang dibuat dengan teknologi AI terdepan
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg animate-fade-in"
              style={{ animationDelay: step.delay }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {step.text}
              </span>
              <div className="flex-1 flex justify-end">
                <div className="w-4 h-4 border-2 border-violet-300 border-t-violet-600 rounded-full animate-spin"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          ⏱️ Estimasi waktu: 30-60 detik
        </p>
      </div>
    </div>
  );
};
