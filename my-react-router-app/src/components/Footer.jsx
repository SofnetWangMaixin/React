const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer class="bg-dark text-white pt-16 pb-8">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                  <a href="#" class="flex items-center space-x-2 mb-6">
                      <div class="w-10 h-10 rounded-lg flex items-center justify-center">
                          <img src="http://47.121.199.238/sofnet/logo/favicon.ico" alt="Sofnet" />
                      </div>
                      <span class="text-xl font-bold"></span>
                  </a>
                  <p class="text-gray-400 mb-6">
                      {/* <!-- 计算改变世界 --> */}
                  </p>
              </div>
              
              <div>
                  <h4 class="text-lg font-bold mb-6">产品与服务</h4>
                  <ul class="space-y-3">
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors">云枢链算</a></li>
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors">开发者平台</a></li>
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors">迷小校园</a></li>
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors">Sun-Core EG</a></li>
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors">迷小抗震救灾队伍</a></li>
                  </ul>
              </div>
              
              <div>
                  <h4 class="text-lg font-bold mb-6">关于我们</h4>
                  <ul class="space-y-3">
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors" onclick="location.href='src/page/about';">关于迷小</a></li>
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors">核心价值观</a></li>
                      <li><a href="javascript:;" class="text-gray-400 hover:text-white transition-colors">加入我们</a></li>
                  </ul>
              </div>
              
              <div>
                  <h4 class="text-lg font-bold mb-6">客户支持</h4>
                  <ul class="space-y-3">
                      <li><a href="#" class="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
                      <li><a href="#" class="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
                      <li><a href="#" class="text-gray-400 hover:text-white transition-colors">售后服务</a></li>
                      <li><a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
                      <li><a href="#" class="text-gray-400 hover:text-white transition-colors">用户协议</a></li>
                  </ul>
              </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8">
              <div class="flex flex-col md:flex-row justify-between items-center">
                  <p class="text-gray-500 text-sm mb-4 md:mb-0">
                      &copy; 2025 新乡市迷小网络科技有限公司 版权所有 | 豫
                  </p>
                  <div class="flex space-x-6">
                      <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">隐私政策</a>
                      <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">用户协议</a>
                      <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors"  onclick="location.href='src/page/legalNotice';">法律声明</a>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  );
};

export default Footer;
