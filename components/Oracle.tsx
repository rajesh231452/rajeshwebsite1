import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send } from 'lucide-react';
import { askTheOracle } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';

const Oracle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', text: "Greetings, Muggle. I am the Portrait of Rajesh. Ask me of his feats, his spells (code), or his journey.", sender: ChatSender.WIZARD }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), text: input, sender: ChatSender.USER };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const answer = await askTheOracle(input);
    const wizardMsg: ChatMessage = { id: (Date.now() + 1).toString(), text: answer, sender: ChatSender.WIZARD };
    
    setMessages(prev => [...prev, wizardMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 bg-indigo-900 text-gold p-4 rounded-full border-4 border-gold shadow-[0_0_20px_rgba(255,215,0,0.5)] interactive"
        whileHover={{ scale: 1.1, rotate: 10 }}
        onClick={() => setIsOpen(true)}
      >
        <Sparkles size={24} />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-parchment w-full max-w-md h-[600px] border-8 border-double border-indigo-900 rounded-lg shadow-2xl flex flex-col relative overflow-hidden"
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
            >
              {/* Header */}
              <div className="bg-indigo-900 text-gold p-4 flex justify-between items-center border-b-4 border-gold">
                <h3 className="font-wizard font-bold text-xl">The Oracle Portrait</h3>
                <button onClick={() => setIsOpen(false)} className="hover:text-white interactive">
                  <X size={24} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-halftone-pattern">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg border-2 border-ink shadow-md font-typewriter text-sm ${
                        msg.sender === ChatSender.USER 
                          ? 'bg-white text-ink rounded-br-none transform rotate-1' 
                          : 'bg-indigo-100 text-indigo-900 rounded-bl-none transform -rotate-1'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-center font-wizard text-indigo-900 animate-pulse">
                    Consulting the stars...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-parchment border-t-4 border-indigo-900">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask the wizard..."
                    className="flex-1 bg-white border-2 border-ink p-2 font-typewriter focus:outline-none focus:border-crimson"
                  />
                  <button 
                    onClick={handleSend}
                    className="bg-crimson text-white p-2 border-2 border-ink hover:bg-red-800 interactive"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>

              {/* Decor */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Oracle;