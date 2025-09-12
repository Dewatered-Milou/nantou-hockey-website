import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Trophy, 
  Users, 
  Globe, 
  Target, 
  TrendingUp, 
  Award, 
  Zap,
  MapPin,
  Clock,
  Star,
  Rocket,
  Building,
  GraduationCap,
  Heart
} from 'lucide-react';

const Event2026 = () => {
  const [selectedPhase, setSelectedPhase] = useState('short-term');

  const phases = [
    {
      id: 'short-term',
      name: '短期規劃',
      period: '2026年1月-8月',
      color: 'blue',
      icon: <Rocket className="h-6 w-6" />
    },
    {
      id: 'mid-term',
      name: '中期規劃',
      period: '2026年9月-2028年底',
      color: 'green',
      icon: <Building className="h-6 w-6" />
    },
    {
      id: 'long-term',
      name: '長期目標',
      period: '2029年起',
      color: 'purple',
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const shortTermGoals = [
    {
      quarter: '第一季 (1-3月)',
      title: '專案啟動與夥伴建立',
      tasks: [
        '成立跨單位專案小組',
        '完成場地現況評估',
        '與科技夥伴簽約',
        '向FIH提交國際積分認證申請',
        '啟動觀賽+觀光套票系統開發'
      ],
      progress: 0
    },
    {
      quarter: '第二季 (4-6月)',
      title: '建置執行與行銷預熱',
      tasks: [
        '安裝運動科技硬體設備',
        '數位孿生元宇宙介面測試',
        '基礎設施初步升級',
        '上線銷售主題套票',
        '啟動社群媒體行銷活動'
      ],
      progress: 0
    },
    {
      quarter: '第三季 (7-8月)',
      title: '賽事舉辦與評估',
      tasks: [
        '全面運作科技系統',
        '執行觀光套票行程',
        '收集各項數據評估',
        '提供AI運動教練報告',
        '賽後檢討與改善'
      ],
      progress: 0
    }
  ];

  const midTermObjectives = [
    {
      year: '2026年第四季',
      title: '基於數據優化',
      description: '深度分析2026賽事數據，優化科技平台與元宇宙內容',
      milestones: [
        '科技平台優化升級',
        '擴大招商與企業贊助',
        '與FIH洽談積分認證',
        '啟動國內社群行銷'
      ]
    },
    {
      year: '2027年',
      title: '規模擴大升級',
      description: '擴大舉辦2027年邀請賽，目標邀請8支隊伍參賽',
      milestones: [
        '邀請8支國際隊伍',
        '觀光套票多元化',
        'AI數據應用於選手培訓',
        '首次舉辦青年國際交流營'
      ]
    },
    {
      year: '2028年',
      title: '品牌鞏固發展',
      description: '建立穩定賽事品牌，擴大國際交流與學校合作',
      milestones: [
        '年度邀請賽常態化',
        '擴大與地方學校合作',
        '國際交流營規模擴大',
        '申請亞洲級別賽事主辦權'
      ]
    }
  ];

  const longTermVision = [
    {
      title: '南投青年選手孵化器',
      description: '與竹山高中等重點學校深度合作，創立系統化一條龍培訓體系',
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      features: [
        '國小到大學培育體系',
        '國際教練團隊',
        '運動科學支援',
        '海外交流計畫'
      ]
    },
    {
      title: '亞洲曲棍球發展中心',
      description: '爭取主辦FIH世界盃分站賽等頂級國際賽事',
      icon: <Globe className="h-8 w-8 text-green-600" />,
      features: [
        'FIH世界盃分站賽',
        '亞洲冠軍盃',
        '國際裁判培訓中心',
        '運動科技研發基地'
      ]
    },
    {
      title: '職業聯賽發展',
      description: '探討推動台灣曲棍球職業聯賽的可能性',
      icon: <Trophy className="h-8 w-8 text-purple-600" />,
      features: [
        '職業聯賽籌備',
        '國際資本引入',
        '媒體轉播合作',
        '商業模式建立'
      ]
    },
    {
      title: '永續發展標竿',
      description: '持續監測並優化賽事永續發展指標',
      icon: <Heart className="h-8 w-8 text-red-600" />,
      features: [
        '碳中和目標達成',
        '綠色能源使用',
        '循環經濟實踐',
        '社區共榮發展'
      ]
    }
  ];

  const budgetAllocation = [
    { category: '運動科技', percentage: 30, amount: 1500, color: 'blue' },
    { category: '基礎設施', percentage: 20, amount: 1000, color: 'green' },
    { category: '行銷觀光', percentage: 30, amount: 1500, color: 'purple' },
    { category: '行政培訓', percentage: 20, amount: 1000, color: 'orange' }
  ];

  const expectedOutcomes = [
    {
      category: '經濟效益',
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      metrics: [
        { label: '觀光收入', value: '1-2億元', description: '年度地方GDP貢獻' },
        { label: '數位經濟', value: '千萬級', description: '元宇宙平台收益' },
        { label: '就業機會', value: '200+', description: '相關產業就業' }
      ]
    },
    {
      category: '社會效益',
      icon: <Users className="h-6 w-6 text-blue-600" />,
      metrics: [
        { label: '運動傷害降低', value: '20%', description: '科技輔助預防' },
        { label: '青年參與提升', value: '30%+', description: '基層運動發展' },
        { label: '國際交流', value: '多國', description: '文化外交平台' }
      ]
    },
    {
      category: '環境效益',
      icon: <Heart className="h-6 w-6 text-red-600" />,
      metrics: [
        { label: '碳排放透明化', value: '100%', description: '即時監測公開' },
        { label: '綠色賽事認證', value: '國際級', description: 'ESG價值提升' },
        { label: '永續目標', value: '碳中和', description: '2030年達成' }
      ]
    }
  ];

  const keyInnovations = [
    {
      title: '元宇宙觀賽革命',
      description: '全球首創曲棍球元宇宙平台，突破地域限制',
      impact: '預計吸引全球50萬用戶',
      icon: <Zap className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'AI運動教練',
      description: '個人化運動表現分析與改善建議',
      impact: '提升選手競技水準20%',
      icon: <Target className="h-6 w-6 text-blue-600" />
    },
    {
      title: '碳足跡透明化',
      description: '即時追蹤公開賽事碳排放數據',
      impact: '成為綠色賽事標竿',
      icon: <Heart className="h-6 w-6 text-green-600" />
    },
    {
      title: '國際青年交流',
      description: '建立亞洲青年曲棍球交流平台',
      impact: '促進區域運動發展',
      icon: <Globe className="h-6 w-6 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            2026年賽事介紹專區
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            邁向常態化、年度化的國際賽事，打造南投成為亞洲曲棍球發展中心
          </p>
        </div>

        {/* Vision Statement */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                2026年願景目標
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
                將2026年賽事打造為常態化、年度化的國際品牌賽事，
                利用累積的數據與經驗，申請主辦更高級別的國際正式賽事，
                建立南投作為亞洲曲棍球重要據點的地位。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-blue-100">參賽隊伍</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50萬</div>
                  <div className="text-blue-100">元宇宙用戶</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">FIH</div>
                  <div className="text-blue-100">積分認證</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">碳足跡透明</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Phase Planning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">階段性規劃</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {phases.map((phase) => (
              <Card 
                key={phase.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPhase === phase.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setSelectedPhase(phase.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-${phase.color}-100`}>
                      {phase.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{phase.name}</CardTitle>
                  <CardDescription>{phase.period}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Tabs value={selectedPhase} onValueChange={setSelectedPhase}>
            <TabsContent value="short-term">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Rocket className="h-6 w-6 text-blue-600" />
                    <span>短期規劃：賽事籌備與舉辦</span>
                  </CardTitle>
                  <CardDescription>
                    2026年1月至8月，聚焦於快速導入關鍵科技、升級基礎設施並整合觀光資源
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {shortTermGoals.map((goal, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6">
                        <h4 className="font-semibold text-lg mb-2">{goal.quarter}</h4>
                        <h5 className="font-medium text-blue-600 mb-3">{goal.title}</h5>
                        <ul className="space-y-2">
                          {goal.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mid-term">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-6 w-6 text-green-600" />
                    <span>中期規劃：品牌鞏固與賽事升級</span>
                  </CardTitle>
                  <CardDescription>
                    2026年9月至2028年底，將邀請賽常態化、年度化，申請更高級別國際賽事
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {midTermObjectives.map((objective, index) => (
                      <div key={index} className="p-6 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge className="bg-green-500 text-white">{objective.year}</Badge>
                          <h4 className="font-semibold text-lg">{objective.title}</h4>
                        </div>
                        <p className="text-gray-600 mb-4">{objective.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {objective.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                              <span className="text-sm text-gray-700">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="long-term">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                    <span>長期目標：亞洲曲棍球發展中心</span>
                  </CardTitle>
                  <CardDescription>
                    2029年起，將南投打造成亞洲曲棍球訓練、競賽與人才交流樞紐
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {longTermVision.map((vision, index) => (
                      <div key={index} className="p-6 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3 mb-4">
                          {vision.icon}
                          <h4 className="font-semibold text-lg">{vision.title}</h4>
                        </div>
                        <p className="text-gray-600 mb-4">{vision.description}</p>
                        <ul className="space-y-2">
                          {vision.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Budget Allocation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">預算配置</h2>
          <Card>
            <CardHeader>
              <CardTitle>總預算：新台幣 5,000 萬元</CardTitle>
              <CardDescription>
                資金來源涵蓋政府補助、企業贊助與票務收入
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">預算分配</h4>
                  <div className="space-y-4">
                    {budgetAllocation.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.category}</span>
                          <span className="text-sm text-gray-600">
                            {item.percentage}% (NT$ {item.amount}萬)
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-3" />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">投資回報預估</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-green-800">3年回收目標</h5>
                      <p className="text-2xl font-bold text-green-600">NT$ 7,000萬</p>
                      <p className="text-sm text-green-600">票務30% + 贊助40% + 觀光30%</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-medium text-blue-800">長期數位資產</h5>
                      <p className="text-lg font-semibold text-blue-600">難以估量</p>
                      <p className="text-sm text-blue-600">城市品牌價值與數位經濟</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Innovations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">創新亮點</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyInnovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {innovation.icon}
                    <CardTitle className="text-xl">{innovation.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {innovation.description}
                  </CardDescription>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">預期影響：</span>
                    <p className="text-sm text-gray-600">{innovation.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">預期效益</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expectedOutcomes.map((outcome, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {outcome.icon}
                    <span>{outcome.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {outcome.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {metric.value}
                        </div>
                        <div className="font-medium text-gray-700 mb-1">
                          {metric.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">發展時程</h2>
          <Card>
            <CardContent className="p-8">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">2026年：賽事升級</h4>
                      <p className="text-gray-600">導入運動科技、建立元宇宙平台、擴大國際參與</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">2027-2028年：品牌建立</h4>
                      <p className="text-gray-600">常態化舉辦、青年交流營、申請亞洲級賽事主辦權</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">2029年起：區域中心</h4>
                      <p className="text-gray-600">成為亞洲曲棍球發展中心、探討職業聯賽可能性</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">共同見證南投曲棍球的未來</h2>
          <p className="text-xl mb-6 opacity-90">
            加入我們的願景，成為南投國際曲棍球發展的重要夥伴
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Users className="h-5 w-5 mr-2" />
              成為合作夥伴
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <Calendar className="h-5 w-5 mr-2" />
              關注2026賽事
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Event2026;

