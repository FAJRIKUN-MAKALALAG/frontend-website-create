
import { useState } from 'react';
import { Sparkles, Code, Download, Eye, Zap, Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { PromptForm } from '@/components/PromptForm';
import { ResultDisplay } from '@/components/ResultDisplay';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleGenerate = async (promptText: string) => {
    console.log('Generating website for prompt:', promptText);
    
    if (!promptText.toLowerCase().includes('website')) {
      setError('Prompt harus mengandung kata kunci "website"');
      toast({
        title: "Error",
        description: "Prompt harus mengandung kata kunci 'website'",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedCode('');

    try {
      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock generated code
      const mockCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-6">
                Website Generated Successfully!
            </h1>
            <p class="text-lg text-gray-600 mb-8">
                ${promptText}
            </p>
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-semibold mb-4">Welcome to Your New Website</h2>
                <p class="text-gray-600">This website was generated based on your prompt using AI technology.</p>
                <button class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                </button>
            </div>
        </div>
    </div>
</body>
</html>`;

      setGeneratedCode(mockCode);
      toast({
        title: "Success!",
        description: "Website berhasil di-generate",
      });
    } catch (err) {
      setError('Terjadi kesalahan saat generate website');
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat generate website",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    console.log('Downloading generated website...');
    
    if (!generatedCode) {
      toast({
        title: "Error",
        description: "Tidak ada website untuk didownload",
        variant: "destructive",
      });
      return;
    }

    // Create blob and download
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Success!",
      description: "Website berhasil didownload",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                AI Website Generator
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                <Zap className="w-3 h-3 mr-1" />
                Powered by AI
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-gray-700">
              Generate Website dalam Sekejap
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Buat Website dengan
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent block">
              Kekuatan AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Deskripsikan website impian Anda, dan biarkan AI membuat kode lengkap 
            dalam hitungan detik. Download langsung sebagai project React siap pakai!
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Code className="w-4 h-4 mr-2" />
              React + TailwindCSS
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Download className="w-4 h-4 mr-2" />
              Download ZIP
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Eye className="w-4 h-4 mr-2" />
              Live Preview
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Rocket className="w-4 h-4 mr-2" />
              Siap Deploy
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input Form */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                  <span>Deskripsikan Website Anda</span>
                </CardTitle>
                <CardDescription>
                  Jelaskan dengan detail website seperti apa yang ingin Anda buat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PromptForm
                  onSubmit={handleGenerate}
                  isLoading={isLoading}
                  error={error}
                />
              </CardContent>
            </Card>

            {/* Example Prompts */}
            <Card className="bg-white/60 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-lg">💡 Contoh Prompt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-violet-50"
                    onClick={() => setPrompt("Buat website portfolio untuk freelancer dengan section hero, about, skills, projects, dan contact")}
                  >
                    <div>
                      <div className="font-medium text-sm">Website Portfolio Freelancer</div>
                      <div className="text-xs text-gray-500">Hero, About, Skills, Projects, Contact</div>
                    </div>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-violet-50"
                    onClick={() => setPrompt("Buat website landing page untuk aplikasi mobile dengan fitur download app, testimonial, dan pricing")}
                  >
                    <div>
                      <div className="font-medium text-sm">Landing Page App Mobile</div>
                      <div className="text-xs text-gray-500">Download, Testimonial, Pricing</div>
                    </div>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-violet-50"
                    onClick={() => setPrompt("Buat website company profile untuk startup teknologi dengan section team, services, dan blog")}
                  >
                    <div>
                      <div className="font-medium text-sm">Company Profile Startup</div>
                      <div className="text-xs text-gray-500">Team, Services, Blog</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {isLoading && (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <LoadingSpinner />
                </CardContent>
              </Card>
            )}

            {!isLoading && !generatedCode && (
              <Card className="bg-white/60 backdrop-blur-sm border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-violet-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Siap untuk Generate?</h3>
                  <p className="text-gray-500">
                    Masukkan deskripsi website Anda di sebelah kiri untuk memulai
                  </p>
                </CardContent>
              </Card>
            )}

            {generatedCode && (
              <ResultDisplay
                code={generatedCode}
                onDownload={handleDownload}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 AI Website Generator. Built with React + AI Technology.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
