import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShieldAlt, faClock, faCog, faGlobe, faDatabase, faCloud, faHandshake, faAward, faHeadset, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// 导入服务相关图片
import serviceImage1 from '../assets/images/technology.jpg';
import serviceImage2 from '../assets/images/deploy.jpg';
import serviceImage3 from '../assets/images/operations_support.jpg';
import supportImage from '../assets/images/support.jpg';

const Service = () => {
  return (
    <>
      {/* 页面标题区域 */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5" style={{background: '#f0f0f0'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', marginTop: '70px'}}>迷小服务</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              专业、高效、贴心的技术服务解决方案
            </p>
          </div>
        </div>
      </section>

      {/* 服务概述 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">服务体系</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">全方位服务支持</h2>
            <p className="text-gray-600 text-lg">
              迷小科技提供从咨询、实施到维护的全生命周期服务，确保客户业务顺畅运行
            </p>
          </div>

          {/* 服务类别卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 技术咨询服务 */}
            <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
              <div className="relative h-60 overflow-hidden">
                <LazyLoadImage 
                  effect="blur" 
                  src={serviceImage1} 
                  alt="迷小技术咨询服务" 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">技术咨询</h3>
                    <p className="text-white/80">专业的技术顾问团队，为您提供定制化解决方案</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FontAwesomeIcon icon={faUsers} className="text-primary" size="lg" />
                  </div>
                  <h3 className="text-xl font-bold">技术咨询</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  由经验丰富的技术专家组成的顾问团队，为客户提供战略规划、架构设计和技术选型等全方位咨询服务
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faGlobe} className="text-primary mr-2" size="sm" />
                    <span>数字化转型规划</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCog} className="text-primary mr-2" size="sm" />
                    <span>技术架构设计</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faChartLine} className="text-primary mr-2" size="sm" />
                    <span>性能优化分析</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 实施部署服务 */}
            <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
              <div className="relative h-60 overflow-hidden">
                <LazyLoadImage 
                  effect="blur" 
                  src={serviceImage2} 
                  alt="迷小实施部署服务" 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">实施部署</h3>
                    <p className="text-white/80">高效的项目管理和实施团队，确保系统顺利上线</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FontAwesomeIcon icon={faCloud} className="text-primary" size="lg" />
                  </div>
                  <h3 className="text-xl font-bold">实施部署</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  专业的项目管理和实施团队，确保系统按照预定时间和质量要求顺利上线运行
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faDatabase} className="text-primary mr-2" size="sm" />
                    <span>系统部署与迁移</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faHandshake} className="text-primary mr-2" size="sm" />
                    <span>数据整合与迁移</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faAward} className="text-primary mr-2" size="sm" />
                    <span>测试与质量保证</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 运维支持服务 */}
            <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
              <div className="relative h-60 overflow-hidden">
                <LazyLoadImage 
                  effect="blur" 
                  src={serviceImage3} 
                  alt="迷小运维支持服务" 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">运维支持</h3>
                    <p className="text-white/80">7×24小时技术支持，确保系统稳定运行</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <FontAwesomeIcon icon={faHeadset} className="text-primary" size="lg" />
                  </div>
                  <h3 className="text-xl font-bold">运维支持</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  提供全天候技术支持和系统维护服务，确保客户系统稳定运行，及时解决各类技术问题
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faClock} className="text-primary mr-2" size="sm" />
                    <span>7×24小时技术支持</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-primary mr-2" size="sm" />
                    <span>安全监控与防护</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCog} className="text-primary mr-2" size="sm" />
                    <span>系统优化与升级</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">服务流程</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">标准化服务流程</h2>
            <p className="text-gray-600 text-lg">
              迷小科技采用标准化的服务流程，确保为客户提供高质量、高效率的服务体验
            </p>
          </div>

          <div className="relative">
            {/* 连接线 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            
            {/* 流程步骤 */}
            <div className="space-y-12 relative">
              {/* 步骤1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">需求分析</h3>
                  <p className="text-gray-600">
                    深入了解客户需求，进行全面的需求分析和评估，制定详细的服务方案
                  </p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 mb-4 md:mb-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 md:text-left">
                  {/* <div className="w-full h-40 bg-light rounded-lg overflow-hidden hidden md:block">
                    <LazyLoadImage 
                      effect="blur" 
                      src={serviceImage1} 
                      alt="需求分析" 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                </div>
              </div>

              {/* 步骤2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  {/* <div className="w-full h-40 bg-light rounded-lg overflow-hidden hidden md:block">
                    <LazyLoadImage 
                      effect="blur" 
                      src={serviceImage2} 
                      alt="方案制定" 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 mb-4 md:mb-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <h3 className="text-xl font-bold mb-2">方案制定</h3>
                  <p className="text-gray-600">
                    根据需求分析结果，制定详细的服务实施方案，明确服务目标、范围、时间和交付物
                  </p>
                </div>
                
              </div>

              {/* 步骤3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">实施执行</h3>
                  <p className="text-gray-600">
                    按照服务方案，组织专业团队进行实施和执行，确保服务质量和进度
                  </p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 mb-4 md:mb-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 md:text-left">
                  {/* <div className="w-full h-40 bg-light rounded-lg overflow-hidden hidden md:block">
                    <LazyLoadImage 
                      effect="blur" 
                      src={serviceImage3} 
                      alt="实施执行" 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                </div>
              </div>

              {/* 步骤4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                    {/* <div className="w-full h-40 bg-light rounded-lg overflow-hidden hidden md:block">
                      <LazyLoadImage 
                        effect="blur" 
                        src={supportImage} 
                        alt="运维支持" 
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 mb-4 md:mb-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <h3 className="text-xl font-bold mb-2">运维支持</h3>
                  <p className="text-gray-600">
                    项目完成后，提供持续的运维支持和技术服务，确保系统稳定运行，及时解决各类问题
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">服务优势</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">专业服务，值得信赖</h2>
            <p className="text-gray-600 text-lg">
              迷小科技凭借专业的服务团队和丰富的行业经验，为客户提供高质量的服务体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-light p-6 rounded-xl text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <FontAwesomeIcon icon={faUsers} className="text-primary" size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">专业团队</h3>
              <p className="text-gray-600">
                拥有一支经验丰富的专业服务团队，具备深厚的技术积累和行业知识
              </p>
            </div>

            <div className="bg-light p-6 rounded-xl text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <FontAwesomeIcon icon={faClock} className="text-primary" size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">全天候支持</h3>
              <p className="text-gray-600">
                提供7×24小时技术支持服务，确保及时响应和解决客户问题
              </p>
            </div>

            <div className="bg-light p-6 rounded-xl text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <FontAwesomeIcon icon={faShieldAlt} className="text-primary" size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">安全保障</h3>
              <p className="text-gray-600">
                采用严格的安全管理措施，确保客户数据和系统安全
              </p>
            </div>

            <div className="bg-light p-6 rounded-xl text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <FontAwesomeIcon icon={faAward} className="text-primary" size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">优质服务</h3>
              <p className="text-gray-600">
                以客户为中心，提供个性化、定制化的优质服务，满足客户多样化需求
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Service;