import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 賽事資訊 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">賽事資訊</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/event-info" className="text-gray-300 hover:text-white transition-colors">
                  賽事簡介
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-white transition-colors">
                  隊伍報名
                </Link>
              </li>
              <li>
                <Link to="/tickets" className="text-gray-300 hover:text-white transition-colors">
                  購票系統
                </Link>
              </li>
              <li>
                <Link to="/event-2026" className="text-gray-300 hover:text-white transition-colors">
                  2026賽事
                </Link>
              </li>
            </ul>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服務項目</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tourism" className="text-gray-300 hover:text-white transition-colors">
                  觀光合作
                </Link>
              </li>
              <li>
                <Link to="/tech-database" className="text-gray-300 hover:text-white transition-colors">
                  運動科技
                </Link>
              </li>
              <li>
                <Link to="/metaverse" className="text-gray-300 hover:text-white transition-colors">
                  元宇宙平台
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-gray-300 hover:text-white transition-colors">
                  AI客服
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡我們</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">南投縣竹山鎮</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">049-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">info@nantou-hockey.tw</span>
              </div>
            </div>
          </div>

          {/* 社群媒體 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">追蹤我們</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                關注我們的社群媒體，獲取最新賽事資訊
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 南投國際男子曲棍球邀請賽. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                隱私權政策
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                使用條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

