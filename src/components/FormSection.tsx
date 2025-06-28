
import { PromptForm } from './PromptForm';

interface FormSectionProps {
  onGenerate: (prompt: string) => void;
  isGenerating: boolean;
  error: string;
}

export const FormSection = ({ onGenerate, isGenerating, error }: FormSectionProps) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-violet-100 dark:border-gray-700 shadow-xl p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🚀 Generate Website Anda
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Jelaskan website yang ingin Anda buat dengan detail. Semakin spesifik, semakin baik hasilnya!
        </p>
      </div>
      
      <PromptForm 
        onSubmit={onGenerate} 
        isLoading={isGenerating} 
        error={error}
      />
    </div>
  );
};
