import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductDetails } from './components/ProductDetails';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      
      {/* Visual Divider / Gallery Teaser */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 opacity-80">
             {/* Using standard placeholder images styled to look like product shots */}
             <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300">
               {/* Google DriveのプレビューURLから画像表示用URL形式(thumbnail API)に変換して使用 */}
               <img src="https://drive.google.com/thumbnail?id=1ZXtePgoC_36-nDxs0cyqkXll8CPAsqq2&sz=w1000" alt="Menger Sponge Blue" className="w-full h-full object-cover" />
             </div>
             <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 mt-8">
               <img src="https://picsum.photos/400/400?random=3" alt="Menger Sponge Red" className="w-full h-full object-cover" />
             </div>
             <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-300">
               <img src="https://picsum.photos/400/400?random=4" alt="Menger Sponge Green" className="w-full h-full object-cover" />
             </div>
          </div>
          <p className="text-center text-slate-400 mt-6 text-sm">※写真はイメージです</p>
        </div>
      </section>

      <Features />
      
      <ProductDetails />
      
      {/* About Section */}
      <section id="about" className="py-16 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">メンガーのスポンジとは？</h2>
          <p className="text-lg text-indigo-100 leading-relaxed mb-8">
            立方体を3等分し、真ん中を抜き取る。残った立方体に対して同じ操作を無限に繰り返す...。<br/>
            こうして生まれるのが「メンガーのスポンジ」です。<br/><br/>
            理論上、体積はゼロに近づき、表面積は無限大になる。<br/>
            この不思議な数学的オブジェを、最新の3Dプリンター技術で「レベル3」の近似モデルとして形にしました。
          </p>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">あなたのコレクションに加えませんか？</h2>
          <p className="mb-8 text-indigo-100">
            数学のアートを持ち歩こう。
          </p>
          <a 
            href="https://jp.mercari.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white rounded-full shadow-lg hover:bg-slate-50 transition-all duration-200"
          >
            メルカリで今すぐチェック！
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;