import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import sofnet from '../assets/images/sofnet.png';

const NotFound = () => {
  return (
    <main>
      {/* 404错误页面 */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-light to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 z-10">
              <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-tight text-dark mb-6">
                404<br />
                <span className="text-primary">页面不存在</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                抱歉，您访问的页面不存在或已被移动。可能是输入的网址有误，或者该页面已被删除。
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center bg-white border border-gray-300 text-dark hover:bg-gray-50 px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                返回首页
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
