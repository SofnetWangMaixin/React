import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Services from './pages/Services';
import Contact from './pages/contact';
import JoinUs from './pages/joinus';
import NotFound from './pages/NotFound';
import LegalNotice from './pages/legalNotice';
import UserAgreement from './pages/userAgreement';
import PrivacyPolicy from './pages/privacyPolicy';
import Product from './pages/product';
import Service from './pages/service';
import Values from './pages/values';

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
          <Route path="/legalnotice" element={<LegalNotice />} />
          <Route path="/useragreement" element={<UserAgreement />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/values" element={<Values />} />
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
