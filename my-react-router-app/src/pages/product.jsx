import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faChain, faBolt, faServer, faCog, faShieldAlt, faChartLine, faDatabase, faLightbulb, faLock, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// 导入产品图片
import cloudComputingImage from '../assets/images/cloud_computing.jpg';
import cloudChainImage from '../assets/images/cloud_chain.jpg';
import lightCoreImage from '../assets/images/light_core.jpg';

const Product = () => {
  return (
    <>
      {/* 页面标题区域 */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5" style={{background: '#f0f0f0'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', marginTop: '70px'}}>迷小业务</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              创新科技解决方案，引领行业变革
            </p>
          </div>
        </div>
      </section>

      {/* 产品概述 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">产品矩阵</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">三大核心业务</h2>
            <p className="text-gray-600 text-lg">
              迷小科技专注于云计算、区块链和新能源领域，通过创新技术为客户提供高效、安全、可持续的解决方案
            </p>
          </div>

          {/* 产品卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 云计算产品 */}
            <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
              <div className="relative h-60 overflow-hidden">
                <LazyLoadImage 
                  effect="blur" 
                  src={cloudComputingImage} 
                  alt="迷小云计算服务" 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">云计算</h3>
                    <p className="text-white/80">高性能、弹性扩展的云服务平台</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FontAwesomeIcon icon={faCloud} className="text-primary" size="lg" />
                  </div>
                  <h3 className="text-xl font-bold">云计算</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  提供稳定可靠的计算资源、存储空间和网络服务，支持业务快速上线和灵活扩展
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faServer} className="text-primary mr-2" size="sm" />
                    <span>高性能计算集群</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDatabase} className="text-primary mr-2" size="sm" />
                    <span>分布式存储系统</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-primary mr-2" size="sm" />
                    <span>企业级安全保障</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 云枢链算产品 */}
            <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
              <div className="relative h-60 overflow-hidden">
                <LazyLoadImage 
                  effect="blur" 
                  src={cloudChainImage} 
                  alt="迷小云枢链算服务" 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">云枢链算</h3>
                    <p className="text-white/80">分布式计算与区块链融合创新</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FontAwesomeIcon icon={faChain} className="text-primary" size="lg" />
                  </div>
                  <h3 className="text-xl font-bold">云枢链算</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  开创性地将区块链技术与分布式计算相结合，打造安全、透明、高效的计算资源共享平台
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faUsers} className="text-primary mr-2" size="sm" />
                    <span>去中心化算力网络</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faLock} className="text-primary mr-2" size="sm" />
                    <span>区块链安全认证</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faChartLine} className="text-primary mr-2" size="sm" />
                    <span>智能资源调度</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 光核储能产品 */}
            <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
              <div className="relative h-60 overflow-hidden">
                <LazyLoadImage 
                  effect="blur" 
                  src={lightCoreImage} 
                  alt="迷小光核储能系统" 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">光核储能</h3>
                    <p className="text-white/80">高效清洁能源存储解决方案</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FontAwesomeIcon icon={faBolt} className="text-primary" size="lg" />
                  </div>
                  <h3 className="text-xl font-bold">光核储能</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  融合光伏技术与先进储能系统，提供可持续、高效的清洁能源解决方案，助力实现碳中和目标
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faLightbulb} className="text-primary mr-2" size="sm" />
                    <span>高效能源转换</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCog} className="text-primary mr-2" size="sm" />
                    <span>智能能源管理</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faAward} className="text-primary mr-2" size="sm" />
                    <span>环保可持续发展</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">核心优势</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">技术领先，服务卓越</h2>
            <p className="text-gray-600 text-lg">
              迷小科技凭借强大的研发能力和丰富的行业经验，为客户提供高质量的产品和服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <FontAwesomeIcon icon={faCog} className="text-primary" size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">技术创新</h3>
              <p className="text-gray-600">
                拥有多项核心技术专利，持续投入研发，不断推出行业领先的创新产品和解决方案
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <FontAwesomeIcon icon={faShieldAlt} className="text-primary" size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">安全可靠</h3>
              <p className="text-gray-600">
                采用多重安全防护机制，确保数据和系统安全，为客户提供稳定可靠的服务保障
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <FontAwesomeIcon icon={faUsers} className="text-primary" size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">专业服务</h3>
              <p className="text-gray-600">
                拥有一支经验丰富的专业团队，提供7×24小时技术支持，确保客户业务顺畅运行
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">应用场景</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">广泛应用，创造价值</h2>
            <p className="text-gray-600 text-lg">
              迷小科技产品已成功应用于多个行业，为客户创造显著价值
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-8 hover-lift">
              <h3 className="text-xl font-bold mb-4">政企数字化转型</h3>
              <p className="text-gray-600 mb-6">
                提供完整的云计算和区块链解决方案，助力政府和企业实现数字化转型，提高运营效率
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">政务服务</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">企业管理</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">数据共享</span>
              </div>
            </div>

            <div className="bg-light rounded-xl p-8 hover-lift">
              <h3 className="text-xl font-bold mb-4">能源行业升级</h3>
              <p className="text-gray-600 mb-6">
                光核储能系统助力能源行业实现清洁化、智能化升级，降低能源消耗，减少碳排放
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">智能电网</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">新能源并网</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">节能减碳</span>
              </div>
            </div>

            <div className="bg-light rounded-xl p-8 hover-lift">
              <h3 className="text-xl font-bold mb-4">金融科技创新</h3>
              <p className="text-gray-600 mb-6">
                结合云计算和区块链技术，为金融行业提供安全、高效的创新解决方案，促进金融科技发展
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">支付结算</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">风控管理</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">供应链金融</span>
              </div>
            </div>

            <div className="bg-light rounded-xl p-8 hover-lift">
              <h3 className="text-xl font-bold mb-4">教育医疗信息化</h3>
              <p className="text-gray-600 mb-6">
                提供可靠的云计算服务，支持教育和医疗行业信息化建设，提升服务质量和效率
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">在线教育</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">远程医疗</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">健康管理</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Product;