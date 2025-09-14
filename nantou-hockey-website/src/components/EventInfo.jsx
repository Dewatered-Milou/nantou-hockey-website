import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy, Target, Globe, Award, Clock } from 'lucide-react';
import eventImage from '../assets/DSUUs2guB8iI.jpeg';

const EventInfo = () => {
  const eventDetails = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: '賽事日期',
      content: '2025年7月26日 - 31日'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: '比賽地點',
      content: '南投縣竹山高中曲棍球場'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: '參賽隊伍',
      content: '5國6隊國際頂尖隊伍'
    },
    {
      icon: <Trophy className="h-6 w-6 text-yellow-600" />,
      title: '賽事等級',
      content: 'FIH國際積分認證賽事'
    }
  ];

  const objectives = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: '提升競技水準',
      description: '透過國際交流提升台灣曲棍球競技實力，縮短與國際強隊差距'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: '國際能見度',
      description: '打造南投成為亞洲曲棍球重要據點，爭取更高層級國際賽事主辦權'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: '品牌價值',
      description: '結合城市品牌與運動科技，建立具有國際影響力的賽事品牌'
    }
  ];

  const highlights = [
    '運動科技深度應用：GPS穿戴裝置、AI智慧裁判、生物力學分析',
    '基礎設施全面升級：FIH認證場地、國際標準觀眾席、LED顯示系統',
    '觀光資源整合：賽事×旅遊套票、AR文化體驗、智慧觀光APP',
    '永續發展理念：碳足跡透明化、綠色賽事標竿、ESG價值實踐',
    '國際交流平台：青年曲棍球交流營、文化外交、選手培訓計畫'
  ];

  const schedule = [
    { date: '7/26', event: '開幕典禮 & 首輪比賽', time: '09:00-17:00' },
    { date: '7/27', event: '小組賽第二輪', time: '09:00-17:00' },
    { date: '7/28', event: '小組賽第三輪', time: '09:00-17:00' },
    { date: '7/29', event: '準決賽', time: '14:00-17:00' },
    { date: '7/30', event: '季軍賽 & 冠軍賽', time: '14:00-17:00' },
    { date: '7/31', event: '閉幕典禮 & 頒獎', time: '16:00-18:00' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            賽事基本資訊
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2025臺灣南投國際男子曲棍球邀請賽 - 城市品牌與運動科技的完美結合
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={eventImage} 
            alt="2025南投國際曲棍球邀請賽" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventDetails.map((detail, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-2">
                  {detail.icon}
                </div>
                <CardTitle className="text-lg">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{detail.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Objectives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">賽事目標與願景</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {objective.icon}
                    <CardTitle className="text-xl">{objective.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {objective.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">賽事亮點特色</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schedule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">賽程安排</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {item.date}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-900">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Competition Rules */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">競賽規則</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">比賽規則</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 採用FIH國際曲棍球總會最新規則</li>
                    <li>• 每場比賽4節，每節15分鐘</li>
                    <li>• 小組循環賽制，前兩名晉級準決賽</li>
                    <li>• 配備AI智慧裁判輔助系統</li>
                    <li>• 即時數據分析與視覺化呈現</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">參賽資格</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 各國國家代表隊或頂級俱樂部隊伍</li>
                    <li>• 所有選手須通過反禁藥檢測</li>
                    <li>• 提供完整的選手健康檢查報告</li>
                    <li>• 配合運動科技數據收集</li>
                    <li>• 參與賽後AI運動教練分析</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Past Results */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">歷屆成績</h2>
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-600">2025年賽事結果</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥇</div>
                    <h4 className="font-semibold text-lg">冠軍</h4>
                    <p className="text-gray-600">中華台北A隊</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥈</div>
                    <h4 className="font-semibold text-lg">亞軍</h4>
                    <p className="text-gray-600">待更新</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥉</div>
                    <h4 className="font-semibold text-lg">季軍</h4>
                    <p className="text-gray-600">待更新</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-6">
                  賽事已於2025年7月26日至31日成功舉辦，吸引五國六隊參賽
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default EventInfo;

