import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Zap, 
  Activity, 
  Brain, 
  Eye, 
  Heart, 
  Target, 
  BarChart3, 
  Cpu, 
  Camera, 
  Smartphone,
  Leaf,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react';
import techImage from '../assets/nRcrzUK0AOaN.jpg';

const TechDatabase = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const techCategories = [
    {
      id: 'monitoring',
      name: '生理監測',
      icon: <Heart className="h-6 w-6" />,
      color: 'red',
      description: '即時監測選手生理狀態與運動表現'
    },
    {
      id: 'analysis',
      name: 'AI分析',
      icon: <Brain className="h-6 w-6" />,
      color: 'blue',
      description: '人工智慧驅動的數據分析與預測'
    },
    {
      id: 'biomechanics',
      name: '生物力學',
      icon: <Activity className="h-6 w-6" />,
      color: 'green',
      description: '動作分析與技術優化系統'
    },
    {
      id: 'referee',
      name: '智慧裁判',
      icon: <Eye className="h-6 w-6" />,
      color: 'purple',
      description: 'AI輔助裁判與即時判決系統'
    }
  ];

  const technologies = [
    {
      id: 1,
      category: 'monitoring',
      name: 'GPS穿戴裝置',
      description: '即時追蹤選手位置、速度、加速度等運動數據',
      features: [
        '即時GPS定位追蹤',
        '心率變異監測',
        '跑動距離統計',
        '衝刺次數記錄',
        '疲勞指數分析'
      ],
      benefits: [
        '預防運動傷害',
        '優化訓練強度',
        '科學化人員調度',
        '提升競技表現'
      ],
      accuracy: 95,
      realtime: true,
      icon: <Target className="h-8 w-8 text-red-600" />
    },
    {
      id: 2,
      category: 'analysis',
      name: 'AI智慧分析平台',
      description: '整合多源數據，提供深度運動表現分析',
      features: [
        '多維度數據整合',
        '預測性分析模型',
        '個人化建議生成',
        '團隊戰術分析',
        '對手弱點識別'
      ],
      benefits: [
        '數據驅動決策',
        '戰術優化建議',
        '選手潛力評估',
        '訓練計畫客製化'
      ],
      accuracy: 92,
      realtime: true,
      icon: <Brain className="h-8 w-8 text-blue-600" />
    },
    {
      id: 3,
      category: 'biomechanics',
      name: '智慧曲棍球棒',
      description: '內置感測器的智慧球具，分析擊球技術',
      features: [
        '揮桿速度測量',
        '擊球角度分析',
        '力量分佈監測',
        '技術動作評估',
        '改善建議提供'
      ],
      benefits: [
        '技術動作優化',
        '擊球精準度提升',
        '個人化訓練指導',
        '傷害風險降低'
      ],
      accuracy: 98,
      realtime: true,
      icon: <Activity className="h-8 w-8 text-green-600" />
    },
    {
      id: 4,
      category: 'referee',
      name: 'AI裁判輔助系統',
      description: '多機位高速攝影結合AI，輔助裁判判決',
      features: [
        '多角度高速攝影',
        '即時影像分析',
        '越位自動檢測',
        '進球確認系統',
        '爭議回放功能'
      ],
      benefits: [
        '提升判決準確性',
        '減少爭議判罰',
        '加快比賽節奏',
        '增強觀賽體驗'
      ],
      accuracy: 99,
      realtime: true,
      icon: <Eye className="h-8 w-8 text-purple-600" />
    },
    {
      id: 5,
      category: 'analysis',
      name: '數據視覺化系統',
      description: '即時數據視覺化呈現，提升觀賽體驗',
      features: [
        '即時數據圖表',
        '熱區分佈圖',
        '控球率統計',
        '選手軌跡追蹤',
        '比賽統計分析'
      ],
      benefits: [
        '增強觀賽體驗',
        '提供專業分析',
        '教育觀眾理解',
        '媒體內容豐富'
      ],
      accuracy: 94,
      realtime: true,
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />
    },
    {
      id: 6,
      category: 'monitoring',
      name: '碳足跡監測系統',
      description: '即時追蹤賽事碳排放，實現永續目標',
      features: [
        '能源消耗監測',
        '交通碳排計算',
        '廢棄物追蹤',
        '碳中和建議',
        '永續報告生成'
      ],
      benefits: [
        '環境影響透明化',
        '永續目標達成',
        'ESG價值提升',
        '綠色賽事認證'
      ],
      accuracy: 90,
      realtime: true,
      icon: <Leaf className="h-8 w-8 text-green-600" />
    }
  ];

  const stats = [
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: '數據處理速度',
      value: '1000+',
      unit: '筆/秒',
      description: '即時處理運動數據'
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: '攝影機數量',
      value: '24',
      unit: '台',
      description: '多角度高速攝影'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: '同時監測選手',
      value: '32',
      unit: '人',
      description: '全場選手即時監測'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: '數據延遲',
      value: '<100',
      unit: 'ms',
      description: '近乎即時的數據傳輸'
    }
  ];

  const filteredTechnologies = selectedTech 
    ? technologies.filter(tech => tech.category === selectedTech)
    : technologies;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            運動科技資料庫
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索最前沿的運動科技應用，體驗數據驅動的智慧賽場
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                智慧賽場革命
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                結合AI人工智慧、物聯網感測器、大數據分析等前沿技術，
                打造全方位的智慧運動科技生態系統，提升競技水準與觀賽體驗。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                      <span className="text-sm text-gray-500 ml-1">{stat.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={techImage} 
                alt="運動科技" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Technology Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">技術分類</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category) => (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedTech === category.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setSelectedTech(selectedTech === category.id ? null : category.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-${category.color}-100`}>
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Details */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedTech 
                ? `${techCategories.find(c => c.id === selectedTech)?.name}技術`
                : '所有技術'
              }
            </h2>
            {selectedTech && (
              <Button variant="outline" onClick={() => setSelectedTech(null)}>
                顯示全部
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTechnologies.map((tech) => (
              <Card key={tech.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {tech.icon}
                    <div>
                      <CardTitle className="text-xl">{tech.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          準確度 {tech.accuracy}%
                        </Badge>
                        {tech.realtime && (
                          <Badge className="bg-green-500 text-white text-xs">
                            即時
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="features">功能特色</TabsTrigger>
                      <TabsTrigger value="benefits">應用效益</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="features" className="mt-4">
                      <ul className="space-y-2">
                        {tech.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="benefits" className="mt-4">
                      <ul className="space-y-2">
                        {tech.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">技術成熟度</span>
                      <span className="text-sm font-semibold">{tech.accuracy}%</span>
                    </div>
                    <Progress value={tech.accuracy} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">數據流程</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">數據收集</h3>
                  <p className="text-sm text-gray-600">
                    穿戴裝置、攝影機、感測器即時收集運動數據
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">數據處理</h3>
                  <p className="text-sm text-gray-600">
                    AI演算法即時處理與分析多維度運動數據
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">視覺化呈現</h3>
                  <p className="text-sm text-gray-600">
                    即時圖表、熱區圖、統計數據視覺化呈現
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">智慧建議</h3>
                  <p className="text-sm text-gray-600">
                    基於數據分析提供個人化訓練與戰術建議
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Innovation Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">創新亮點</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <span>AI運動教練</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  賽後提供個人化AI運動教練報告，包含運動強度分析、
                  技術動作建議及潛在傷害風險評估。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>個人化訓練建議</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>傷害預防分析</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>技術改善指導</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span>永續科技</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  建立賽事碳足跡透明化儀表板，利用AI與大數據即時追蹤
                  並公開賽事的碳排放數據。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>即時碳排放監測</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>永續目標追蹤</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>綠色賽事認證</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">體驗未來運動科技</h2>
          <p className="text-xl mb-6 opacity-90">
            親臨現場感受運動科技的魅力，見證數據驅動的競技革命
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              預約體驗
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              技術合作洽詢
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechDatabase;

