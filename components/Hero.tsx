import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Desktop: h-[calc(100vh-64px)] ensures it fits exactly under the 64px navbar */}
      <div className="lg:h-[calc(100vh-64px)] flex items-center">
        
        {/* Text Content Area */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-0 flex flex-col justify-center lg:h-full">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">手のひらに収まる</span>{' '}
                  <span className="block text-indigo-600 xl:inline">幾何学の迷宮</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  数学的な美しさを日常に。独特なフラクタル構造を持つ「メンガーのスポンジ」を、環境に優しいPLA素材で精密に3Dプリントしました。
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <Button 
                    onClick={() => window.open('https://jp.mercari.com', '_blank')}
                    className="w-full sm:w-auto"
                  >
                    メルカリで探す
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto mt-3 sm:mt-0"
                  >
                    もっと詳しく <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Image Area */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-50 h-64 sm:h-72 md:h-96 lg:h-full">
          <img
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            src="https://picsum.photos/800/800?random=1"
            alt="Menger Sponge Keychain Close-up"
          />
          {/* Gradient overlay for better text readability transition */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-white/20 lg:to-white"></div>
        </div>
      </div>
    </div>
  );
};