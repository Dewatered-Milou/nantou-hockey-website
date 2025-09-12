from flask import Blueprint, request, jsonify
import os
import json
from datetime import datetime

chatbot_bp = Blueprint('chatbot', __name__)

# 模擬Gemini API回應（實際使用時需要真實的API key）
def get_gemini_response(message):
    """
    模擬Gemini API回應
    實際部署時需要替換為真實的Gemini API調用
    """
    
    # 這裡使用預設的回應邏輯，實際部署時會被替換為真實的Gemini API
    message_lower = message.lower()
    
    # 賽事資訊相關
    if any(keyword in message_lower for keyword in ['時間', '日期', '賽程', '什麼時候']):
        return {
            'response': '''📅 **2025南投國際男子曲棍球邀請賽時間安排**

🗓️ **賽事日期：** 2025年7月26日至31日（共6天）
⏰ **比賽時間：** 每日09:00-18:00
📍 **比賽地點：** 南投縣竹山高中曲棍球場

**詳細賽程：**
• 7/26 (六)：開幕典禮 + 首輪比賽
• 7/27 (日)：小組賽第二輪  
• 7/28 (一)：小組賽第三輪
• 7/29 (二)：準決賽
• 7/30 (三)：季軍賽 + 冠軍賽
• 7/31 (四)：閉幕典禮 + 頒獎

需要了解特定日期的詳細賽程嗎？''',
            'category': 'schedule'
        }
    
    elif any(keyword in message_lower for keyword in ['票', '購買', '價格', '多少錢']):
        return {
            'response': '''🎫 **購票資訊**

**票種與價格：**
• 一般票：NT$ 500（基本觀賽體驗）
• 精緻票：NT$ 1,200（含AR體驗、精緻餐盒）
• VIP票：NT$ 2,500（含元宇宙觀賽、選手見面會）
• 家庭套票：NT$ 1,800（4人套票，含親子活動）

**購票方式：**
• 線上購票：官網購票系統
• 電話購票：049-123-4567
• 現場購票：竹山高中售票處

**退票政策：**
• 賽事前7天：全額退票
• 3-7天前：收取10%手續費
• 3天內：恕不退票

需要我協助您購票嗎？''',
            'category': 'tickets'
        }
    
    elif any(keyword in message_lower for keyword in ['地點', '位置', '在哪', '怎麼去']):
        return {
            'response': '''📍 **比賽地點與交通資訊**

🏟️ **主場地：** 南投縣竹山高中曲棍球場
📮 **地址：** 南投縣竹山鎮（FIH國際認證場地）

🚗 **交通方式：**
• **自行開車：** 國道3號竹山交流道下，約10分鐘車程
• **大眾運輸：** 高鐵台中站轉乘接駁車（賽事期間提供）
• **免費停車：** 精緻票以上享免費停車服務

🎯 **場地特色：**
• 1000席觀眾座位
• LED大螢幕即時數據顯示
• AR文化體驗區
• 運動科技展示區

需要詳細的交通指引或停車資訊嗎？''',
            'category': 'venue'
        }
    
    elif any(keyword in message_lower for keyword in ['觀光', '旅遊', '套票', '住宿']):
        return {
            'response': '''🌟 **觀光套票推薦**

🏞️ **日月潭湖光山色觀賽之旅** (NT$ 3,999)
• 2天1夜 + 賽事門票
• 日月潭遊湖 + 纜車體驗
• AR邵族文化體驗
• 湖景飯店住宿

⛰️ **清境高山觀賽套票** (NT$ 4,599)  
• 3天2夜 + 賽事門票
• 清境農場 + 合歡山日出
• 高山民宿住宿
• 在地美食體驗

👑 **VIP頂級觀賽體驗** (NT$ 8,999)
• 3天2夜 + VIP座位
• 五星飯店住宿
• 米其林餐廳用餐
• 元宇宙觀賽體驗
• 選手見面會

想了解哪個套票的詳細內容？''',
            'category': 'tourism'
        }
    
    elif any(keyword in message_lower for keyword in ['科技', 'ai', '元宇宙', '數據']):
        return {
            'response': '''🚀 **運動科技亮點**

🤖 **AI智慧裁判系統**
• 多機位高速攝影
• 即時判罰輔助
• 鷹眼級回放技術

📊 **數據分析平台**
• GPS穿戴裝置監測
• 生物力學軌跡分析
• 即時數據視覺化

🌐 **元宇宙觀賽體驗**
• 360度虛擬觀賽
• 數位孿生技術
• 互動式數據查看

🎯 **AR文化體驗**
• 布農族圖騰動畫
• 日月潭傳說導覽
• 竹山竹藝工坊

想體驗哪項科技功能？''',
            'category': 'technology'
        }
    
    elif any(keyword in message_lower for keyword in ['報名', '參賽', '隊伍']):
        return {
            'response': '''🏆 **隊伍報名資訊**

📋 **報名資格：**
• 各國國家代表隊或頂級俱樂部
• 18人完整名單（16名球員+2名替補）
• FIH註冊證明
• 健康檢查報告

📅 **重要日期：**
• 報名截止：2025年6月30日
• 文件繳交：2025年7月15日
• 賽事開始：2025年7月26日

💰 **報名費用：** 免費

🎁 **參賽優勢：**
• AI運動教練報告
• 運動科技體驗
• FIH積分認證
• 國際交流機會

需要報名表單或更多資訊嗎？''',
            'category': 'registration'
        }
    
    else:
        return {
            'response': '''👋 **歡迎來到南投國際曲棍球邀請賽！**

我是您的AI客服助手，可以協助您了解：

🎫 **購票資訊** - 票價、購票方式、退票政策
📅 **賽程安排** - 比賽時間、場次安排
📍 **交通指引** - 比賽地點、交通方式
🌟 **觀光套票** - 住宿、景點、美食
🚀 **運動科技** - AI裁判、元宇宙觀賽
🏆 **隊伍報名** - 參賽資格、報名流程

請告訴我您想了解哪方面的資訊，或者直接提出您的問題！

如需人工客服，請撥打：**049-123-4567**''',
            'category': 'general'
        }

@chatbot_bp.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get('message', '').strip()
        
        if not message:
            return jsonify({'error': '訊息不能為空'}), 400
        
        # 這裡應該調用真實的Gemini API
        # 目前使用模擬回應
        response_data = get_gemini_response(message)
        
        return jsonify({
            'success': True,
            'response': response_data['response'],
            'category': response_data['category'],
            'timestamp': datetime.now().isoformat()
        }), 200
        
    except Exception as e:
        return jsonify({'error': f'處理訊息失敗: {str(e)}'}), 500

@chatbot_bp.route('/faq', methods=['GET'])
def get_faq():
    """獲取常見問題"""
    faq_data = [
        {
            'category': '賽事資訊',
            'questions': [
                {
                    'question': '比賽什麼時候舉行？',
                    'answer': '2025年7月26日至31日，為期6天的精彩賽事。'
                },
                {
                    'question': '比賽地點在哪裡？',
                    'answer': '南投縣竹山高中曲棍球場，地址：南投縣竹山鎮。'
                },
                {
                    'question': '有哪些國家參賽？',
                    'answer': '共有5個國家6支隊伍參賽，包括中華台北、日本、韓國、馬來西亞、新加坡、泰國等。'
                }
            ]
        },
        {
            'category': '購票資訊',
            'questions': [
                {
                    'question': '票價多少？',
                    'answer': '一般票NT$500、精緻票NT$1,200、VIP票NT$2,500、家庭套票NT$1,800。'
                },
                {
                    'question': '如何購票？',
                    'answer': '可透過官網購票系統線上購買，或電洽049-123-4567。'
                },
                {
                    'question': '可以退票嗎？',
                    'answer': '賽事前7天可全額退票，3-7天退票收取10%手續費，3天內恕不退票。'
                }
            ]
        },
        {
            'category': '觀光資訊',
            'questions': [
                {
                    'question': '有觀光套票嗎？',
                    'answer': '有的！我們提供日月潭湖光山色觀賽之旅、清境高山觀賽套票、VIP頂級觀賽體驗等多種選擇。'
                },
                {
                    'question': '套票包含什麼？',
                    'answer': '包含賽事門票、住宿、餐食、景點門票、AR文化體驗等，詳細內容請查看觀光合作頁面。'
                }
            ]
        }
    ]
    
    return jsonify({
        'success': True,
        'faq': faq_data
    }), 200

@chatbot_bp.route('/config', methods=['GET'])
def get_config():
    """獲取聊天機器人配置資訊"""
    return jsonify({
        'success': True,
        'config': {
            'name': 'AI客服助手',
            'description': '南投國際曲棍球邀請賽智慧客服',
            'version': '1.0.0',
            'provider': 'Gemini AI',
            'features': [
                '24小時服務',
                '多語言支援',
                '即時回應',
                '專業知識庫'
            ]
        }
    }), 200

