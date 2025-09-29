import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-transition text-center">
      <h1 className="text-5xl font-bold mb-6 text-red-500">404</h1>
      <p className="text-xl mb-8">抱歉，您访问的页面不存在</p>
      <Link 
        to="/" 
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
