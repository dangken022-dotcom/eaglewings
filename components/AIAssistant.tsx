
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const askGemini = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setResponse('상담사가 분석 중입니다...');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `말레이시아 시장 진출 전문 에이전시 'Eaglewings Agency'의 AI 상담사로서 답변해줘. 
      질문: "${input}" 
      
      조건:
      1. 한국어로 답변할 것.
      2. 친절하고 전문적인 말투를 유지할 것.
      3. 가능한 구체적인 데이터나 트렌드를 언급할 것.
      4. Eaglewings Agency의 서비스를 통한 해결 방안을 덧붙일 것.`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || '죄송합니다. 정보를 불러오는 데 실패했습니다.');
    } catch (error) {
      console.error(error);
      setResponse('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold">AI 말레이시아 진출 컨설턴트</h3>
            <p className="text-gray-500 text-sm">말레이시아 시장에 대해 무엇이든 물어보세요.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-2xl p-6 min-h-32 text-gray-800 leading-relaxed">
            {response || "안녕하세요! Eaglewings의 AI 상담사입니다. '말레이시아에서 한국 화장품의 인기는 어떤가요?' 또는 '할랄 인증이 필수인가요?' 같은 질문을 던져보세요."}
          </div>

          <div className="flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && askGemini()}
              placeholder="궁금한 내용을 입력하세요..."
              className="flex-1 bg-gray-100 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
            <button 
              onClick={askGemini}
              disabled={isLoading}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all"
            >
              {isLoading ? '...' : '질문하기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
