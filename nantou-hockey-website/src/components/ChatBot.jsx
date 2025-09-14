import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, MessageCircle, Clock, HelpCircle, Ticket, MapPin } from 'lucide-react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: '您好！我是南投國際曲棍球邀請賽的AI客服助手。我可以協助您了解賽事資訊、購票流程、觀光方案等相關問題。請問有什麼可以為您服務的嗎？',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    {
      icon: <Ticket className="h-4 w-4" />,
      text: '如何購買門票？',
      category: '購票'
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: '比賽地點在哪裡？',
      category: '賽事'
    },
    {
      icon: <Clock className="h-4 w-4" />,
      text: '賽程安排如何？',
      category: '賽事'
    },
    {
      icon: <HelpCircle className="h-4 w-4" />,
      text: '觀光套票有哪些？',
      category: '觀光'
    }
  ];

  const faqData = [
    {
      category: '賽事資訊',
      questions: [
        {
          q: '比賽什麼時候舉行？',
          a: '2025年7月26日至31日，為期6天的精彩賽事。'
        },
        {
          q: '比賽地點在哪裡？',
          a: '南投縣竹山高中曲棍球場，地址：南投縣竹山鎮。'
        },
        {
          q: '有哪些國家參賽？',
          a: '共有5個國家6支隊伍參賽，包括中華台北、日本、韓國、馬來西亞、新加坡、泰國等。'
        }
      ]
    },
    {
      category: '購票資訊',
      questions: [
        {
          q: '票價多少？',
          a: '一般票NT$500、精緻票NT$1,200、VIP票NT$2,500、家庭套票NT$1,800。'
        },
        {
          q: '如何購票？',
          a: '可透過官網購票系統線上購買，或電洽049-123-4567。'
        },
        {
          q: '可以退票嗎？',
          a: '賽事前7天可全額退票，3-7天退票收取10%手續費，3天內恕不退票。'
        }
      ]
    },
    {
      category: '觀光資訊',
      questions: [
        {
          q: '有觀光套票嗎？',
          a: '有的！我們提供日月潭湖光山色觀賽之旅、清境高山觀賽套票、VIP頂級觀賽體驗等多種選擇。'
        },
        {
          q: '套票包含什麼？',
          a: '包含賽事門票、住宿、餐食、景點門票、AR文化體驗等，詳細內容請查看觀光合作頁面。'
        }
      ]
    }
  ];

  // 模擬AI回應
  const generateBotResponse = async (userMessage) => {
    setIsTyping(true);
    
    // 模擬API延遲
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let response = '';
    const lowerMessage = userMessage.toLowerCase();
    
    // 簡單的關鍵字匹配邏輯
    if (lowerMessage.includes('票') || lowerMessage.includes('購買') || lowerMessage.includes('價格')) {
      response = '關於購票資訊：\n\n🎫 票種與價格：\n• 一般票：NT$500\n• 精緻票：NT$1,200（含AR體驗）\n• VIP票：NT$2,500（含元宇宙觀賽）\n• 家庭套票：NT$1,800（4人）\n\n💳 購票方式：\n• 線上購票：官網購票系統\n• 電話購票：049-123-4567\n• 現場購票：竹山高中售票處\n\n需要我協助您購票嗎？';
    } else if (lowerMessage.includes('時間') || lowerMessage.includes('日期') || lowerMessage.includes('賽程')) {
      response = '📅 賽事時間安排：\n\n• 7/26 (六)：開幕典禮 + 首輪比賽\n• 7/27 (日)：小組賽第二輪\n• 7/28 (一)：小組賽第三輪\n• 7/29 (二)：準決賽\n• 7/30 (三)：季軍賽 + 冠軍賽\n• 7/31 (四)：閉幕典禮 + 頒獎\n\n⏰ 每日比賽時間：09:00-18:00\n\n想了解特定日期的詳細賽程嗎？';
    } else if (lowerMessage.includes('地點') || lowerMessage.includes('位置') || lowerMessage.includes('在哪')) {
      response = '📍 比賽地點資訊：\n\n🏟️ 主場地：南投縣竹山高中曲棍球場\n📮 地址：南投縣竹山鎮\n\n🚗 交通方式：\n• 自行開車：國道3號竹山交流道\n• 大眾運輸：高鐵台中站轉乘接駁車\n• 免費停車：精緻票以上享免費停車\n\n🎯 場地特色：\n• FIH國際認證場地\n• 1000席觀眾座位\n• LED大螢幕即時數據\n• AR文化體驗區\n\n需要詳細的交通指引嗎？';
    } else if (lowerMessage.includes('觀光') || lowerMessage.includes('旅遊') || lowerMessage.includes('套票')) {
      response = '🌟 觀光套票推薦：\n\n🏞️ 日月潭湖光山色觀賽之旅 (NT$3,999)\n• 2天1夜 + 賽事門票\n• 日月潭遊湖 + 纜車體驗\n• AR邵族文化體驗\n\n⛰️ 清境高山觀賽套票 (NT$4,599)\n• 3天2夜 + 賽事門票\n• 清境農場 + 合歡山日出\n• 高山民宿住宿\n\n👑 VIP頂級觀賽體驗 (NT$8,999)\n• 3天2夜 + VIP座位\n• 五星飯店 + 米其林餐廳\n• 元宇宙觀賽體驗\n\n想了解哪個套票的詳細內容？';
    } else if (lowerMessage.includes('科技') || lowerMessage.includes('AI') || lowerMessage.includes('元宇宙')) {
      response = '🚀 運動科技亮點：\n\n🤖 AI智慧裁判系統\n• 多機位高速攝影\n• 即時判罰輔助\n• 鷹眼級回放技術\n\n📊 數據分析平台\n• GPS穿戴裝置監測\n• 生物力學軌跡分析\n• 即時數據視覺化\n\n🌐 元宇宙觀賽體驗\n• 360度虛擬觀賽\n• 數位孿生技術\n• 互動式數據查看\n\n🎯 AR文化體驗\n• 布農族圖騰動畫\n• 日月潭傳說導覽\n• 竹山竹藝工坊\n\n想體驗哪項科技功能？';
    } else if (lowerMessage.includes('報名') || lowerMessage.includes('參賽')) {
      response = '🏆 隊伍報名資訊：\n\n📋 報名資格：\n• 各國國家代表隊或頂級俱樂部\n• 18人完整名單（16+2替補）\n• FIH註冊證明\n• 健康檢查報告\n\n📅 重要日期：\n• 報名截止：2025/6/30\n• 文件繳交：2025/7/15\n• 賽事開始：2025/7/26\n\n💰 報名費用：免費\n\n🎁 參賽優勢：\n• AI運動教練報告\n• 運動科技體驗\n• FIH積分認證\n• 國際交流機會\n\n需要報名表單嗎？';
    } else {
      response = '感謝您的提問！我是南投國際曲棍球邀請賽的AI客服助手。\n\n我可以協助您了解：\n🎫 購票資訊與票價\n📅 賽程安排與時間\n📍 比賽地點與交通\n🌟 觀光套票方案\n🚀 運動科技體驗\n🏆 隊伍報名資訊\n\n請告訴我您想了解哪方面的資訊，或者點選下方的快速問題！\n\n如需人工客服，請撥打：049-123-4567';
    }
    
    setIsTyping(false);
    return response;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    const botResponse = await generateBotResponse(inputMessage);
    
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: botResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleQuickQuestion = async (question) => {
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    const botResponse = await generateBotResponse(question);
    
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: botResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI智慧客服
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            24小時智慧客服服務，即時回答您關於賽事、購票、觀光等各種問題
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI客服助手</CardTitle>
                    <CardDescription className="text-blue-100">
                      基於Gemini AI技術，即時回答您的問題
                    </CardDescription>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="secondary" className="bg-green-500 text-white">
                      線上
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={`rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                          <div className={`text-xs mt-1 opacity-70 ${
                            message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <Bot className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="mb-3">
                    <span className="text-sm text-gray-600">快速問題：</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickQuestion(question.text)}
                        className="text-xs"
                      >
                        {question.icon}
                        <span className="ml-1">{question.text}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="輸入您的問題..."
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>常見問題</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqData.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-blue-600 mb-2">{category.category}</h4>
                    <div className="space-y-2">
                      {category.questions.map((faq, idx) => (
                        <div key={idx} className="text-sm">
                          <button
                            onClick={() => handleQuickQuestion(faq.q)}
                            className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            Q: {faq.q}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>人工客服</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">服務時間：</span>
                    <br />
                    週一至週五 09:00-18:00
                  </div>
                  <div>
                    <span className="font-semibold">聯絡電話：</span>
                    <br />
                    049-123-4567
                  </div>
                  <div>
                    <span className="font-semibold">電子郵件：</span>
                    <br />
                    service@nantou-hockey.tw
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  聯絡人工客服
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI技術說明</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                <p>
                  本客服系統採用Google Gemini AI技術，
                  能夠理解自然語言並提供準確的賽事資訊。
                  如需更複雜的協助，建議聯絡人工客服。
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  * API Key已在後端安全配置
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

