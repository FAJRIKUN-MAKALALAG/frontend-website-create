
import { Sparkles } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const FeatureCards = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Teknologi AI canggih mengubah deskripsi Anda menjadi kode website yang siap pakai",
      bgColor: "bg-violet-100 dark:bg-violet-900/30",
      iconColor: "text-violet-600"
    },
    {
      icon: ({ className }: { className?: string }) => (
        <div className={`w-6 h-6 bg-purple-600 rounded ${className}`}></div>
      ),
      title: "Instant Preview",
      description: "Lihat langsung hasil website Anda dengan preview real-time",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600"
    },
    {
      icon: ({ className }: { className?: string }) => (
        <div className={`w-6 h-6 border-2 border-indigo-600 rounded border-dashed ${className}`}></div>
      ),
      title: "Download ZIP",
      description: "Unduh file website lengkap dalam format ZIP siap upload ke hosting",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          bgColor={feature.bgColor}
          iconColor={feature.iconColor}
        />
      ))}
    </div>
  );
};
