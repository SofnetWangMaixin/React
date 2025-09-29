import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // 如果使用模糊效果需要导入样式
import entrance from '../assets/images/entrance.jpg';
import server from '../assets/images/server.jpg';
import school from '../assets/images/school.jpg';
import disaster from '../assets/images/disaster.jpg';
import nightcity from '../assets/images/night_city.jpg'; 
import city from '../assets/images/city.jpg';
import company from '../assets/images/company.jpg';

const Home = () => {

    return (
        <main>
            {/* 英雄区域 */}
            <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-light to-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 z-10">
                            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-dark mb-6">
                                重新定义<br />
                                <span className="text-primary">传统计算</span> 旧模式
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                                迷小云枢链算模式为数以万计的计算设备提供全新的计算模式，开创贡献算力新模式，让科技服务每个行业。
                            </p>
                        </div>
                        
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-0 hover:rotate-0 transition-all duration-500">
                                <LazyLoadImage effect="blur" src={entrance}  alt="迷小科技产品展示" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 产品展示 */}
            <section id="products" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">公司业务分布</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            迷小业务涵盖云计算、光伏储能、电子商务及抗震救灾，以技术创新提供更开放、安全的场景，赋能社会与个人
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 产品1 */}
                        <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
                            <div className="relative h-60 overflow-hidden">
                                <LazyLoadImage effect="blur" src={server} alt="云枢链算服务展示" className="w-full h-full object-cover transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">云枢链算</h3>
                                <p className="text-gray-600 mb-4">
                                    打破传统云计算数据集群的模式，提供全新计算方案。
                                </p>
                            </div>
                        </div>
                        
                        {/* 产品2 */}
                        <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
                            <div className="relative h-60 overflow-hidden">
                                <LazyLoadImage effect="blur" src={school} alt="豫光伏储能项目展示" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">豫光伏储能</h3>
                                <p className="text-gray-600 mb-4">
                                    迷小努力在豫北地区建设大型储能基地。
                                </p>
                            </div>
                        </div>
                        
                        {/* 产品3 */}
                        <div className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
                            <div className="relative h-60 overflow-hidden">
                                <LazyLoadImage effect="blur" src={disaster} alt="迷小救援服务展示" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">迷小救援</h3>
                                <p className="text-gray-600 mb-4">
                                    可靠的抗震救灾队伍7x24小时待命，无偿提供救灾服务。
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        {/* 后续版本预留代码
                        <a href="#" className="inline-flex items-center bg-white border border-gray-300 text-dark hover:bg-gray-50 px-8 py-3 rounded-full font-medium transition-all duration-300">
                            查看全部产品
                        </a> */}
                    </div>
                </div>
            </section>
            
            
            {/* 关于我们 */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">About Sofnet</span>
                            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-6">为了明天更美好</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                迷小公司成立于2024年，团队诞生于2019年，涉足多个行业服务科技社会。
                            </p>
                            <p className="text-gray-600 mb-8 text-lg">
                                公司拥有一支超过50+人的科研团队覆盖全国各地，总部位于河南新乡。迷小的云枢链算概念推动互联网3.0的发展，帮助多个大型数据集群完成去中心化目标，加速更高一代蜂窝网络研发。
                            </p>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary mb-2">6+</p>
                                    <p className="text-gray-600">年行业经验</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary mb-2">50+</p>
                                    <p className="text-gray-600">团队成员</p>
                                </div>
                                {/* 后续版本预留代码
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary mb-2">50+</p>
                                    <p className="text-gray-600">国家地区</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary mb-2">1000+</p>
                                    <p className="text-gray-600">企业客户</p>
                                </div> */}
                            </div>
                            
                            {/* 
                            <a href="#" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full inline-block font-medium transition-all duration-300 shadow-lg shadow-primary/20">
                                了解更多公司信息
                            </a>
                            */}
                        </div>
                        
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <LazyLoadImage effect="blur" src={nightcity} alt="公司夜景展示" className="rounded-lg shadow-lg w-full h-auto hover-lift" />
                                </div>
                                <div className="space-y-4 pt-8">
                                    <LazyLoadImage effect="blur" src={city} alt="" className="rounded-lg shadow-lg w-full h-auto hover-lift" />
                                    <LazyLoadImage effect="blur" src={company} alt="" className="rounded-lg shadow-lg w-full h-auto hover-lift" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
