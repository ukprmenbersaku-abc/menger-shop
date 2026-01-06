import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Menger Shop</h3>
            <p className="text-slate-400 text-sm">
              数学の美しさを、あなたのポケットに。<br/>
              PLA素材を使用したエコフレンドリーな3Dプリントアイテム。
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <a 
              href="https://jp.mercari.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              メルカリショップへ GO!
            </a>
            <p className="text-slate-500 text-xs">
              ※本サイトはデモサイトです。実際の販売状況はメルカリをご確認ください。
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Menger Sponge Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};