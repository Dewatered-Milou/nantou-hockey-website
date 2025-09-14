import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Globe, 
  Headphones, 
  Gamepad2, 
  Users, 
  Eye, 
  Zap, 
  Monitor, 
  Smartphone,
  Camera,
  BarChart3,
  MapPin,
  Star,
  Play
} from 'lucide-react';

const Metaverse = () => {
  const [selectedFeature, setSelectedFeature] = useState('virtual-viewing');

  const features = [
    {
      id: 'virtual-viewing',
      name: '虛擬觀賽',
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      description: '360度沉浸式觀賽體驗',
      color: 'blue'
    },
    {
      id: 'digital-twin',
      name: '數位孿生',
      icon: <Globe className="h-8 w-8 text-green-600" />,
      description: '高精度球場數位複製',
      color: 'green'
    },
    {
      id: 'interactive',
      name: '互動體驗',
      icon: <Gamepad2 className="h-8 w-8 text-purple-600" />,
      description: '即時互動與社交功能',
      color: 'purple'
    },
    {
      id: 'data-viz',
      name: '數據視覺化',
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      description: '3D數據呈現與分析',
      color: 'orange'
    }
  ];

  const viewingModes = [
    {
      name: '球場全景',
      description: '鳥瞰整個球場，掌握全局戰術',
      icon: <Eye className="h-6 w-6" />,
      features: ['360度全景視角', '戰術陣型分析', '球員移動軌跡']
    },
    {
      name: '跟隨視角',
      description: '跟隨特定球員，體驗第一人稱視角',
      icon: <Camera className="h-6 w-6" />,
      features: ['球員視角體驗', '技術動作特寫', '即時生理數據']
    },
    {
      name: 'VIP包廂',
      description: '虛擬VIP包廂，享受頂級觀賽體驗',
      icon: <Star className="h-6 w-6" />,
      features: ['專屬虛擬空間', '高級數據面板', '專家解說服務']
    },
    {
      name: '自由漫遊',
      description: '在虛擬球場中自由移動探索',
      icon: <MapPin className="h-6 w-6" />,
      features: ['自由視角切換', '場地細節探索', '歷史回放功能']
    }
  ];

  const interactiveFeatures = [
    {
      title: '即時聊天',
      description: '與全球觀眾即時交流討論',
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: '預測遊戲',
      description: '預測比賽結果，贏取虛擬獎品',
      icon: <Gamepad2 className="h-6 w-6 text-green-600" />
    },
    {
      title: '虛擬商店',
      description: '購買數位紀念品與NFT收藏',
      icon: <Zap className="h-6 w-6 text-purple-600" />
    },
    {
      title: '社群活動',
      description: '參與虛擬見面會與互動活動',
      icon: <Star className="h-6 w-6 text-orange-600" />
    }
  ];

  const techSpecs = [
    {
      category: '硬體需求',
      items: [
        'VR頭盔：Meta Quest 3、PICO 4或同等級',
        'PC配置：RTX 3060以上顯卡',
        '網路：50Mbps以上穩定連線',
        '手機：支援AR功能的智慧型手機'
      ]
    },
    {
      category: '支援平台',
      items: [
        'VR平台：Meta Quest Store、Steam VR',
        'PC平台：Windows 10/11、macOS',
        '行動平台：iOS 14+、Android 10+',
        'Web平台：Chrome、Safari、Edge'
      ]
    },
    {
      category: '技術特色',
      items: [
        '8K 360度全景串流',
        '低於20ms的超低延遲',
        '支援最多10,000人同時在線',
        'AI驅動的個人化推薦'
      ]
    }
  ];

  const nftCollections = [
    {
      name: '限量球員卡',
      description: '收集您喜愛球員的數位球員卡',
      rarity: '稀有',
      price: '0.1 ETH',
      available: 500
    },
    {
      name: '經典時刻',
      description: '重要比賽時刻的3D重現',
      rarity: '史詩',
      price: '0.5 ETH',
      available: 100
    },
    {
      name: '虛擬座位',
      description: '永久虛擬VIP座位所有權',
      rarity: '傳奇',
      price: '2.0 ETH',
      available: 50
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            賽事元宇宙平台
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            突破地域限制，在虛擬世界中體驗前所未有的沉浸式觀賽體驗
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    南投智慧曲棍球元宇宙
                  </h2>
                  <p className="text-xl mb-6 opacity-90">
                    全球首創的曲棍球元宇宙平台，結合數位孿生技術與虛擬實境，
                    讓您在融入南投地標的虛擬世界中享受國際級賽事。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                      <Play className="h-5 w-5 mr-2" />
                      立即體驗
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                      觀看介紹影片
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Headphones className="h-24 w-24 text-white opacity-50" />                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feature Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedFeature === feature.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setSelectedFeature(feature.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Details */}
        <section className="mb-16">
          <Tabs value={selectedFeature} onValueChange={setSelectedFeature}>
            <TabsList className="grid w-full grid-cols-4">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="text-xs sm:text-sm">
                  {feature.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="virtual-viewing" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Headphones className="h-6 w-6 text-blue-600" />
                    <span>虛擬觀賽體驗</span>
                  </CardTitle>
                  <CardDescription>
                    多種觀賽視角，打造個人化的沉浸式體驗
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {viewingModes.map((mode, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          {mode.icon}
                          <h4 className="font-semibold">{mode.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{mode.description}</p>
                        <div className="space-y-1">
                          {mode.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="digital-twin" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-green-600" />
                    <span>數位孿生技術</span>
                  </CardTitle>
                  <CardDescription>
                    高精度3D建模，完美重現竹山高中曲棍球場
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">技術特色</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">毫米級精度建模</span>
                            <p className="text-sm text-gray-600">使用激光掃描技術，精確重現每個細節</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">即時同步更新</span>
                            <p className="text-sm text-gray-600">虛擬場景與現實比賽即時同步</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">物理引擎模擬</span>
                            <p className="text-sm text-gray-600">真實的物理碰撞與球體運動</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">南投地標融入</span>
                            <p className="text-sm text-gray-600">日月潭、清境等地標元素融入場景</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">應用場景</h4>
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <h5 className="font-medium text-green-800">賽前預覽</h5>
                          <p className="text-sm text-green-600">提前探索球場環境與座位視角</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <h5 className="font-medium text-green-800">戰術分析</h5>
                          <p className="text-sm text-green-600">3D戰術板分析球隊陣型與策略</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <h5 className="font-medium text-green-800">歷史回放</h5>
                          <p className="text-sm text-green-600">重現經典比賽時刻與精彩進球</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <h5 className="font-medium text-green-800">訓練模擬</h5>
                          <p className="text-sm text-green-600">虛擬訓練環境與技術練習</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interactive" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gamepad2 className="h-6 w-6 text-purple-600" />
                    <span>互動社交功能</span>
                  </CardTitle>
                  <CardDescription>
                    與全球觀眾互動，享受社群觀賽樂趣
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {interactiveFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                        {feature.icon}
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-2">{feature.title}</h4>
                          <p className="text-sm text-purple-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">NFT數位收藏</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {nftCollections.map((nft, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium">{nft.name}</h5>
                            <Badge variant="outline" className="text-xs">
                              {nft.rarity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{nft.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-600">{nft.price}</span>
                            <span className="text-xs text-gray-500">剩餘 {nft.available}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data-viz" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                    <span>3D數據視覺化</span>
                  </CardTitle>
                  <CardDescription>
                    立體化數據呈現，深度理解比賽動態
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">即時數據面板</h4>
                      <div className="space-y-4">
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h5 className="font-medium text-orange-800">球員軌跡熱圖</h5>
                          <p className="text-sm text-orange-600">3D熱力圖顯示球員活動區域</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h5 className="font-medium text-orange-800">控球率分析</h5>
                          <p className="text-sm text-orange-600">即時控球統計與區域分佈</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h5 className="font-medium text-orange-800">速度向量圖</h5>
                          <p className="text-sm text-orange-600">球員移動速度與方向視覺化</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h5 className="font-medium text-orange-800">戰術陣型圖</h5>
                          <p className="text-sm text-orange-600">3D戰術分析與陣型變化</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">個人化數據</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="text-sm">跑動距離</span>
                          <span className="font-semibold">8.2 km</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="text-sm">最高速度</span>
                          <span className="font-semibold">32.5 km/h</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="text-sm">心率平均</span>
                          <span className="font-semibold">165 bpm</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="text-sm">觸球次數</span>
                          <span className="font-semibold">47 次</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="text-sm">傳球成功率</span>
                          <span className="font-semibold">89%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Technical Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">技術規格</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techSpecs.map((spec, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{spec.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Device Support */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">支援裝置</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Headphones className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">VR頭盔</h3>
                <p className="text-sm text-gray-600">沉浸式體驗</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">電腦</h3>
                <p className="text-sm text-gray-600">高畫質觀賞</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">手機</h3>
                <p className="text-sm text-gray-600">隨時隨地觀看</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Headphones className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">AR眼鏡</h3>
                <p className="text-sm text-gray-600">擴增實境體驗</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">開啟您的元宇宙觀賽之旅</h2>
          <p className="text-xl mb-6 opacity-90">
            立即下載APP，搶先體驗未來運動觀賞新模式
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Smartphone className="h-5 w-5 mr-2" />
              下載APP
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <Headphones className="h-5 w-5 mr-2" />
              VR體驗預約
            </Button>
          </div>
          <div className="mt-6 text-sm opacity-75">
            支援iOS、Android、Windows、macOS等多平台
          </div>
        </section>
      </div>
    </div>
  );
};

export default Metaverse;

