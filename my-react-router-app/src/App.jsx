import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 导航栏 - 在所有页面显示 */}
      <Navbar />
      
      {/* 内容区域 - 根据路由动态变化 */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* 匹配所有未定义的路由 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* 页脚 - 在所有页面显示 */}
      <Footer />
    </div>
  );
}

export default App;
