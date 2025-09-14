import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, Calendar, Award, Zap, Heart, Brain } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    country: '',
    contactPerson: '',
    email: '',
    phone: '',
    teamType: '',
    playersCount: '',
    coachName: '',
    experience: '',
    specialRequirements: '',
    agreeTerms: false,
    agreeDataCollection: false,
    agreeHealthCheck: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡會連接到後端API
    console.log('Form submitted:', formData);
    alert('報名表單已提交！我們將在3個工作天內與您聯繫。');
  };

  const requirements = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: '隊伍資格',
      items: [
        '各國國家代表隊或頂級俱樂部隊伍',
        '隊伍須有完整的18人名單（16名球員+2名替補）',
        '所有選手年齡須滿18歲',
        '提供有效的國際曲棍球總會(FIH)註冊證明'
      ]
    },
    {
      icon: <FileText className="h-6 w-6 text-green-600" />,
      title: '文件要求',
      items: [
        '隊伍註冊證明文件',
        '選手護照影本',
        '教練資格證書',
        '團體保險證明',
        '反禁藥承諾書'
      ]
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: '健康檢查',
      items: [
        '所有選手健康檢查報告',
        '心電圖檢查報告',
        '運動傷害史聲明',
        '疫苗接種證明',
        '緊急聯絡人資料'
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: '科技配合',
      items: [
        '同意配戴GPS監測設備',
        '參與生物力學數據收集',
        '配合AI影像分析',
        '接受賽後運動表現報告',
        '參與運動科技體驗'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'AI運動教練報告',
      description: '賽後提供個人化運動表現分析，包含技術動作建議與潛在傷害風險評估'
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: '運動科技體驗',
      description: '體驗最新的運動科技設備，包括智慧曲棍球棒與生物力學分析系統'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: 'FIH積分認證',
      description: '賽事結果將計入FIH國際積分系統，提升隊伍國際排名'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: '國際交流機會',
      description: '參與青年曲棍球國際交流營，與各國選手進行技術與文化交流'
    }
  ];

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">基本資料</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="teamName">隊伍名稱 *</Label>
                <Input
                  id="teamName"
                  value={formData.teamName}
                  onChange={(e) => handleInputChange('teamName', e.target.value)}
                  placeholder="請輸入隊伍名稱"
                  required
                />
              </div>
              <div>
                <Label htmlFor="country">國家/地區 *</Label>
                <Select onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇國家/地區" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="taiwan">中華台北</SelectItem>
                    <SelectItem value="japan">日本</SelectItem>
                    <SelectItem value="korea">韓國</SelectItem>
                    <SelectItem value="malaysia">馬來西亞</SelectItem>
                    <SelectItem value="singapore">新加坡</SelectItem>
                    <SelectItem value="thailand">泰國</SelectItem>
                    <SelectItem value="other">其他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="teamType">隊伍類型 *</Label>
                <Select onValueChange={(value) => handleInputChange('teamType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇隊伍類型" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national">國家代表隊</SelectItem>
                    <SelectItem value="club">俱樂部隊伍</SelectItem>
                    <SelectItem value="university">大學隊伍</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="playersCount">選手人數 *</Label>
                <Input
                  id="playersCount"
                  type="number"
                  value={formData.playersCount}
                  onChange={(e) => handleInputChange('playersCount', e.target.value)}
                  placeholder="18"
                  min="16"
                  max="20"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">聯絡資訊</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contactPerson">聯絡人姓名 *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="請輸入聯絡人姓名"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">電子郵件 *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">聯絡電話 *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+886-912-345-678"
                  required
                />
              </div>
              <div>
                <Label htmlFor="coachName">總教練姓名 *</Label>
                <Input
                  id="coachName"
                  value={formData.coachName}
                  onChange={(e) => handleInputChange('coachName', e.target.value)}
                  placeholder="請輸入總教練姓名"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">隊伍經驗與需求</h3>
            <div>
              <Label htmlFor="experience">隊伍經驗與成績</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                placeholder="請簡述隊伍的比賽經驗、重要成績或特色..."
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="specialRequirements">特殊需求</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="如有特殊飲食需求、住宿要求或其他需要協助的事項，請在此說明..."
                rows={3}
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">同意條款</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                />
                <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                  我同意遵守賽事規則與條款，包括FIH國際曲棍球規則、反禁藥規定，
                  並承諾提供真實完整的報名資料。
                </Label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeDataCollection"
                  checked={formData.agreeDataCollection}
                  onCheckedChange={(checked) => handleInputChange('agreeDataCollection', checked)}
                />
                <Label htmlFor="agreeDataCollection" className="text-sm leading-relaxed">
                  我同意參與運動科技數據收集，包括GPS監測、生物力學分析、
                  AI影像分析等，並同意接受賽後運動表現報告。
                </Label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeHealthCheck"
                  checked={formData.agreeHealthCheck}
                  onCheckedChange={(checked) => handleInputChange('agreeHealthCheck', checked)}
                />
                <Label htmlFor="agreeHealthCheck" className="text-sm leading-relaxed">
                  我確認所有選手已完成健康檢查，身體狀況適合參與高強度運動競賽，
                  並已購買適當的運動保險。
                </Label>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            參賽隊伍報名系統
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            歡迎報名參加2025南投國際男子曲棍球邀請賽，體驗運動科技與國際交流的完美結合
          </p>
        </div>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">報名資格與要求</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    {req.icon}
                  </div>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
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

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">參賽優勢與服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {benefit.icon}
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">隊伍報名表單</CardTitle>
              <CardDescription>
                請填寫完整資料，我們將在收到報名後3個工作天內與您聯繫
              </CardDescription>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">步驟 {currentStep} / {totalSteps}</span>
                  <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    上一步
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                    >
                      下一步
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!formData.agreeTerms || !formData.agreeDataCollection || !formData.agreeHealthCheck}
                    >
                      提交報名
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Important Dates */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">重要日期</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex justify-center mb-4">
                    <Calendar className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">報名截止</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">2025年6月30日</p>
                  <p className="text-gray-600">逾期恕不受理</p>
                </div>
                <div>
                  <div className="flex justify-center mb-4">
                    <FileText className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">文件繳交</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">2025年7月15日</p>
                  <p className="text-gray-600">所有文件須完整提交</p>
                </div>
                <div>
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">賽事開始</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">2025年7月26日</p>
                  <p className="text-gray-600">開幕典禮與首場比賽</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Info */}
        <section className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">需要協助？</h2>
          <p className="text-xl mb-6 opacity-90">
            如有任何報名相關問題，歡迎聯繫我們的專業團隊
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              電話：049-123-4567
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              Email：registration@nantou-hockey.tw
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;

