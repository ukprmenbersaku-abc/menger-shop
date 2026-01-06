import React from 'react';
import { Box, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Box className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl tracking-tight text-slate-800">Menger Shop</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">フラクタルとは？</a>
              <a href="#features" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">素材について</a>
              <a href="#details" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">商品詳細</a>
            </div>
            <a 
              href="https://jp.mercari.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              メルカリで見る
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};