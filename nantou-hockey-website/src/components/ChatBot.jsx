import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, MessageCircle, Clock, HelpCircle, Ticket, MapPin } from 'lucide-react';

const contextData = `
# 2025 南投國際曲棍球邀請賽 - AI 客服參考資料

## [基本資訊]
- **賽事名稱**: 2025 南投國際曲棍球邀請賽
- **核心定位**: 結合運動、科技與觀光的國際級賽事。

## [賽事資訊]
- **比賽日期**: 2025年7月26日 (週六) 至 7月31日 (週四)，共6天。
- **每日比賽時間**: 09:00 至 18:00。
- **詳細賽程**:
  - 7/26 (六): 開幕典禮 + 首輪比賽
  - 7/27 (日): 小組賽第二輪
  - 7/28 (一): 小組賽第三輪
  - 7/29 (二): 準決賽
  - 7/30 (三): 季軍賽 + 冠軍賽
  - 7/31 (四): 閉幕典禮 + 頒獎
- **比賽地點**:
  - **場地**: 南投縣竹山高中曲棍球場
  - **地址**: 南投縣竹山鎮
  - **場地特色**: FIH國際認證場地，1000席觀眾座位，LED大螢幕，AR文化體驗區。
- **參賽隊伍**: 共有5個國家6支隊伍，包括中華台北、日本、韓國、馬來西亞、新加坡、泰國。

## [交通資訊]
- **自行開車**: 國道3號竹山交流道。
- **大眾運輸**: 搭乘高鐵至台中站，轉乘官方接駁車。
- **停車資訊**: 購買「精緻票」或更高等級的票種，可享免費停車。

## [購票資訊]
- **票種與價格**:
  - **一般票**: NT$500
  - **精緻票**: NT$1,200 (包含 AR 體驗)
  - **VIP票**: NT$2,500 (包含元宇宙觀賽體驗)
  - **家庭套票**: NT$1,800 (適用4人)
- **購票方式**:
  - **線上購票**: 透過官方網站的購票系統。
  - **電話購票**: 撥打 049-123-4567。
  - **現場購票**: 前往竹山高中售票處。
- **退票政策**:
  - 賽事前7天: 可全額退票。
  - 賽事前3-7天: 退票需收取10%手續費。
  - 賽事3天內: 恕不接受退票。

## [觀光套票資訊]
- **日月潭湖光山色觀賽之旅**:
  - **價格**: NT$3,999
  - **內容**: 2天1夜住宿，賽事門票，日月潭遊湖，纜車體驗，AR邵族文化體驗。
- **清境高山觀賽套票**:
  - **價格**: NT$4,599
  - **內容**: 3天2夜住宿，賽事門票，清境農場，合歡山日出，高山民宿。
- **VIP頂級觀賽體驗**:
  - **價格**: NT$8,999
  - **內容**: 3天2夜住宿，VIP座位門票，五星級飯店，米其林餐廳，元宇宙觀賽體驗。

## [運動科技亮點]
- **AI智慧裁判系統**: 多機位高速攝影，即時判罰輔助，鷹眼級回放。
- **數據分析平台**: GPS穿戴裝置監測，生物力學分析，即時數據視覺化。
- **元宇宙觀賽體驗**: 360度虛擬觀賽，數位孿生技術，互動式數據查看。
- **AR文化體驗**: 布農族圖騰動畫，日月潭傳說導覽，竹山竹藝工坊。

## [隊伍報名資訊]
- **報名資格**: 各國國家代表隊或頂級俱樂部，需提供18人完整名單、FIH註冊證明及健康檢查報告。
- **報名費用**: 免費。
- **重要日期**: 報名截止日為 2025/6/30，文件繳交截止日為 2025/7/15。
- **參賽優勢**: 提供AI運動教練報告，運動科技體驗，FIH積分認證等。

## [聯絡方式]
- **人工客服電話**: 049-123-4567 (服務時間: 週一至週五 09:00-18:00)
- **電子郵件**: service@nantou-hockey.tw
`;

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
    const backendUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await fetch(`${backendUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // 將用戶問題 (message) 和參考資料 (context) 一起發送
        body: JSON.stringify({ 
          message: userMessage,
          context: contextData 
        }),
      });

      if (!response.ok) {
        throw new Error(`伺服器錯誤: ${response.status}`);
      }

      const data = await response.json();
      setIsTyping(false);
      return data.reply; // 假設後端回傳格式為 { "reply": "..." }

    } catch (error) {
      console.error("無法連接到 AI 客服:", error);
      setIsTyping(false);
      return '抱歉，AI客服目前似乎無法連線，請稍後再試或聯繫人工客服。';
    }
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

