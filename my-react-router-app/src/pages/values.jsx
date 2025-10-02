import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, 
  faHandshake, 
  faUsers, 
  faUserCheck, 
  faAward,
  faCheckCircle,
  faHeart,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

// 导入核心价值观相关图片
import valuesImage from '../assets/images/night_city.jpg';
import innovationImage from '../assets/images/code.jpg';
import integrityImage from '../assets/images/deploy.jpg';
import teamworkImage from '../assets/images/sofnet.png';
import customerImage from '../assets/images/school.jpg';

const Values = () => {
  // 核心价值观数据
  const coreValues = [
    {
      id: 1,
      title: "创新至上",
      description: "我们鼓励创新思维，不断探索新技术和新方法，为客户提供更具价值的产品和服务。创新是我们持续发展的动力源泉。",
      icon: faLightbulb,
      image: innovationImage,
      practices: [
        "定期举办技术创新大赛，鼓励员工提出创新性想法",
        "投入15%的研发资源用于探索前沿技术",
        "建立创新奖励机制，对有价值的创新成果给予奖励"
      ]
    },
    {
      id: 2,
      title: "诚信为本",
      description: "诚信是我们最基本的原则，我们坚持诚实正直的商业道德，对客户、合作伙伴和员工保持透明和负责的态度。",
      icon: faHandshake,
      image: integrityImage,
      practices: [
        "建立透明的绩效考核和晋升机制",
        "对客户承诺的服务质量100%兑现",
        "鼓励员工坦诚沟通，建立互信的工作环境"
      ]
    },
    {
      id: 3,
      title: "团队协作",
      description: "我们相信团队的力量，通过协作与互补，共同应对挑战，实现个人和团队的共同成长，创造卓越的成果。",
      icon: faUsers,
      image: teamworkImage,
      practices: [
        "采用敏捷开发模式，促进跨部门协作",
        "定期组织团队建设活动，增强团队凝聚力",
        "建立知识共享平台，促进经验交流"
      ]
    },
    {
      id: 4,
      title: "客户至上",
      description: "客户的需求是我们工作的核心，我们致力于理解并满足客户的需求，提供超出预期的产品和服务体验。",
      icon: faUserCheck,
      image: customerImage,
      practices: [
        "实施客户满意度调查，持续改进产品和服务",
        "建立客户成功团队，主动帮助客户解决问题",
        "将客户需求纳入产品规划的首要考虑因素"
      ]
    }
  ];

  // 团队成员数据（模拟）
  const teamMembers = [
    {
      id: 1,
      name: "张明",
      position: "创始人 & CEO",
      description: "拥有10年云计算和人工智能领域经验，致力于带领团队打造行业领先的技术解决方案。"
    },
    {
      id: 2,
      name: "李华",
      position: "技术总监",
      description: "云计算专家，曾主导多个大型企业级项目的技术架构设计和实施，注重技术创新和团队培养。"
    },
    {
      id: 3,
      name: "王芳",
      position: "产品总监",
      description: "专注于用户体验和产品设计，擅长将复杂的技术需求转化为易用、高效的产品解决方案。"
    }
  ];

  // 价值观实践案例
  const valuePractices = [
    {
      id: 1,
      title: "技术创新实验室",
      description: "我们设立专门的创新实验室，鼓励团队成员探索前沿技术，每周举办技术分享会，推动知识共享和技术进步。",
      icon: faLightbulb
    },
    {
      id: 2,
      title: "客户反馈闭环机制",
      description: "建立了完善的客户反馈收集和处理流程，确保每个客户的意见都能得到及时响应和有效解决。",
      icon: faCheckCircle
    },
    {
      id: 3,
      title: "开放透明的企业文化",
      description: "定期举办全员大会，分享公司战略和运营情况，设立员工建议箱，鼓励所有人参与公司建设。",
      icon: faHeart
    },
    {
      id: 4,
      title: "多元化团队建设活动",
      description: "组织各类团队建设活动，包括户外拓展、技术沙龙、文体比赛等，增强团队凝聚力和协作精神。",
      icon: faUsers
    }
  ];

  return (
    <>
      {/* 页面标题区域 */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5" style={{background: '#f0f0f0'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', marginTop: '70px'}}>核心价值观</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              迷小云科技的企业文化基石，指导我们的行为准则和发展方向
            </p>
          </div>
        </div>
      </section>

      {/* 价值观概述 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">企业文化</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">四大核心价值观</h2>
            <p className="text-gray-600 text-lg">
              迷小云科技自成立以来，始终坚持以客户为中心，以创新为动力，以诚信为根本，以团队协作为基础，
              致力于为客户提供卓越的产品和服务，为员工创造发展空间，为社会创造价值。
            </p>
          </div>

          {/* 价值观卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div key={value.id} className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <FontAwesomeIcon icon={value.icon} className="text-primary" size="2xl" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 价值观实践解读 */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">实践与传承</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">价值观的实践与应用</h2>
            <p className="text-gray-600 text-lg">
              我们不仅仅将价值观写在纸上，更将其融入日常工作的每一个环节，指导我们的决策和行为
            </p>
          </div>

          {/* 每个价值观的详细解读 */}
          {coreValues.map((value, index) => (
            <div key={value.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative h-60 overflow-hidden rounded-xl shadow-lg">
                <LazyLoadImage 
                  effect="blur" 
                  src={value.image} 
                  alt={value.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-white/80">核心价值观</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <FontAwesomeIcon icon={value.icon} className="text-primary" size="2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  {value.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800">我们如何实践:</h4>
                  {value.practices.map((practice, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary mr-2" size="sm" />
                      <span>{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 团队成员对价值观的理解 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">团队声音</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">团队成员的价值观践行</h2>
            <p className="text-gray-600 text-lg">
              我们的团队成员不仅认同公司的核心价值观，更在日常工作中积极践行这些价值观
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-light rounded-xl overflow-hidden group hover-lift card-shadow p-6">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUserCheck} className="text-primary" size="3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-dark">
                  {member.name}
                </h3>
                <p className="text-primary text-center mb-6 font-medium">
                  {member.position}
                </p>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 价值观实践案例 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">价值观在行动</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-dark mb-6">价值观实践案例</h2>
            <p className="text-gray-600 text-lg">
              我们将价值观融入公司运营的方方面面，创造真实的价值和影响
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePractices.map((practice) => (
              <div key={practice.id} className="bg-light rounded-xl p-8 hover-lift">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <FontAwesomeIcon icon={practice.icon} className="text-primary" size="lg" />
                  </div>
                  {practice.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;