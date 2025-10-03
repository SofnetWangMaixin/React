import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                  <a href="#" className="flex items-center space-x-2 mb-6">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                          <img src="http://47.121.199.238/sofnet/logo/favicon.ico" alt="Sofnet" />
                      </div>
                      <span className="text-xl font-bold"></span>
                  </a>
                  <p className="text-gray-400 mb-6">
                      {/* <!-- 计算改变世界 --> */}
                  </p>
              </div>
              
              <div>
                  <h4 className="text-lg font-bold mb-6">产品与服务</h4>
                  <ul className="space-y-3">
                      <li><a href="javascript:;" className="text-gray-400 hover:text-white transition-colors">云枢链算</a></li>
                      <li><a href="javascript:;" className="text-gray-400 hover:text-white transition-colors">开发者平台</a></li>
                      <li><a href="javascript:;" className="text-gray-400 hover:text-white transition-colors">迷小校园</a></li>
                      <li><a href="javascript:;" className="text-gray-400 hover:text-white transition-colors">Sun-Core EG</a></li>
                      <li><a href="javascript:;" className="text-gray-400 hover:text-white transition-colors">迷小抗震救灾队伍</a></li>
                  </ul>
              </div>
              
              <div>
                  <h4 className="text-lg font-bold mb-6">关于我们</h4>
                  <ul className="space-y-3">
                      <li><NavLink 
                            to="/about" 
                            className="text-gray-400 hover:text-white transition-colors"
                            >
                            关于我们
                        </NavLink></li>
                      <li><NavLink 
                            to="/values" 
                            className="text-gray-400 hover:text-white transition-colors"
                            >
                            核心价值观
                        </NavLink></li>
                      <li><NavLink 
                            to="/joinus" 
                            className="text-gray-400 hover:text-white transition-colors"
                            >
                            加入我们
                        </NavLink></li>
                  </ul>
              </div>
              
              <div>
                  <h4 className="text-lg font-bold mb-6">客户支持</h4>
                  <ul className="space-y-3">
                      <li>
                        <NavLink 
                            to="/contact" 
                            className="text-gray-400 hover:text-white transition-colors"
                            >
                            联系我们
                        </NavLink>
                      </li>
                      <li><NavLink 
                            to="/privacypolicy" 
                            className="text-gray-400 hover:text-white transition-colors"
                            >
                            隐私政策
                        </NavLink></li>
                      <li><NavLink 
                            to="/useragreement" 
                            className="text-gray-400 hover:text-white transition-colors"
                            >
                            用户协议
                        </NavLink></li>
                  </ul>
              </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-500 text-sm mb-4 md:mb-0">
                      &copy; 2025 新乡市迷小网络科技有限公司 版权所有 | 豫
                  </p>
                  <div className="flex space-x-6">
                        <NavLink 
                            to="/privacypolicy" 
                            className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                            隐私政策
                        </NavLink>
                        <NavLink 
                            to="/useragreement" 
                            className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                            用户协议
                        </NavLink>
                        <NavLink 
                            to="/legalnotice" 
                            className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                            法律声明
                        </NavLink>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  );
};

export default Footer;
