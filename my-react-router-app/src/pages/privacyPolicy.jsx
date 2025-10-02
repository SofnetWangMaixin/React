import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUser, faEnvelope, faLock, faClock, faFileText, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
      {/* 页面标题区域 */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5" style={{background: '#f0f0f0'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', marginTop: '70px'}}>隐私政策</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              迷小致力于保护您的隐私，以下是我们如何收集、使用和保护您的个人信息
            </p>
          </div>
        </div>
      </section>

      {/* 主要内容区 */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* 政策更新日期 */}
            <div className="bg-blue-50 border-l-4 border-primary p-4 mb-8 rounded-r">
              <p className="text-sm text-gray-700"><strong>最后更新日期：</strong>2025年9月28日</p>
              <p className="text-sm text-gray-600 mt-1">请定期查阅本隐私政策，以了解我们如何保护您的信息。您继续使用本服务即表示您接受这些变更。</p>
            </div>

            {/* 政策内容 */}
            <div className="space-y-8">
              {/* 隐私政策概述 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faInfoCircle} 
                    className="text-primary mr-3"
                  />隐私政策概述
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>新乡市迷小网络科技公司（以下简称"迷小"或"我们"）非常重视您的隐私保护，并会尽全力保护您的个人信息安全可靠。本隐私政策旨在向您说明我们如何收集、使用、存储和分享您的个人信息，以及您可以如何访问、更新、控制和保护您的个人信息。</p>
                  <p>请您在使用我们的服务前，仔细阅读并了解本隐私政策。如您不同意本隐私政策的任何内容，您应立即停止使用我们的服务。</p>
                </div>
              </section>

              {/* 我们收集的信息 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faFileText} 
                    className="text-primary mr-3"
                  />我们收集的信息
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>我们可能收集以下类型的信息：</p>
                  
                  <div className="bg-light p-4 rounded-lg">
                    <h3 className="font-bold text-dark mb-2 flex items-center">
                      <FontAwesomeIcon icon={faUser} className="text-primary mr-2" size="sm" />
                      个人身份信息
                    </h3>
                    <p className="text-gray-600">当您注册账号或使用我们的服务时，我们可能收集您提供的个人身份信息，如姓名、电子邮件地址、电话号码等。</p>
                  </div>
                  
                  <div className="bg-light p-4 rounded-lg">
                    <h3 className="font-bold text-dark mb-2 flex items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2" size="sm" />
                      联系信息
                    </h3>
                    <p className="text-gray-600">我们可能收集您的联系信息，如您提供的地址、电子邮箱和电话号码，以便与您联系或提供服务。</p>
                  </div>
                  
                  <div className="bg-light p-4 rounded-lg">
                    <h3 className="font-bold text-dark mb-2 flex items-center">
                      <FontAwesomeIcon icon={faClock} className="text-primary mr-2" size="sm" />
                      使用信息
                    </h3>
                    <p className="text-gray-600">我们可能收集您使用我们服务的相关信息，包括但不限于访问时间、访问页面、IP地址、浏览器类型、设备信息等。</p>
                  </div>
                  
                  <div className="bg-light p-4 rounded-lg">
                    <h3 className="font-bold text-dark mb-2 flex items-center">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-primary mr-2" size="sm" />
                      其他信息
                    </h3>
                    <p className="text-gray-600">您通过我们的服务向其他方提供的信息，或您在使用我们服务时上传、提交、存储、发送或接收的信息。</p>
                  </div>
                </div>
              </section>

              {/* 我们如何使用收集的信息 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faUser} 
                    className="text-primary mr-3"
                  />我们如何使用收集的信息
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>我们可能将收集的信息用于以下目的：</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>提供、维护和改进我们的服务</li>
                    <li>处理您的注册、登录和账户管理请求</li>
                    <li>回应您的咨询、请求和反馈</li>
                    <li>向您发送服务相关的通知、更新和促销信息</li>
                    <li>进行用户行为分析，以优化我们的服务和用户体验</li>
                    <li>防止欺诈、滥用和其他非法活动</li>
                    <li>遵守法律法规的要求</li>
                  </ul>
                </div>
              </section>

              {/* 信息的存储与保护 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faLock} 
                    className="text-primary mr-3"
                  />信息的存储与保护
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>我们采取各种安全措施来保护您的个人信息免受未经授权的访问、使用或披露。这些措施包括但不限于：</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>使用加密技术保护数据的保密性</li>
                    <li>使用受信赖的安全防护机制防止数据遭到恶意攻击</li>
                    <li>部署访问控制机制，确保只有授权人员才可访问个人信息</li>
                    <li>定期举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识</li>
                  </ul>
                  <p>请注意，尽管我们采取了合理可行的措施来保护您的个人信息，但互联网并非绝对安全的环境，我们无法保证通过互联网传输的任何信息的安全性。</p>
                </div>
              </section>

              {/* 信息的共享与披露 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-primary mr-3"
                  />信息的共享与披露
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>我们不会出售、出租或以其他方式向第三方共享您的个人信息，除非：</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>获得您的明确同意</li>
                    <li>遵守法律法规的要求</li>
                    <li>保护迷小、我们的用户或公众的权利、财产或安全</li>
                    <li>与我们的关联公司、服务提供商共享，这些方必须按照我们的指示处理信息并保持保密</li>
                  </ul>
                  <p>在合并、收购、资产转让或类似的业务交易中，如果涉及到个人信息转让，我们会要求新的持有您个人信息的公司或组织继续受本隐私政策的约束。</p>
                </div>
              </section>

              {/* Cookie的使用 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faFileText} 
                    className="text-primary mr-3"
                  />Cookie的使用
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>我们使用Cookie和类似技术来收集和存储您的信息，以便为您提供更好的服务。Cookie是一种小型文本文件，当您访问网站时存储在您的计算机或移动设备上。</p>
                  <p>您可以通过修改浏览器设置来拒绝Cookie，但请注意，如果您这样做，您可能无法使用我们服务的全部功能。</p>
                </div>
              </section>

              {/* 您的权利 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faCheckCircle} 
                    className="text-primary mr-3"
                  />您的权利
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>根据适用的法律法规，您可能享有以下权利：</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>访问权：您有权访问我们持有的关于您的个人信息</li>
                    <li>更正权：如果您的个人信息不准确，您有权要求我们更正</li>
                    <li>删除权：在某些情况下，您有权要求我们删除您的个人信息</li>
                    <li>限制处理权：在某些情况下，您有权限制我们对您个人信息的处理</li>
                    <li>数据可携权：在某些情况下，您有权以结构化、常用和机器可读的格式接收您的个人信息，并有权将这些数据传输给其他控制者</li>
                    <li>反对权：在某些情况下，您有权反对我们处理您的个人信息</li>
                    <li>撤回同意权：如果我们基于您的同意处理您的个人信息，您有权随时撤回您的同意</li>
                  </ul>
                  <p>如您想行使上述权利，请通过下文提供的联系方式与我们联系。</p>
                </div>
              </section>

              {/* 隐私政策的更新 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faClock} 
                    className="text-primary mr-3"
                  />隐私政策的更新
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>我们可能会不时更新本隐私政策。当我们进行重大更改时，我们将在我们的网站上公布更新后的隐私政策，并在必要时通过适当方式通知您。</p>
                  <p>我们鼓励您定期查阅本隐私政策，以了解我们如何保护您的信息。您继续使用我们的服务将被视为接受更新后的隐私政策。</p>
                </div>
              </section>

              {/* 确认按钮区 */}
              <section className="bg-neutral py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl mx-auto text-center">
                    <p className="text-gray-700 mb-6">继续使用迷小服务，即表示您已阅读并同意上述隐私政策的所有条款。</p>
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

export default PrivacyPolicy;