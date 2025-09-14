import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Ticket, Users, Star, Gift, Calendar, MapPin, Clock, CreditCard } from 'lucide-react';

const Tickets = () => {
  const [selectedTickets, setSelectedTickets] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [successInfo, setSuccessInfo] = useState(null); 
  const ticketTypes = [
    {
      id: 'general',
      name: '一般票',
      price: 500,
      originalPrice: null,
      description: '基本觀賽體驗，包含所有比賽場次',
      features: [
        '所有比賽場次入場',
        '一般觀眾席座位',
        '賽事手冊',
        '免費WiFi',
        '基本餐飲服務'
      ],
      icon: <Ticket className="h-8 w-8 text-blue-600" />,
      color: 'blue',
      available: 800,
      popular: false
    },
    {
      id: 'premium',
      name: '精緻票',
      price: 1200,
      originalPrice: 1500,
      description: '升級觀賽體驗，享受更好的座位與服務',
      features: [
        '所有比賽場次入場',
        '精緻觀眾席座位',
        '賽事紀念品',
        '免費停車',
        '精緻餐盒',
        '即時數據看板',
        'AR體驗APP'
      ],
      icon: <Star className="h-8 w-8 text-green-600" />,
      color: 'green',
      available: 200,
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP票',
      price: 2500,
      originalPrice: null,
      description: '頂級VIP體驗，專屬服務與最佳觀賽位置',
      features: [
        '所有比賽場次VIP座位',
        '專屬VIP休息室',
        '即時數據專屬畫面',
        '元宇宙觀賽體驗',
        '選手見面會',
        '限定紀念品',
        '專屬停車位',
        '五星級餐飲服務'
      ],
      icon: <Gift className="h-8 w-8 text-purple-600" />,
      color: 'purple',
      available: 50,
      popular: false
    },
    {
      id: 'family',
      name: '家庭套票',
      price: 1800,
      originalPrice: 2000,
      description: '適合全家觀賽的優惠套票（4人）',
      features: [
        '4張一般票',
        '家庭觀賽區座位',
        '兒童活動區',
        '家庭餐盒',
        '紀念品4份',
        '免費停車',
        '親子互動體驗'
      ],
      icon: <Users className="h-8 w-8 text-orange-600" />,
      color: 'orange',
      available: 100,
      popular: false
    }
  ];

  const schedule = [
    { date: '7/26', day: '六', matches: ['開幕典禮', '中華台北A vs 日本', '韓國 vs 馬來西亞'] },
    { date: '7/27', day: '日', matches: ['中華台北B vs 新加坡', '泰國 vs 中華台北A', '日本 vs 韓國'] },
    { date: '7/28', day: '一', matches: ['馬來西亞 vs 中華台北B', '新加坡 vs 泰國', '中華台北A vs 韓國'] },
    { date: '7/29', day: '二', matches: ['日本 vs 馬來西亞', '準決賽1', '準決賽2'] },
    { date: '7/30', day: '三', matches: ['季軍賽', '冠軍賽'] },
    { date: '7/31', day: '四', matches: ['閉幕典禮', '頒獎典禮'] }
  ];

  const handleTicketChange = (ticketId, quantity) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketId]: Math.max(0, quantity)
    }));
  };

  const getTotalPrice = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = ticketTypes.find(t => t.id === ticketId);
      return total + (ticket ? ticket.price * quantity : 0);
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((total, quantity) => total + quantity, 0);
  };

  const handleCheckout = () => {
    if (getTotalTickets() > 0) {
      setShowCheckout(true);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault(); // 1. 防止表單的預設提交行為 (重新整理頁面)
    setIsLoading(true);   // 2. 開始載入狀態
    setSubmitError(null);
    setSuccessInfo(null);

    // 3. 從表單元素中直接獲取使用者填寫的資料
    const formData = {
      firstName: e.target.elements.firstName.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      idNumber: e.target.elements.idNumber.value,
      paymentMethod: e.target.elements.paymentMethod.value, // 假設 Select 元件有 name="paymentMethod"
    };

    // 4. 準備要發送到後端的票券資料，過濾掉數量為 0 的票
    const ticketsToPurchase = Object.entries(selectedTickets)
      .filter(([_, quantity]) => quantity > 0)
      .reduce((acc, [id, quantity]) => {
        acc[id] = quantity;
        return acc;
      }, {});

    // 5. 組合最終要發送的 JSON 資料
    const purchaseData = {
      ...formData,
      tickets: ticketsToPurchase,
    };

    // 6. 讀取後端 URL
    const backendUrl = import.meta.env.VITE_API_BASE_URL;

    // 7. 使用 try...catch 結構發送請求並處理回應
    try {
      const response = await fetch(`${backendUrl}/api/tickets/purchase`, { // 確認 API 路徑
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchaseData),
      });

      const result = await response.json();

      if (!response.ok) {
        // 如果後端回應錯誤
        throw new Error(result.error || '購票失敗，請稍後再試。');
      }

      // 8. 處理成功的回應
      console.log('購票成功:', result);
      setSuccessInfo({
          message: result.message,
          orderId: result.orderId,
          totalAmount: result.totalAmount,
      });
      // 清空購物車並關閉彈出視窗 (但延遲一下讓使用者看到成功訊息)
      setTimeout(() => {
          setShowCheckout(false);
          setSelectedTickets({});
          setSuccessInfo(null); // 清除成功訊息，以便下次購買
      }, 5000); // 5秒後自動關閉

    } catch (error) {
      // 9. 處理網路或邏輯錯誤
      console.error('購票時發生錯誤:', error);
      setSubmitError(error.message);
    } finally {
      // 10. 無論成功或失敗，都結束載入狀態
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            購票系統
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            立即購票觀賞2025南投國際男子曲棍球邀請賽，體驗運動科技與國際競技的精彩結合
          </p>
        </div>

        {/* Event Info */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="h-8 w-8" />
                  <div>
                    <h3 className="text-lg font-semibold">賽事日期</h3>
                    <p className="text-blue-100">2025年7月26日-31日</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-8 w-8" />
                  <div>
                    <h3 className="text-lg font-semibold">比賽地點</h3>
                    <p className="text-blue-100">南投縣竹山高中</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-8 w-8" />
                  <div>
                    <h3 className="text-lg font-semibold">比賽時間</h3>
                    <p className="text-blue-100">每日09:00-18:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ticket Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">票種選擇</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketTypes.map((ticket) => (
              <Card key={ticket.id} className={`relative hover:shadow-xl transition-shadow duration-300 ${ticket.popular ? 'ring-2 ring-green-500' : ''}`}>
                {ticket.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">最受歡迎</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {ticket.icon}
                  </div>
                  <CardTitle className="text-xl">{ticket.name}</CardTitle>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-gray-900">NT$ {ticket.price.toLocaleString()}</span>
                      {ticket.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">NT$ {ticket.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    {ticket.originalPrice && (
                      <Badge variant="destructive" className="mt-2">
                        省 NT$ {(ticket.originalPrice - ticket.price).toLocaleString()}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="mt-2">{ticket.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">包含內容：</h4>
                    <ul className="space-y-2 text-sm">
                      {ticket.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`w-1.5 h-1.5 bg-${ticket.color}-600 rounded-full mt-2 mr-2 flex-shrink-0`}></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">剩餘票數</span>
                      <span className={`text-sm font-semibold ${ticket.available < 50 ? 'text-red-600' : 'text-green-600'}`}>
                        {ticket.available} 張
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${ticket.color}-600 h-2 rounded-full`}
                        style={{ width: `${Math.min(100, (ticket.available / 1000) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTicketChange(ticket.id, (selectedTickets[ticket.id] || 0) - 1)}
                      disabled={!selectedTickets[ticket.id] || selectedTickets[ticket.id] === 0}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      min="0"
                      max="10"
                      value={selectedTickets[ticket.id] || 0}
                      onChange={(e) => handleTicketChange(ticket.id, parseInt(e.target.value) || 0)}
                      className="text-center w-16"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTicketChange(ticket.id, (selectedTickets[ticket.id] || 0) + 1)}
                      disabled={selectedTickets[ticket.id] >= 10}
                    >
                      +
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">賽程表</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((day, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{day.date} ({day.day})</CardTitle>
                    <Badge variant="outline">{day.matches.length} 場次</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {day.matches.map((match, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {match}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cart Summary */}
        {getTotalTickets() > 0 && (
          <section className="mb-12">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">購票摘要</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(selectedTickets).map(([ticketId, quantity]) => {
                    if (quantity === 0) return null;
                    const ticket = ticketTypes.find(t => t.id === ticketId);
                    return (
                      <div key={ticketId} className="flex justify-between items-center">
                        <span>{ticket.name} × {quantity}</span>
                        <span className="font-semibold">NT$ {(ticket.price * quantity).toLocaleString()}</span>
                      </div>
                    );
                  })}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>總計</span>
                      <span className="text-blue-600">NT$ {getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg" onClick={handleCheckout}>
                    <CreditCard className="h-5 w-5 mr-2" />
                    立即購票
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* 判斷是否顯示成功畫面 */}
              {successInfo ? (
                <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-green-600 mb-4">🎉 購票成功！</h3>
                    <p className="text-gray-700 mb-2">{successInfo.message}</p>
                    <p className="text-gray-700">您的訂單編號是：<strong className="text-blue-600">{successInfo.orderId}</strong></p>
                    <p className="text-gray-700">總金額為：<strong className="text-blue-600">NT$ {successInfo.totalAmount.toLocaleString()}</strong></p>
                    <p className="text-gray-500 mt-4">我們已將詳細資訊寄至您的電子郵件。此視窗將在幾秒後自動關閉。</p>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">結帳資訊</h3>
                    <Button variant="ghost" onClick={() => setShowCheckout(false)}>
                      ✕
                    </Button>
                  </div>

                  <form onSubmit={handlePurchase} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">姓名 *</Label>
                        <Input id="firstName" placeholder="請輸入姓名" required />
                      </div>
                      <div>
                        <Label htmlFor="email">電子郵件 *</Label>
                        <Input id="email" type="email" placeholder="example@email.com" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">聯絡電話 *</Label>
                        <Input id="phone" placeholder="0912-345-678" required />
                      </div>
                      <div>
                        <Label htmlFor="idNumber">身分證字號 *</Label>
                        <Input id="idNumber" placeholder="A123456789" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="paymentMethod">付款方式 *</Label>
                      <Select required name="paymentMethod">
                        <SelectTrigger>
                          <SelectValue placeholder="選擇付款方式" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="credit">信用卡</SelectItem>
                          <SelectItem value="atm">ATM轉帳</SelectItem>
                          <SelectItem value="convenience">超商付款</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">訂單摘要</h4>
                      {Object.entries(selectedTickets).map(([ticketId, quantity]) => {
                        if (quantity === 0) return null;
                        const ticket = ticketTypes.find(t => t.id === ticketId);
                        return (
                          <div key={ticketId} className="flex justify-between items-center mb-2">
                            <span>{ticket.name} × {quantity}</span>
                            <span>NT$ {(ticket.price * quantity).toLocaleString()}</span>
                          </div>
                        );
                      })}
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span>總金額</span>
                          <span className="text-blue-600">NT$ {getTotalPrice().toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* 顯示錯誤訊息 */}
                    {submitError && (
                      <div className="text-red-600 text-center bg-red-50 p-3 rounded-lg">
                        {submitError}
                      </div>
                    )}

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1" size="lg" disabled={isLoading}>
                        {isLoading ? '處理中...' : '確認購買'}
                      </Button>
                      <Button type="button" variant="outline" size="lg" onClick={() => setShowCheckout(false)} disabled={isLoading}>
                        取消
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Purchase Info */}
        <section className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">購票須知</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">退票政策</h3>
              <p className="text-blue-100 text-sm">
                賽事前7天可全額退票，3-7天退票收取10%手續費，3天內恕不退票
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">入場須知</h3>
              <p className="text-blue-100 text-sm">
                請攜帶身分證件與電子票券，配合體溫檢測與安全檢查
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">客服聯絡</h3>
              <p className="text-blue-100 text-sm">
                購票問題請洽：049-123-4567 或 tickets@nantou-hockey.tw
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tickets;

