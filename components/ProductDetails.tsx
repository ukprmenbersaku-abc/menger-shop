import React from 'react';

export const ProductDetails: React.FC = () => {
  return (
    <div id="details" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">商品詳細</h2>
          <p className="mt-4 text-lg text-slate-500">
            3Dプリンターで一つひとつ丁寧に製造された、こだわりの一品です。
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <dl>
            <div className="bg-white px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">商品名</dt>
              <dd className="text-sm text-slate-900 sm:col-span-2 font-medium">メンガーのスポンジ・キーホルダー (Level 3 モデル)</dd>
            </div>
            <div className="bg-slate-50 px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100 hover:bg-white transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">サイズ</dt>
              <dd className="text-sm text-slate-900 sm:col-span-2">約 30mm × 30mm × 30mm（本体部分）</dd>
            </div>
            <div className="bg-white px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">重量</dt>
              <dd className="text-sm text-slate-900 sm:col-span-2">約 10g（金具含む）</dd>
            </div>
            <div className="bg-slate-50 px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100 hover:bg-white transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">素材</dt>
              <dd className="text-sm text-slate-900 sm:col-span-2">PLA（ポリ乳酸 / 植物由来バイオプラスチック）</dd>
            </div>
            <div className="bg-white px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">カラー</dt>
              <dd className="text-sm text-slate-900 sm:col-span-2">ホワイト / ブラック</dd>
            </div>
            <div className="bg-slate-50 px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 hover:bg-white transition-colors">
              <dt className="text-sm font-medium text-red-500 flex items-start mt-1">取り扱い上の注意</dt>
              <dd className="text-sm text-slate-600 sm:col-span-2">
                <ul className="list-disc list-outside pl-4 space-y-1">
                  <li>PLA素材は熱に弱いため、<strong>50℃以上の環境（夏の車内など）</strong>に長時間放置しないでください。変形の原因になります。</li>
                  <li>強い衝撃を与えると破損する恐れがありますので、ご注意ください。</li>
                  <li>形状の特性上、<strong>角が尖っている部分</strong>があります。お取り扱いの際は怪我をしないよう十分ご注意ください。</li>
                  <li>3Dプリンター特有の積層痕（細かい横縞）が見られる場合がありますが、製造上の仕様となります。</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};