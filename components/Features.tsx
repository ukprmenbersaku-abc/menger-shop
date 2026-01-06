import React, { useState, useEffect } from 'react';
import { Leaf, Box, Feather, Sparkles, X, ArrowRight } from 'lucide-react';

interface FeatureItem {
  name: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  image: string;
}

const features: FeatureItem[] = [
  {
    name: '環境に優しいPLA素材',
    description: '植物由来のバイオプラスチック「PLA」を使用。環境負荷が少なく、硬くて丈夫な仕上がりです。',
    longDescription: 'PLA（ポリ乳酸）は、トウモロコシやサトウキビなどの植物に含まれるデンプンを原料としたバイオマスプラスチックです。石油由来のプラスチックとは異なり、カーボンニュートラルな素材として注目されています。独特の光沢感と硬質感があり、メンガーのスポンジのシャープな形状を表現するのに最適です。自然環境に配慮した、未来志向の素材です。',
    icon: Leaf,
    image: 'https://picsum.photos/seed/nature1/800/600'
  },
  {
    name: '驚きの軽さ',
    description: '複雑な穴あき構造のため、見た目のボリュームに対して驚くほど軽量。鍵につけても邪魔になりません。',
    longDescription: '一見複雑で詰まっているように見えるメンガーのスポンジですが、フラクタル構造により体積は段階が進むごとに削ぎ落とされていきます。このキーホルダーは内部が空洞に近い構造になっているため、金属製のキーホルダーとは比較にならないほどの軽さを実現しています。カバンやスマホにつけても重さを感じさせず、軽やかに揺れます。',
    icon: Feather,
    image: 'https://picsum.photos/seed/feather1/800/600'
  },
  {
    name: '緻密な幾何学構造',
    description: '数学的なフラクタル構造「メンガーのスポンジ」。穴を覗き込むたびに新しい発見があります。',
    longDescription: 'メンガーのスポンジは、自己相似性を持つフラクタル図形の一種です。理論上は穴をあける操作を無限に繰り返しますが、このキーホルダーはその「レベル3」の近似モデルとして造形されています。光を当てた時の複雑な陰影や、見る角度によって変わる幾何学的な美しさは、数学的な構造の奥深さを感じさせてくれます。',
    icon: Box,
    image: 'https://picsum.photos/seed/geometry1/800/600'
  },
  {
    name: '洗練されたモノトーン',
    description: '光と影が際立つホワイトとブラック。構造の美しさを最大限に引き出す、厳選された2色展開です。',
    longDescription: '複雑なフラクタル構造の美しさを最も純粋に味わっていただくため、カラーはあえて「ホワイト」と「ブラック」の2色に絞りました。ホワイトはその複雑な階層構造を明瞭に際立たせ、輪郭を鋭く見せるブラックはモダンでクールな印象を与えます。ミニマルだからこそ、構造の奥行きが際立つ究極のデザインです。',
    icon: Sparkles,
    image: 'https://picsum.photos/seed/colors1/800/600'
  },
];

export const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  // モーダル表示中は背景スクロールを防止
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFeature]);

  return (
    <>
      <div id="features" className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why Choose This?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              ただのキーホルダーではありません
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              各カードをクリックして、詳細をご覧ください。
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div 
                  key={feature.name} 
                  onClick={() => setSelectedFeature(feature)}
                  className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group border border-transparent hover:border-indigo-200"
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white group-hover:bg-indigo-600 transition-colors shadow-md">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-slate-900 flex items-center justify-between">
                      {feature.name}
                      <ArrowRight className="h-5 w-5 text-indigo-300 group-hover:text-indigo-600 transition-colors" />
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-slate-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedFeature && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedFeature(null)}
          ></div>

          {/* Modal Panel */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in duration-200">
            
            {/* Image Header */}
            <div className="relative h-48 sm:h-64 bg-slate-200 group">
              <img 
                src={selectedFeature.image} 
                alt={selectedFeature.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-all hover:rotate-90 duration-300"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-4 sm:left-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <selectedFeature.icon className="h-5 w-5 text-indigo-300" />
                  <span className="text-sm font-medium text-indigo-200">Feature Detail</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">{selectedFeature.name}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {selectedFeature.longDescription}
              </p>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};