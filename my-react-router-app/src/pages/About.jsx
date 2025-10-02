import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // 如果使用模糊效果需要导入样式
import company1 from '../assets/images/company1.jpg';
import wangmaixin from '../assets/images/wangmaixin.jpg';
import sofnet from '../assets/images/sofnet.png';
import '../assets/icon/iconfont.css';

const About = () => {
  return (
    <div className="page-transition">
      {/* <!-- 页面标题区域 --> */}
      <section class="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5" style={{background: '#f0f0f0'}}>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', marginTop: '70px'}}>关于迷小</h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              让计算更高效、能源更可持续
            </p>
          </div>
        </div>
      </section>

      {/* <!-- 公司概况 --> */}
      <section id="overview" class="py-16 md:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <span class="text-primary font-semibold inline-block mb-3">公司概况</span>
              <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-6">
                迷小公司：云枢链算模式的开创者
              </h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                迷小公司成立于2024年，是一家专注于互联网推动计算的创新企业。我们始终秉持"让计算更高效、能源更可持续"的理念，致力于创造更美好的明天。
              </p>
              <p class="text-gray-600 mb-8 leading-relaxed">
                经过多年的发展，公司已在云计算、光伏储能、志愿救灾、校园计划等领域积累了丰富的经验和技术实力，服务制造、化工、互联网等多个行业，赢得了广泛的市场认可。
              </p>
              
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div class="text-center p-4 rounded-lg bg-light hover:shadow-md transition-all" style={{cursor: 'pointer'}}>
                  <div class="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
                  <div class="text-gray-600">成立年限</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-light hover:shadow-md transition-all" style={{cursor: 'pointer'}}>
                  <div class="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                  <div class="text-gray-600">专业成员</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-light hover:shadow-md transition-all" style={{cursor: 'pointer'}}>
                  <div class="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
                  <div class="text-gray-600">合作客户</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-light hover:shadow-md transition-all" style={{cursor: 'pointer'}}>
                  <div class="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
                  <div class="text-gray-600">开发项目</div>
                </div>
              </div>
              
              {/* <!-- <a href="/contact.html" class="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all shadow-md hover:shadow-lg">
                咨询合作 
              </a> --> */}
            </div>
            
            <div class="order-1 lg:order-2 relative">
              <div class="relative z-10 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                {/* <img src="../../../images/company1.jpg" alt="迷小公司办公环境" class="w-full h-auto" /> */}
                <LazyLoadImage effect="blur" src={company1}  alt="迷小公司办公环境" className="w-full h-auto"/>
              </div>
              {/* <!-- <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full -z-10"></div> -->
              <!-- <div class="absolute -top-6 -right-6 w-40 h-40 bg-primary/20 rounded-full -z-10"></div> --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- 发展历程 --> */}
      <section class="py-16 md:py-24 bg-light">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-primary font-semibold inline-block mb-3">里程碑</span>
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-6">
              迷小公司的发展历程
            </h2>
            <p class="text-gray-600">
              每一步都凝聚着我们的努力与智慧，每一个里程碑都见证着我们的成长与蜕变
            </p>
          </div>
          
          <div class="relative">
            {/* <!-- 时间线中轴线 --> */}
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-[-0.25rem]"></div>
            
            {/* <!-- 时间线内容 --> */}
            <div class="space-y-12">
              
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <h3 class="text-xl font-bold text-dark mb-2">迷小前身</h3>
                  <p class="text-gray-600">
                    迷小前身（九江市布兰克网络科技有限公司）在江西九江成立。
                  </p>
                </div>
                <div class="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform md:translate-x-[-50%] z-10 order-1 md:order-2"></div>
                <div class="md:w-1/2 md:pl-12 order-3">
                  <span class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-medium">2017年5月</span>
                </div>
              </div>
              
              
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <span class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-medium">2018年10月</span>
                </div>
                <div class="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform md:translate-x-[-50%] z-10 order-1 md:order-2"></div>
                <div class="md:w-1/2 md:pl-12 order-3">
                  <h3 class="text-xl font-bold text-dark mb-2">迷小计划提出</h3>
                  <p class="text-gray-600">
                    经团队多名骨干成员自发组织，《迷小计划》提出并开始实施。
                  </p>
                </div>
              </div>
              
              
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <h3 class="text-xl font-bold text-dark mb-2">公司搬迁</h3>
                  <p class="text-gray-600">
                    新乡北办公室建成并投入使用，公司从九江搬迁至新乡。
                  </p>
                </div>
                <div class="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform md:translate-x-[-50%] z-10 order-1 md:order-2"></div>
                <div class="md:w-1/2 md:pl-12 order-3">
                  <span class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-medium">2019年10月</span>
                </div>
              </div>
              
              
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <span class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-medium">2024年3月</span>
                </div>
                <div class="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform md:translate-x-[-50%] z-10 order-1 md:order-2"></div>
                <div class="md:w-1/2 md:pl-12 order-3">
                  <h3 class="text-xl font-bold text-dark mb-2">迷小成立</h3>
                  <p class="text-gray-600">
                    由公司多名股东和骨干技术成员在新乡市正式成立迷小公司。
                  </p>
                </div>
              </div>
              
              
              <div class="relative flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <h3 class="text-xl font-bold text-dark mb-2">迷小转型</h3>
                  <p class="text-gray-600">
                    迷小开始向基础服务行业转型，停止多项已开展的业务，并成立光核储能分公司。
                  </p>
                </div>
                <div class="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform md:translate-x-[-50%] z-10 order-1 md:order-2"></div>
                <div class="md:w-1/2 md:pl-12 order-3">
                  <span class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-medium">2025年9月</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- 企业文化 --> */}
      <section class="" style={{paddingBottom: '50px', paddingLeft: '20px', paddingRight: '20px'}}>
        <div class="container mx-auto">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-primary font-semibold inline-block mb-3"  style={{marginTop: '100px'}}>企业核心</span>
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-6">
              我们的企业文化
            </h2>
            <p class="text-gray-600">
              企业文化是公司发展的灵魂，是我们共同遵循的价值理念与行为准则
            </p>
          </div>
        </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- 使命 --> */}
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <span class="iconfont icon-jiazhiguan fa fa-eye text-primary text-2xl"></span>
              </div>
              <h3 class="text-xl font-bold text-dark mb-4">我们的使命</h3>
              <p class="text-gray-600">
                为了明天更美好！
              </p>
            </div>
            
            {/* <!-- 愿景 --> */}
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <span class="iconfont icon-shiming fa fa-eye text-primary text-3xl"></span>
              </div>
              <h3 class="text-xl font-bold text-dark mb-4">我们的愿景</h3>
              <p class="text-gray-600">
                成为全球领先的科技创新企业，打造可持续发展的百年品牌，引领行业未来趋势。
              </p>
            </div>
            
            {/* <!-- 价值观 --> */}
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <span class="iconfont icon-yuanjing fa fa-eye text-primary text-3xl"></span>
              </div>
              <h3 class="text-xl font-bold text-dark mb-4">核心价值观</h3>
              <p class="text-gray-600">
                客户至上、创新进取、诚信正直、团队协作、追求卓越、感恩回馈。
              </p>
            </div>
            
            {/* <!-- 经营理念 --> */}
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <span class="iconfont icon-qiyeyuanjing fa fa-eye text-primary text-3xl"></span>
              </div>
              <h3 class="text-xl font-bold text-dark mb-4">经营理念</h3>
              <p class="text-gray-600">
                以市场为导向，以技术为核心，以质量为生命，以服务为保障，实现共赢发展。
              </p>
            </div>
          </div>
          
          {/* <!-- 企业荣誉 --> */}
          {/* <div class="mt-20">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-bold text-dark mb-4">企业荣誉</h3>
              <p class="text-gray-600 max-w-2xl mx-auto">
                多年来，凭借卓越的产品与服务，我们获得了行业与社会的广泛认可
              </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <div class="text-primary text-3xl mb-2"><i class="fa fa-trophy"></i></div>
                <div class="text-gray-600 text-sm">最佳创新企业</div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <div class="text-primary text-3xl mb-2"><i class="fa fa-certificate"></i></div>
                <div class="text-gray-600 text-sm">高新技术企业</div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <div class="text-primary text-3xl mb-2"><i class="fa fa-star"></i></div>
                <div class="text-gray-600 text-sm">客户满意奖</div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <div class="text-primary text-3xl mb-2"><i class="fa fa-shield"></i></div>
                <div class="text-gray-600 text-sm">安全认证</div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <div class="text-primary text-3xl mb-2"><i class="fa fa-line-chart"></i></div>
                <div class="text-gray-600 text-sm">成长之星</div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                <div class="text-primary text-3xl mb-2"><i class="fa fa-users"></i></div>
                <div class="text-gray-600 text-sm">最佳雇主</div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* <!-- 团队介绍 --> */}
      <section id="team" class="py-16 md:py-24 bg-light">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-primary font-semibold inline-block mb-3">核心力量</span>
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-6">
              认识我们的团队
            </h2>
            <p class="text-gray-600">
              
            </p>
          </div>
        </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{paddingLeft: '20px', paddingRight: '20px'}}>
            {/* <!-- 团队成员1 --> */}
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div class="relative overflow-hidden">
                <LazyLoadImage effect="blur" src={wangmaixin}  alt="王灿锦 - 创始人兼CEO" className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div class="p-6 w-full">
                    {/* <!-- <div class="flex justify-center space-x-4">
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa">1111111111</i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div> --> */}
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-dark mb-1">王灿锦</h3>
                <p class="text-primary mb-3">创始人兼CEO</p>
                <p class="text-gray-600 text-sm">
                  现任迷小公司董事长、乡网中心办公室主任，拥有计算机行业多年工作经验。
                </p>
              </div>
            </div>
            
            {/* <!-- 团队成员2 --> */}
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div class="relative overflow-hidden">
                <LazyLoadImage effect="blur" src={sofnet}  alt="侯万昆 - 财务总监" className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div class="p-6 w-full">
                    {/* <!-- <div class="flex justify-center space-x-4">
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div> --> */}
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-dark mb-1">侯万昆</h3>
                <p class="text-primary mb-3">财务总监</p>
                <p class="text-gray-600 text-sm">
                  现任迷小公司财务总监、基础服务事业部主任，做事勤勉有担当，心怀热忱追目标。
                </p>
              </div>
            </div>
            
            {/* <!-- 团队成员3 --> */}
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div class="relative overflow-hidden">
                <LazyLoadImage effect="blur" src={sofnet}  alt="穆森 - 监事" className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div class="p-6 w-full">
                    {/* <!-- <div class="flex justify-center space-x-4">
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div> --> */}
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-dark mb-1">穆森</h3>
                <p class="text-primary mb-3">监事</p>
                <p class="text-gray-600 text-sm">
                  现任迷小公司监事、乡网中心办公室副主任，对工作充满激情，不断精进技能，用行动诠释积极。
                </p>
              </div>
            </div>
            
            {/* <!-- 团队成员4 --> */}
            <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div class="relative overflow-hidden">
                <LazyLoadImage effect="blur" src={sofnet}  alt="李摩西 - 技术总监" className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div class="p-6 w-full">
                    {/* <!-- <div class="flex justify-center space-x-4">
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div> --> */}
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-dark mb-1">李摩西</h3>
                <p class="text-primary mb-3">技术总监</p>
                <p class="text-gray-600 text-sm">
                  现任乡网中心办公室技术总监，步步稳扎求进步，工作热情不褪色，积极态度求进取。
                </p>
              </div>
            </div>
          </div>
          
          {/* <!-- <div class="text-center mt-12">
            <a href="/team.html" class="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-primary border border-primary rounded-full transition-all shadow-sm hover:shadow">
              查看全部团队成员 <i class="fa fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div> --> */}
      </section>

      {/* <!-- 发展数据 --> */}
      <section class="py-16 md:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-primary font-semibold inline-block mb-3">成长数据</span>
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-6">
              我们的发展与成就
            </h2>
            <p class="text-gray-600">

            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="text-3xl font-bold text-dark mb-6">未来五年战略目标</h3>
              <div class="h-80">
                <h2 class="text-xl">乡网中心</h2>
                <p class="" style={{textIndent: '1em', marginBottom: '20px'}}>在全国试点城市构建第一批云枢链算网络。</p>
                <h2 class="text-xl">光核公司</h2>
                <p class="" style={{textIndent: '1em', marginBottom: '20px'}}>迷小努力在豫北地区建设大型储能基地。</p>
                <h2 class="text-xl">行政部</h2>
                <p class="" style={{textIndent: '1em', marginBottom: '20px'}}>建设迷小第一个家。</p>
                <h2 class="text-xl">支援救援队伍</h2>
                <p class="" style={{textIndent: '1em', marginBottom: '20px'}}>快速发展至全国各个地区。</p>
              </div>
            </div>
            
            {/* <!-- 数据统计 --> */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-dark">客户满意度</h3>
                  <span class="text-primary text-2xl"></span>
                </div>
                <div class="text-4xl font-bold text-dark mb-2">90%</div>
                <div class="flex items-center text-green-500 text-sm">
                  {/* <!-- 较去年提升2.3% --> */}
                </div>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-dark">项目交付率</h3>
                  <span class="text-primary text-2xl"></span>
                </div>
                <div class="text-4xl font-bold text-dark mb-2">100%</div>
                <div class="flex items-center text-green-500 text-sm">
                  {/* <!-- 较去年提升1.8% --> */}
                </div>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-dark">员工留存率</h3>
                  <span class="text-primary text-2xl"></span>
                </div>
                <div class="text-4xl font-bold text-dark mb-2">85.4%</div>
                <div class="flex items-center text-green-500 text-sm">
                  {/* <!-- 较去年提升3.5% --> */}
                </div>
              </div>
              
              <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-dark">技术创新</h3>
                  <span class="text-primary text-2xl"></span>
                </div>
                <div class="text-4xl font-bold text-dark mb-2">2+</div>
                <div class="flex items-center text-gray-600 text-sm">
                  {/* <!-- 核心技术专利数量 --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
