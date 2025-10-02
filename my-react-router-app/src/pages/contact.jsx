import { useState } from 'react'; 
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarker, 
  faPhone, 
  faMailBulk, 
  faClock, 
  faArrowRight, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWeibo, faWeixin, faTiktok } from '@fortawesome/free-brands-svg-icons';

// 导入联系我们相关图片
import contactImage from '../assets/images/city.jpg';
import companyImage from '../assets/images/company.jpg';

const Contact = () => {
  // 表单状态管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // 表单验证状态
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 处理输入变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // 清除对应字段的错误
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // 表单验证
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = '请输入主题';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '请输入您的留言';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // 这里可以添加表单提交逻辑，例如API调用
      console.log('表单提交:', formData);
      setIsSubmitted(true);
      // 重置表单
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 页面标题区域 */}
      <section className="relative overflow-hidden">
        <div className="w-full h-72 md:h-96 relative">
          <LazyLoadImage 
            effect="blur"
            src={contactImage}
            alt="联系我们"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">联系我们</h1>
              <p className="text-lg md:text-xl animate-fadeIn animation-delay-300">
                无论您有任何问题、建议或合作意向，都可以通过以下方式联系我们
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系信息区域 */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-lift">
              <div className="text-blue-600 text-3xl mb-4">
                <FontAwesomeIcon className="text-primary mr-3" icon={faMapMarker} />
              </div>
              <h3 className="text-xl font-bold mb-3">公司地址</h3>
              <p className="text-gray-600 mb-4">
                河南省郑州市高新技术产业开发区科学大道88号
              </p>
              <p className="text-gray-600">
                迷小云科技大厦 A 座 15 层
              </p>
            </div> */}

            {/* 联系卡片 2 - 电话 */}
            {/* <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-lift">
              <div className="text-blue-600 text-3xl mb-4">
                <FontAwesomeIcon className="text-primary mr-3" icon={faPhone} />
              </div>
              <h3 className="text-xl font-bold mb-3">联系电话</h3>
              <p className="text-gray-600 mb-4">
                客服热线：400-888-7777
              </p>
              <p className="text-gray-600">
                商务合作：0371-6666-8888
              </p>
            </div> */}

            {/* 联系卡片 3 - 邮箱 */}
            {/* <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-lift">
              <div className="text-blue-600 text-3xl mb-4">
                <FontAwesomeIcon className="text-primary mr-3" icon={faMailBulk} />
              </div>
              <h3 className="text-xl font-bold mb-3">电子邮箱</h3>
              <p className="text-gray-600 mb-4">
                客服邮箱：support@mixiao.com
              </p>
              <p className="text-gray-600">
                商务合作：business@mixiao.com
              </p>
            </div>
          </div> */}
        {/* </div> */}
    {/* //   </section> */}

      {/* 联系表单和公司信息区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className=" text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                发送留言
              </h2>
              
              {isSubmitted ? (
                <div className="text-center p-8 bg-green-50 rounded-lg">
                  <div className="text-green-500 text-4xl mb-4">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">提交成功！</h3>
                  <p className="text-gray-600">
                    感谢您的留言，我们会尽快与您联系。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="请输入您的姓名"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="请输入您的邮箱"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      主题 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="请输入留言主题"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="请输入您的留言内容"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="bg-primary w-full text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      发送留言
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* 公司信息和地图 */}
            <div>
              {/* 公司简介 */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  关于迷小公司
                </h2>
                <div className="mb-6">
                  {/* <LazyLoadImage 
                    effect="blur"
                    src={companyImage}
                    alt="公司环境"
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  /> */}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  迷小云科技是一家专注于计算、区块链和新能源革命技术的创新型企业，致力于为客户提供全方位的数字化转型解决方案。
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  自成立以来，我们始终坚持以技术创新为核心，以客户需求为导向，不断提升服务质量和技术水平，已成功为众多企业提供了优质的产品和服务。
                </p>
                <Link 
                  to="/about" 
                  className="text-primary inline-flex items-center hover: font-medium transition-colors"
                >
                  了解更多关于我们
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" size="sm" />
                </Link>
              </div>

              {/* 营业时间 */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  营业时间
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">周一至周五：</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">周六：</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">周日：</span>
                    <span className="font-medium text-gray-500">休息</span>
                  </div>
                </div>
              </div>

              {/* 社交媒体 */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  关注我们
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                    <FontAwesomeIcon icon={faWeixin} />
                  </a>
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <FontAwesomeIcon icon={faWeibo} />
                  </a> */}
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a> */}
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            常见问题
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 项目 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                如何预约产品演示？
              </h3>
              <p className="text-gray-600">
                您可以通过联系表单、电话或邮件方式与我们取得联系，我们的客户经理会在24小时内与您沟通并安排产品演示。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                你们提供哪些技术支持？
              </h3>
              <p className="text-gray-600">
                我们提供7×12小时的技术支持服务，包括在线客服、电话支持、邮件支持以及远程协助等多种方式，确保您的系统稳定运行。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                产品价格是多少？
              </h3>
              <p className="text-gray-600">
                我们的产品采用模块化设计，价格根据您的具体需求和使用规模而定。请联系我们的销售团队获取详细的报价方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 合作伙伴区域 */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            合作伙伴
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-24 hover:bg-gray-200 transition-colors">
                <div className="text-center">
                  <span className="text-gray-500 font-medium">合作伙伴 {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Contact;