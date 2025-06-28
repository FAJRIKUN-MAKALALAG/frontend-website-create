
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Sparkles, AlertCircle } from 'lucide-react';

interface PromptFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  error: string;
}

export const PromptForm = ({ onSubmit, isLoading, error }: PromptFormProps) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Textarea
          placeholder="Contoh: Buat website portfolio untuk fotografer dengan galeri foto, tentang saya, layanan, dan kontak. Gunakan tema minimalis dengan warna putih dan hitam..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] resize-none border-violet-200 focus:border-violet-400 focus:ring-violet-400"
          disabled={isLoading}
        />
        <p className="text-xs text-gray-500">
          Minimal 10 karakter. Pastikan menyebutkan kata "website" dalam deskripsi.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={isLoading || prompt.trim().length < 10}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium py-3"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Generating Website...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 mr-2" />
            Generate Website
          </>
        )}
      </Button>

      <div className="text-xs text-gray-500 text-center">
        Proses generate biasanya memakan waktu 30-60 detik
      </div>
    </form>
  );
};
