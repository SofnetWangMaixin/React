import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel,  faCopyright, faExclamationTriangle, faLock, faFileText, faBalanceScale} from '@fortawesome/free-solid-svg-icons';


const LegalNotice = () => {
  return (
    <>
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5" style={{background: '#f0f0f0'}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', marginTop: '70px'}}>法律声明</h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                        本声明阐述了使用迷小公司网站及服务的相关法律条款与条件
                    </p>
                </div>
            </div>
        </section>


        {/* 主要内容区 */}
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* 声明更新日期 */}
                    <div className="bg-blue-50 border-l-4 border-primary p-4 mb-8 rounded-r">
                        <p className="text-sm text-gray-700"><strong>最后更新日期：</strong>2025年9月28日</p>
                        <p className="text-sm text-gray-600 mt-1">请定期查阅本声明，以了解任何变更。您继续使用本网站即表示您接受这些变更。</p>
                    </div>

                    {/* 声明内容 */}
                    <div className="space-y-8">
                        {/* 总则 */}
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <FontAwesomeIcon 
                                    icon={faGavel} 
                                    className="text-primary mr-3"
                                />总则
                            </h2>
                            <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                                <p>欢迎访问新乡市迷小网络科技公司（以下简称"本公司"）官方网站（以下简称"本网站"）。使用本网站前，请您仔细阅读以下法律声明。您对本网站的使用将被视为对本声明全部内容的认可和接受。</p>
                                <p>本公司保留随时修改本法律声明的权利。任何修改将在本网站上公布后立即生效。建议您定期查阅本声明，以了解最新条款。</p>
                            </div>
                        </section>

                        {/* 知识产权 */}
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <FontAwesomeIcon 
                                    icon={faCopyright} 
                                    className="text-primary mr-3"  // Tailwind 控制大小和颜色
                                />知识产权声明
                            </h2>
                            <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                                <p>本网站内所有的产品、技术、软件、程序、数据及其他信息（包括但不限于文字、图像、图片、照片、音频、视频、图表、色彩、版面设计、电子文档）的所有权利（包括但不限于版权、商标权、专利权、商业秘密及其他所有相关权利）均归本公司或本公司的关联公司所有。</p>
                                <p>未经本公司书面许可，任何人不得擅自使用（包括但不限于通过任何机器人、蜘蛛等程序或设备监视、复制、传播、展示、镜像、上载、下载本网站中的内容）。</p>
                                <p>本网站的logo、"迷小"等文字、图形及其组合，以及本网站的其他标识、徽记、产品和服务名称均为本公司的商标，未经本公司书面许可，任何人不得使用。</p>
                            </div>
                        </section>

                        {/* 免责声明 */}
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <FontAwesomeIcon 
                                    icon={faExclamationTriangle} 
                                    className="text-primary mr-3"  // Tailwind 控制大小和颜色
                                />免责声明
                            </h2>
                            <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                                <p>本网站所载的信息和内容仅作参考之用，本公司不对其准确性、完整性或及时性作出任何明示或默示的保证。</p>
                                <p>本公司保留随时对本网站内容进行修改和更新的权利，恕不另行通知。对于因使用或依赖本网站内容所导致的任何直接或间接损失，本公司不承担任何责任。</p>
                                <p>本网站可能包含链接到第三方网站的链接，这些链接仅为方便用户而提供。对于这些第三方网站的内容、隐私政策或运营，本公司概不负责，也不承担任何责任。</p>
                                <p>本网站的使用由用户自行承担风险。在法律允许的最大范围内，本公司不就因使用或不能使用本网站的内容所引起的任何直接的、间接的、附带的、特殊的或后果性的损失（包括但不限于利润损失、数据丢失、业务中断等）承担责任。</p>
                            </div>
                        </section>

                        {/* 隐私政策 */}
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <FontAwesomeIcon 
                                    icon={faLock} 
                                    className="text-primary mr-3"  // Tailwind 控制大小和颜色
                                />隐私政策
                            </h2>
                            <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                                <p>本公司尊重并保护所有使用本网站用户的个人隐私权。本公司不会在未经用户授权的情况下，公开、编辑或透露用户的个人信息。</p>
                                <p>当您访问本网站时，我们可能会收集您的某些信息，包括但不限于您的IP地址、浏览器类型、访问时间等，这些信息仅用于网站分析和改进服务质量。</p>
                                <p>如您想了解更详细的隐私保护措施，请参阅本公司的《隐私政策》。</p>
                            </div>
                        </section>

                        {/* 使用条款 */}
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <FontAwesomeIcon 
                                    icon={faFileText} 
                                    className="text-primary mr-3"  // Tailwind 控制大小和颜色
                                />使用条款
                            </h2>
                            <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                                <p>您承诺仅将本网站用于合法目的，遵守所有适用的法律法规以及本声明的规定。</p>
                                <p>您不得利用本网站从事任何违法活动，包括但不限于传播任何非法、有害、威胁、诽谤、骚扰、侵犯他人隐私或知识产权的内容。</p>
                                <p>本公司保留在发现任何违反本声明的行为时，立即终止用户访问本网站的权利，且无需事先通知。</p>
                            </div>
                        </section>

                        {/* 法律适用与管辖 */}
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <i className="fa fa-balance-scale text-primary mr-3"></i>
                                <FontAwesomeIcon 
                                    icon={faBalanceScale} 
                                    className="text-primary mr-3"  // Tailwind 控制大小和颜色
                                />法律适用与管辖
                            </h2>
                            <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                                <p>本法律声明的订立、执行和解释及争议的解决均应适用中华人民共和国法律。</p>
                                <p>如双方就本声明内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向本公司所在地有管辖权的人民法院提起诉讼。</p>
                            </div>
                        </section>


                        {/* 确认按钮区 */}
                        <section className="bg-neutral py-10 section-fade">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-2xl mx-auto text-center">
                                    <p className="text-gray-700 mb-6">继续使用本网站，即表示您已阅读并同意上述法律声明的所有条款。</p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <Link to="/" className="bg-primary text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                                            我已阅读并同意
                                        </Link>
                                        <a href="javascript:;" className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-lg border border-gray-300 transition-all transform hover:scale-105 shadow-sm hover:shadow">
                                            有疑问，联系我们
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default LegalNotice;