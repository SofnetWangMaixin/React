import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faUserShield, faClock, faKey, faExclamationTriangle, faGlobe, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserAgreement = () => {
  return (
    <>
      {/* 页面标题区域 */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5" style={{background: '#f0f0f0'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', marginTop: '70px'}}>用户协议</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              欢迎使用迷小公司提供的服务，请您仔细阅读以下用户协议
            </p>
          </div>
        </div>
      </section>

      {/* 主要内容区 */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* 协议更新日期 */}
            <div className="bg-blue-50 border-l-4 border-primary p-4 mb-8 rounded-r">
              <p className="text-sm text-gray-700"><strong>最后更新日期：</strong>2025年9月28日</p>
              <p className="text-sm text-gray-600 mt-1">请定期查阅本协议，以了解任何变更。您继续使用本服务即表示您接受这些变更。</p>
            </div>

            {/* 协议内容 */}
            <div className="space-y-8">
              {/* 协议总则 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faFileContract} 
                    className="text-primary mr-3"
                  />协议总则
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>新乡市迷小网络科技公司（以下简称"迷小"或"我们"）提供的所有服务（以下简称"本服务"）受本用户协议（以下简称"本协议"）的约束。</p>
                  <p>本协议描述了您使用迷小提供的服务时我们双方的权利和义务。请您务必审慎阅读、充分理解本协议各条款内容，特别是免除或者限制责任的条款、争议解决和法律适用条款。</p>
                </div>
              </section>

              {/* 用户注册与账号管理 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faUserShield} 
                    className="text-primary mr-3"
                  />用户注册与账号管理
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>您在使用本服务前，必须注册一个迷小账号。注册时，您应提供真实、准确、完整的个人资料，并在资料变更时及时更新。</p>
                  <p>您应妥善保管账号及密码，并对使用您账号进行的所有操作负全部责任。如发现任何未经授权使用您账号的情况，应立即通知迷小。</p>
                  <p>您理解并同意，如您违反本协议或相关法律法规，迷小有权暂停或终止向您提供服务，或删除您的账号。</p>
                </div>
              </section>

              {/* 服务内容 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faGlobe} 
                    className="text-primary mr-3"
                  />服务内容
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>迷小向您提供的服务包括但不限于：云枢链算服务、豫光伏储能服务信息、迷小救援信息发布等。</p>
                  <p>迷小有权在必要时变更、中断或终止部分或全部服务，且不承担因此给您造成的任何损失。</p>
                  <p>迷小保留在任何时候自行决定对服务及其相关功能、应用软件变更、升级、修改、转移的权利。</p>
                </div>
              </section>

              {/* 用户行为规范 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faExclamationTriangle} 
                    className="text-primary mr-3"
                  />用户行为规范
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>您在使用本服务时必须遵守中华人民共和国法律法规及相关国际公约，不得利用本服务从事任何违法活动。</p>
                  <p>您不得利用本服务制作、复制、发布、传播含有下列内容的信息：</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>反对宪法所确定的基本原则的</li>
                    <li>危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的</li>
                    <li>损害国家荣誉和利益的</li>
                    <li>煽动民族仇恨、民族歧视，破坏民族团结的</li>
                    <li>破坏国家宗教政策，宣扬邪教和封建迷信的</li>
                    <li>散布谣言，扰乱社会秩序，破坏社会稳定的</li>
                    <li>散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的</li>
                    <li>侮辱或者诽谤他人，侵害他人合法权益的</li>
                    <li>含有法律、行政法规禁止的其他内容的</li>
                  </ul>
                  <p>您不得利用本服务进行任何可能对互联网或移动网络正常运转造成不利影响的行为。</p>
                </div>
              </section>

              {/* 知识产权 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faKey} 
                    className="text-primary mr-3"
                  />知识产权
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>本服务中包含的所有内容（包括但不限于文字、图片、音频、视频、软件、程序、数据及其他信息）的知识产权归迷小或相关权利人所有。</p>
                  <p>未经迷小或相关权利人事先书面许可，您不得以任何方式使用、复制、修改、传播、转载、展示、发布、销售上述内容。</p>
                  <p>迷小的logo、"迷小"等文字、图形及其组合，以及本服务的其他标识、徽记、产品和服务名称均为迷小的商标，未经迷小书面许可，任何人不得使用。</p>
                </div>
              </section>

              {/* 隐私保护 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faUserShield} 
                    className="text-primary mr-3"
                  />隐私保护
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>迷小非常重视您的隐私保护，我们将按照本协议及《隐私政策》的规定收集、使用、存储和分享您的个人信息。</p>
                  <p>您同意迷小可以在提供服务的过程中，收集和使用您的相关信息。</p>
                  <p>如您想了解更详细的隐私保护措施，请参阅迷小的《隐私政策》。</p>
                </div>
              </section>

              {/* 免责声明 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faExclamationTriangle} 
                    className="text-primary mr-3"
                  />免责声明
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>您理解并同意，本服务是在"现状"和"可得到"的基础上提供的，迷小不保证服务的及时性、安全性、准确性、完整性。</p>
                  <p>对于因不可抗力或迷小无法控制的原因导致的服务中断或数据丢失，迷小不承担任何责任。</p>
                  <p>在法律允许的最大范围内，迷小不就因使用或不能使用本服务所引起的任何直接的、间接的、附带的、特殊的或后果性的损失承担责任。</p>
                </div>
              </section>

              {/* 协议的修改与终止 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faClock} 
                    className="text-primary mr-3"
                  />协议的修改与终止
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>迷小有权在必要时修改本协议条款，修改后的协议将在迷小平台上公布，您继续使用本服务将被视为接受修改后的协议。</p>
                  <p>如您违反本协议，迷小有权随时终止向您提供服务，并不退还您已支付的任何费用（如有）。</p>
                  <p>本协议的终止不影响您在协议终止前应履行的义务和应承担的责任。</p>
                </div>
              </section>

              {/* 法律适用与争议解决 */}
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <FontAwesomeIcon 
                    icon={faBalanceScale} 
                    className="text-primary mr-3"
                  />法律适用与争议解决
                </h2>
                <div className="pl-8 border-l-2 border-gray-200 space-y-4">
                  <p>本协议的订立、执行、解释及争议的解决均适用中华人民共和国法律。</p>
                  <p>如就本协议发生任何争议，双方应友好协商解决；协商不成的，任何一方均有权向迷小所在地有管辖权的人民法院提起诉讼。</p>
                </div>
              </section>

              {/* 确认按钮区 */}
              <section className="bg-neutral py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl mx-auto text-center">
                    <p className="text-gray-700 mb-6">继续使用迷小服务，即表示您已阅读并同意上述用户协议的所有条款。</p>
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

export default UserAgreement;