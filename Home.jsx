import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Trophy, Zap, Globe } from 'lucide-react';
import heroImage from '../assets/PO56TJ48CA6f.jpg';
import techImage from '../assets/cq6MSOjeIiBO.jpg';
import tourismImage from '../assets/VAEmYoeG8YzG.jpg';

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: '運動科技',
      description: 'AI智慧裁判、GPS穿戴裝置、生物力學分析',
      link: '/tech-database'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: '元宇宙觀賽',
      description: '虛擬實境觀賽體驗、數位孿生技術',
      link: '/metaverse'
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      title: '觀光整合',
      description: '賽事x旅遊套票、在地文化AR體驗',
      link: '/tourism'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: '國際交流',
      description: '五國六隊參賽、青年曲棍球交流營',
      link: '/event-info'
    }
  ];

  const highlights = [
    {
      number: '5',
      label: '參賽國家',
      description: '來自亞洲各國的頂尖隊伍'
    },
    {
      number: '6',
      label: '參賽隊伍',
      description: '國際級曲棍球競技水準'
    },
    {
      number: '7',
      label: '比賽天數',
      description: '精彩賽事連續呈現'
    },
    {
      number: '1000+',
      label: '觀眾席位',
      description: '國際標準觀賽環境'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            2025南投國際
            <br />
            男子曲棍球邀請賽
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            城市品牌 × 運動科技 × 國際交流
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link to="/tickets">立即購票</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black">
              <Link to="/event-info">了解更多</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              賽事亮點
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              結合運動科技、觀光資源與國際交流的創新賽事體驗
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <Link to={feature.link}>了解更多</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {highlight.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {highlight.label}
                </div>
                <div className="text-sm text-gray-600">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                運動科技創新應用
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                導入AI智慧裁判輔助系統、GPS穿戴裝置監測、生物力學軌跡分析等前沿科技，
                打造數據驅動的智慧賽場，提升競技專業度與觀賽體驗。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>即時生理數據監測與運動表現優化</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>智慧曲棍球棒與生物力學分析</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>AI智慧裁判輔助與鷹眼回放</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/tech-database">探索運動科技</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={techImage} 
                alt="運動科技" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={tourismImage} 
                alt="南投觀光" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                觀光整合體驗
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                結合南投獨特的觀光資源，推出「賽事×旅遊」主題套票，
                融合日月潭、清境農場等知名景點，打造完整的運動觀光體驗。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>賽事觀光套票與在地文化體驗</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>AR技術融入南投文化元素</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>智慧觀光APP一站式服務</span>
                </li>
              </ul>
              <Button asChild size="lg" variant="outline">
                <Link to="/tourism">查看觀光方案</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            準備好體驗未來的運動賽事了嗎？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            立即購票或報名參賽，成為這場運動科技革命的一部分
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/tickets">購買門票</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/registration">隊伍報名</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

