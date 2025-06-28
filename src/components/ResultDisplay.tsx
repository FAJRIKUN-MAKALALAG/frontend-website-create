
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Download, Code, Eye, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResultDisplayProps {
  code: string;
  onDownload: () => void;
}

export const ResultDisplay = ({ code, onDownload }: ResultDisplayProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Success!",
        description: "Kode berhasil disalin ke clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal menyalin kode",
        variant: "destructive",
      });
    }
  };

  const createPreviewBlob = () => {
    return URL.createObjectURL(new Blob([code], { type: 'text/html' }));
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">Website Generated Successfully!</CardTitle>
              <p className="text-sm text-gray-500">Siap untuk didownload dan digunakan</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Ready
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={onDownload}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download ZIP
          </Button>
          
          <Button 
            variant="outline"
            onClick={handleCopyCode}
            className="border-violet-200 hover:bg-violet-50"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </>
            )}
          </Button>
        </div>

        {/* Preview Tabs */}
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Source Code</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="mt-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="bg-gray-50 px-4 py-2 border-b flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">generated-website.html</div>
              </div>
              <iframe
                src={createPreviewBlob()}
                className="w-full h-96 border-0"
                title="Website Preview"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="mt-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-900 text-gray-100 p-4 text-sm font-mono overflow-auto max-h-96">
                <pre className="whitespace-pre-wrap">{code}</pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">📦 Apa yang Anda Dapatkan</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• HTML file lengkap</li>
              <li>• TailwindCSS styling</li>
              <li>• Responsive design</li>
              <li>• Siap untuk hosting</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">🚀 Langkah Selanjutnya</h4>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Download file ZIP</li>
              <li>• Extract dan edit sesuai kebutuhan</li>
              <li>• Upload ke hosting</li>
              <li>• Website Anda online!</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
