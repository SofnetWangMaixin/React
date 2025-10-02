import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faPhone,
  faMailBulk,
  faArrowRight,
  faCheck,
  faUser,
  faBriefcase,
  faCode,
  faDatabase,
  faUsers,
  faCalendar,
  faFileText
} from '@fortawesome/free-solid-svg-icons';
import { faWeixin, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';

// 导入相关图片
import joinusImage from '../assets/images/company.jpg';
import officeImage from '../assets/images/company1.jpg';

const JoinUs = () => {
  // 表单状态管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
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
    
    if (!formData.position.trim()) {
      newErrors.position = '请选择您应聘的职位';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '请输入您的自我介绍';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // 这里可以添加表单提交逻辑，例如API调用
      console.log('应聘表单提交:', formData);
      setIsSubmitted(true);
      // 重置表单
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          position: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  // 招聘职位数据
  const jobPositions = [
    {
      id: 1,
      title: '前端开发工程师',
      department: '技术部',
      icon: <FontAwesomeIcon icon={faCode} className="text-blue-500" />,
      description: '负责公司产品前端开发，优化用户体验，与后端团队协作实现功能需求。',
      requirements: [
        '精通React、Vue等前端框架',
        '熟悉HTML5、CSS3、JavaScript等前端技术',
        '具有良好的代码风格和编程习惯',
        '具备团队协作精神和沟通能力'
      ]
    },
    {
      id: 2,
      title: '后端开发工程师',
      department: '技术部',
      icon: <FontAwesomeIcon icon={faDatabase} className="text-green-500" />,
      description: '负责公司产品后端架构设计和开发，优化系统性能，确保系统稳定运行。',
      requirements: [
        '精通Java、Python或Go等后端语言',
        '熟悉数据库设计和优化',
        '了解分布式系统原理',
        '具备良好的问题分析和解决能力'
      ]
    },
    {
      id: 3,
      title: '产品经理',
      department: '产品部',
      icon: <FontAwesomeIcon icon={faBriefcase} className="text-purple-500" />,
      description: '负责产品规划和设计，协调跨部门资源，推动产品迭代和优化。',
      requirements: [
        '具备产品规划和设计经验',
        '良好的用户体验意识',
        '优秀的沟通和协调能力',
        '能够承受工作压力'
      ]
    },
    {
      id: 4,
      title: '人力资源专员',
      department: '人力资源部',
      icon: <FontAwesomeIcon icon={faUser} className="text-orange-500" />,
      description: '负责公司招聘、培训、绩效管理等人力资源工作，营造良好的企业文化氛围。',
      requirements: [
        '人力资源管理相关专业',
        '具备招聘和培训经验',
        '良好的沟通和协调能力',
        '熟悉人力资源管理软件'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 页面标题区域 */}
      <section className="relative overflow-hidden">
        <div className="w-full h-72 md:h-96 relative">
          <LazyLoadImage 
            effect="blur"
            src={joinusImage}
            alt="加入我们"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">加入我们</h1>
              <p className="text-lg md:text-xl animate-fadeIn animation-delay-300">
                与我们一起，创造更美好的未来
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们简介 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              关于迷小云科技
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              迷小云科技是一家专注于计算、区块链和新能源革命技术的创新型企业，致力于为客户提供全方位的数字化转型解决方案。
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              我们拥有一支充满激情和创新精神的团队，期待您的加入，共同创造更加美好的未来。
            </p>
            <div className="flex justify-center">
              <Link 
                to="/about" 
                className="text-primary inline-flex items-center hover: font-medium transition-colors"
              >
                了解更多关于我们
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" size="sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 招聘职位区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            招聘职位
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobPositions.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-gray-500 text-sm">{job.department}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">任职要求：</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" size="sm" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, position: job.title }));
                    document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  申请此职位
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 应聘流程 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            应聘流程
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* 流程步骤 */}
              {[
                { icon: <FontAwesomeIcon icon={faFileText} />, text: '简历投递' },
                { icon: <FontAwesomeIcon icon={faCheck} />, text: '简历筛选' },
                { icon: <FontAwesomeIcon icon={faPhone} />, text: '电话面试' },
                { icon: <FontAwesomeIcon icon={faUsers} />, text: '现场面试' },
                { icon: <FontAwesomeIcon icon={faCheck} />, text: '录用通知' }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center mb-8 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-3">
                      {step.icon}
                    </div>
                    <p className="text-gray-700 text-center">{step.text}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block w-16 h-1 bg-gray-300">
                      <div className="w-full h-full bg-primary"></div>
                    </div>
                  )}
                  {index < 4 && (
                    <div className="block md:hidden w-1 h-12 bg-gray-300">
                      <div className="w-full h-full bg-primary"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系信息和申请表单 */}
      <section className="py-16" id="application-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 申请表单 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                申请职位
              </h2>
              
              {isSubmitted ? (
                <div className="text-center p-8 bg-green-50 rounded-lg">
                  <div className="text-green-500 text-4xl mb-4">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">提交成功！</h3>
                  <p className="text-gray-600">
                    感谢您的申请，我们会尽快审核您的简历并与您联系。
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
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      应聘职位 *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.position ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">请选择应聘职位</option>
                      {jobPositions.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                    {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      自我介绍 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="请简要介绍您自己和您的相关经验"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="bg-primary w-full text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      提交申请
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* 联系信息 */}
            <div>
              {/* 联系方式 */}
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  联系我们
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    {/* <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faMapMarker} />
                    </div> */}
                    <div>
                      {/* <h3 className="text-lg font-medium text-gray-800 mb-1">公司地址</h3>
                      <p className="text-gray-600">
                        河南省郑州市高新技术产业开发区科学大道88号
                      </p>
                      <p className="text-gray-600">
                        迷小云科技大厦 A 座 15 层
                      </p> */}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">联系电话</h3>
                      <p className="text-gray-600">
                        招聘热线：0371-6666-7777
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faMailBulk} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">电子邮箱</h3>
                      <p className="text-gray-600">
                        招聘邮箱：hr@mixiao.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">工作时间</h3>
                      <p className="text-gray-600">
                        周一至周五：9:00 - 18:00
                      </p>
                    </div>
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
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
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
                招聘流程需要多长时间？
              </h3>
              <p className="text-gray-600">
                通常情况下，从投递简历到收到录用通知需要2-3周时间，具体时间会根据职位需求和面试安排有所不同。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                贵公司提供哪些福利？
              </h3>
              <p className="text-gray-600">
                我们提供具有竞争力的薪资待遇、五险一金、绩效奖金、带薪年假、节日福利、定期团建活动以及良好的职业发展空间。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                是否接受应届毕业生？
              </h3>
              <p className="text-gray-600">
                是的，我们非常欢迎优秀的应届毕业生加入我们的团队，并提供系统的培训和职业发展指导。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;