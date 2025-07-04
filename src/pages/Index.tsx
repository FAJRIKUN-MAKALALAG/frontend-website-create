
import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeatureCards } from '@/components/FeatureCards';
import { FormSection } from '@/components/FormSection';
import { ResultDisplay } from '@/components/ResultDisplay';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<{
    html: string;
    css: string;
    js: string;
  } | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    setError('');
    setResult(null);

    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock result for demonstration
      setResult({
        html: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Generated</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: #333; text-align: center; }
        p { line-height: 1.6; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Website Berhasil Dibuat!</h1>
        <p>Prompt Anda: ${prompt}</p>
        <p>Ini adalah contoh website yang dihasilkan oleh AI berdasarkan deskripsi yang Anda berikan.</p>
    </div>
</body>
</html>`,
        css: `body { 
  font-family: Arial, sans-serif; 
  margin: 0; 
  padding: 20px; 
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.container { 
  max-width: 800px; 
  margin: 0 auto; 
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}`,
        js: `console.log('Website generated by AI!');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
});`
      });
    } catch (err) {
      setError('Gagal generate website. Silakan coba lagi.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {!isGenerating && !result && (
          <div className="max-w-4xl mx-auto">
            <HeroSection />
            <FeatureCards />
            <FormSection 
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              error={error}
            />
          </div>
        )}

        {isGenerating && (
          <div className="max-w-lg mx-auto">
            <LoadingSpinner />
          </div>
        )}

        {result && !isGenerating && (
          <ResultDisplay 
            result={result} 
            onReset={() => {
              setResult(null);
              setError('');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
