import React, { useState, useRef, useEffect } from 'react';
import { askSpongeBot } from '../services/gemini';
import { ChatMessage, LoadingState } from '../types';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは！メンガーのスポンジについて何でも聞いてね😊 「なんで穴だらけなの？」とか「素材は何？」とか答えるよ！' }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    const responseText = await askSpongeBot(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoadingState(LoadingState.SUCCESS);
  };

  return (
    <div id="ai-chat" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
                <Sparkles className="h-5 w-5 text-indigo-600" />
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                AIに聞いてみよう
              </h2>
            </div>
            <p className="mt-4 text-lg text-slate-500 mb-8">
              「これって何に使うの？」「色の種類は？」<br/>
              ちょっとした疑問も、数学的な深い質問も、<br/>
              専属のAIアシスタントがお答えします。<br/>
              おしゃべり感覚で試してみてください！
            </p>
            <div className="bg-indigo-50 rounded-xl p-6 hidden lg:block">
              <h3 className="font-semibold text-indigo-900 mb-2">よくある質問例 👇</h3>
              <ul className="space-y-2 text-indigo-700">
                <li className="cursor-pointer hover:underline" onClick={() => setInput("メンガーのスポンジって何？")}>・メンガーのスポンジって何？</li>
                <li className="cursor-pointer hover:underline" onClick={() => setInput("PLA素材の特徴は？")}>・PLA素材の特徴は？</li>
                <li className="cursor-pointer hover:underline" onClick={() => setInput("耐久性はある？")}>・耐久性はある？</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-pink-200 rounded-3xl blur-lg opacity-50 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col h-[500px]">
              
              {/* Chat Header */}
              <div className="bg-indigo-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Sponge Guide AI</h3>
                    <p className="text-indigo-200 text-xs">Powered by Gemini</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                    }`}>
                      <div className="flex items-start gap-2">
                        {msg.role === 'model' && <Bot className="h-4 w-4 mt-1 flex-shrink-0 opacity-50" />}
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {loadingState === LoadingState.LOADING && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-slate-100">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-100">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="気になることを聞いてみて..."
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                  <button 
                    type="submit" 
                    disabled={!input.trim() || loadingState === LoadingState.LOADING}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white p-3 rounded-xl transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};