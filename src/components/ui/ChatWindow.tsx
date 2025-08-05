import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWindow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Al-Fraskhan's portfolio assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useAppContext();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('technology')) {
      return "Al-Fraskhan is skilled in React, TypeScript, Node.js, Python, and various web technologies. You can check out the Skills section for more details!";
    } else if (lowerMessage.includes('projects') || lowerMessage.includes('work')) {
      return "Al-Fraskhan has worked on several exciting projects including web applications and software solutions. Check out the Projects section to see his work!";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
      return "You can reach Al-Fraskhan at alfraskhanj@gmail.com or connect with him on LinkedIn. There's a contact form in the Contact section too!";
    } else if (lowerMessage.includes('experience')) {
      return "Al-Fraskhan is an aspiring software engineer and IT student with experience in full-stack development. Check the Experience section for more details!";
    } else {
      return "Thanks for your message! I'm here to help you learn more about Al-Fraskhan's portfolio. Feel free to ask about his skills, projects, experience, or how to contact him.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isDarkMode
            ? 'bg-accent text-black-100 hover:bg-accent/90'
            : 'bg-accent-light text-white hover:bg-accent-light/90'
        } max-[640px]:bottom-4 max-[640px]:right-4 max-[640px]:p-3`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <FaTimes className={`h-6 w-6 ${isDarkMode ? 'text-accent' : 'text-accent-light'}`} />
        ) : (
          <span className="text-xl">💬</span>
        )}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-24 right-6 z-40 w-80 h-96 md:w-80 md:h-96 sm:w-72 sm:h-80 rounded-lg shadow-2xl overflow-hidden ${
              isDarkMode ? 'bg-black-100 border border-gray-800' : 'bg-white border border-gray-200'
            } 
            /* Mobile responsive adjustments */
            max-[640px]:fixed max-[640px]:bottom-20 max-[640px]:right-4 max-[640px]:left-4 max-[640px]:w-auto max-[640px]:h-[70vh]`}
          >
            {/* Chat Header */}
            <div className={`p-4 border-b ${
              isDarkMode 
                ? 'bg-gradient-to-r from-accent/20 to-secondary/20 border-gray-800' 
                : 'bg-gradient-to-r from-accent-light/20 to-secondary-light/20 border-gray-200'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  isDarkMode ? 'bg-accent/20' : 'bg-accent-light/20'
                }`}>
                  <span className="text-sm">🤖</span>
                </div>
                <div>
                  <h3 className={`font-semibold ${
                    isDarkMode ? 'text-white-100' : 'text-gray-800'
                  }`}>
                    Portfolio Assistant
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`p-1.5 rounded-full flex-shrink-0 ${
                      message.sender === 'user'
                        ? isDarkMode ? 'bg-accent/20' : 'bg-accent-light/20'
                        : isDarkMode ? 'bg-secondary/20' : 'bg-secondary-light/20'
                    }`}>
                      {message.sender === 'user' ? (
                        <span className="text-xs">👤</span>
                      ) : (
                        <span className="text-xs">🤖</span>
                      )}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? isDarkMode 
                          ? 'bg-accent text-black-100' 
                          : 'bg-accent-light text-white'
                        : isDarkMode
                          ? 'bg-gray-800 text-white-100'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 opacity-70`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t ${
              isDarkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isDarkMode
                      ? 'bg-gray-800 text-white-100 placeholder-gray-400 border border-gray-700 focus:border-accent'
                      : 'bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-accent-light'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDarkMode ? 'focus:ring-accent' : 'focus:ring-accent-light'
                  }`}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ''}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    inputValue.trim() === ''
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105'
                  } ${
                    isDarkMode
                      ? 'bg-accent text-black-100 hover:bg-accent/90'
                      : 'bg-accent-light text-white hover:bg-accent-light/90'
                  }`}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send message"
                >
                  <span className="text-sm">➤</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
    </>
  );
};

export default ChatWindow;