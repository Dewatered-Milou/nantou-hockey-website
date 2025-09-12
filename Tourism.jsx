import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, Camera, Mountain, Waves, TreePine, Smartphone } from 'lucide-react';
import tourismImage from '../assets/HCSh8EQg3Uom.jpg';

const Tourism = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const tourismPackages = [
    {
      id: 1,
      title: '日月潭湖光山色觀賽之旅',
      price: 'NT$ 3,999',
      duration: '2天1夜',
      rating: 4.8,
      image: tourismImage,
      highlights: ['賽事門票', '日月潭遊湖', '文武廟參拜', '纜車體驗'],
      description: '結合賽事觀賞與日月潭經典景點，體驗南投最美湖光山色',
      includes: [
        '曲棍球賽事門票 (2場比賽)',
        '日月潭遊湖船票',
        '日月潭纜車來回票',
        '文武廟導覽',
        '湖景飯店住宿1晚',
        '在地特色餐食',
        'AR文化體驗'
      ]
    },
    {
      id: 2,
      title: '清境高山觀賽套票',
      price: 'NT$ 4,599',
      duration: '3天2夜',
      rating: 4.9,
      image: tourismImage,
      highlights: ['賽事門票', '清境農場', '合歡山日出', '高山民宿'],
      description: '高山避暑勝地結合國際賽事，享受清新空氣與精彩比賽',
      includes: [
        '曲棍球賽事門票 (3場比賽)',
        '清境農場門票',
        '合歡山日出行程',
        '青青草原體驗',
        '高山民宿住宿2晚',
        '原住民風味餐',
        '運動科技體驗館參觀'
      ]
    },
    {
      id: 3,
      title: 'VIP頂級觀賽體驗',
      price: 'NT$ 8,999',
      duration: '3天2夜',
      rating: 5.0,
      image: tourismImage,
      highlights: ['VIP座位', '專屬導覽', '元宇宙體驗', '五星住宿'],
      description: '頂級VIP觀賽體驗，專屬服務與最新科技完美結合',
      includes: [
        'VIP觀賽座位 (全程賽事)',
        '即時數據專屬畫面',
        '元宇宙觀賽體驗',
        '專屬文化導覽',
        '五星級飯店住宿2晚',
        '米其林推薦餐廳',
        '選手見面會',
        '限定紀念品'
      ]
    }
  ];

  const attractions = [
    {
      icon: <Waves className="h-8 w-8 text-blue-600" />,
      name: '日月潭',
      description: '台灣最美麗的高山湖泊，搭配AR文化體驗',
      features: ['遊湖船票', 'AR邵族文化', '纜車體驗']
    },
    {
      icon: <Mountain className="h-8 w-8 text-green-600" />,
      name: '清境農場',
      description: '高山牧場風光，青青草原與綿羊互動',
      features: ['青青草原', '綿羊秀', '高山景觀']
    },
    {
      icon: <TreePine className="h-8 w-8 text-purple-600" />,
      name: '溪頭森林',
      description: '森林浴與芬多精，天然氧吧體驗',
      features: ['森林步道', '竹廬茶席', '生態導覽']
    },
    {
      icon: <Camera className="h-8 w-8 text-orange-600" />,
      name: '九族文化村',
      description: '原住民文化與刺激遊樂設施',
      features: ['文化表演', '遊樂設施', '櫻花季']
    }
  ];

  const arExperiences = [
    {
      title: '布農族圖騰AR體驗',
      description: '透過手機APP，在賽場周圍觀看布農族傳統圖騰動畫'
    },
    {
      title: '日月潭傳說AR導覽',
      description: '聆聽邵族祖先的神話故事，體驗虛實結合的文化之旅'
    },
    {
      title: '竹山竹藝AR工坊',
      description: '學習傳統竹編技藝，透過AR技術體驗竹藝製作過程'
    },
    {
      title: '南投茶文化AR品茗',
      description: '在茶園中透過AR了解製茶過程，品嚐高山烏龍茶'
    }
  ];

  const partners = [
    '南投縣觀光協會',
    '日月潭國家風景區管理處',
    '清境觀光協會',
    '九族文化村',
    '雲品溫泉酒店',
    '涵碧樓酒店',
    '老英格蘭莊園',
    '中青旅行社'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            觀光合作方案
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            賽事×旅遊完美結合，體驗南投獨特魅力與國際級曲棍球賽事
          </p>
        </div>

        {/* Tourism Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">主題套票方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourismPackages.map((pkg) => (
              <Card key={pkg.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      {pkg.rating}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {pkg.duration}
                      </div>
                    </div>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">套票亮點：</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">包含項目：</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.includes.slice(0, 4).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                      {pkg.includes.length > 4 && (
                        <li className="text-blue-600 cursor-pointer" onClick={() => setSelectedPackage(pkg)}>
                          查看更多...
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button className="w-full" onClick={() => setSelectedPackage(pkg)}>
                    立即預訂
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">南投熱門景點</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {attraction.icon}
                  </div>
                  <CardTitle className="text-xl">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {attraction.description}
                  </CardDescription>
                  <div className="space-y-1">
                    {attraction.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AR Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AR文化體驗</h2>
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Smartphone className="h-12 w-12 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">智慧觀光APP</CardTitle>
              <CardDescription className="text-lg">
                透過AR技術，將南投在地文化融入觀賽體驗
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {arExperiences.map((experience, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{experience.title}</h4>
                      <p className="text-gray-600 text-sm">{experience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">合作夥伴</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {partners.map((partner, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">{partner}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Booking Info */}
        <section className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">立即預訂您的南投觀賽之旅</h2>
          <p className="text-xl mb-6 opacity-90">
            早鳥優惠進行中，現在預訂享受9折優惠
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              線上預訂
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              電話諮詢：049-123-4567
            </Button>
          </div>
        </section>

        {/* Package Detail Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{selectedPackage.title}</h3>
                  <Button variant="ghost" onClick={() => setSelectedPackage(null)}>
                    ✕
                  </Button>
                </div>
                
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-blue-600">{selectedPackage.price}</span>
                    <span className="text-gray-600">{selectedPackage.duration}</span>
                  </div>
                  <p className="text-gray-700">{selectedPackage.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">完整包含項目：</h4>
                  <ul className="space-y-2">
                    {selectedPackage.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1" size="lg">
                    立即預訂
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => setSelectedPackage(null)}>
                    稍後決定
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tourism;

