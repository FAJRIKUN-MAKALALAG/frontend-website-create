
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Sparkles, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Website Generator</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Generate website dengan AI</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
                <LogIn className="w-4 h-4 mr-2" />
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                <User className="w-4 h-4 mr-2" />
                Daftar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
