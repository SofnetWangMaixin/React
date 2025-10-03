import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  function scroll() {
    const navbar = document.getElementById('navbar');
    const nav_animation_logo = document.getElementById('nav-animation-logo');
    const nav_animation_text = document.getElementById('nav-animation-text');
    const nav_animation_logo_scroll = document.getElementById('nav-animation-logo-scroll');
    let lastScrollTop = 0;  // 页面高度初始值
    const scrollThreshold = 50; // 滚动阈值

    /**
     * 获取滚动条的距离
     * @returns {Object}
     */
    window.addEventListener('scroll', () => { // 事件监听函数
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';


        // 处理元素切换
        if (scrollDirection === 'down' && scrollTop > scrollThreshold) {
          // 向下滚动超过阈值
          nav_animation_logo.classList.add('hiddens');
          nav_animation_text.classList.add('hiddens');
          // nav_animation_button.classList.add('hiddens');

          nav_animation_logo_scroll.classList.add('visible');

            
        } else if (scrollDirection === 'up' && scrollTop < scrollThreshold) {
          // 向上滚动且接近顶部
          nav_animation_logo.classList.remove('hiddens');
          nav_animation_text.classList.remove('hiddens');
          // nav_animation_button.classList.remove('hiddens');

          nav_animation_logo_scroll.classList.remove('visible');

            
        } else if (scrollDirection === 'up' && scrollTop > scrollThreshold) {
          // 向上滚动但不在顶部
          nav_animation_logo.classList.remove('hiddens');
          nav_animation_text.classList.remove('hiddens');
          // nav_animation_button.classList.remove('hiddens');

          nav_animation_logo_scroll.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;

        if (window.scrollY > 50) { // 这种方式在ie9一下不适用
            //导航栏高度响应
            navbar.classList.add('shadow-md', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            //导航栏高度响应
            navbar.classList.remove('shadow-md', 'py-2');
            navbar.classList.add('py-4');
        }
    });
  }

  // ref 关联到目标元素
  const targetRef = useRef(null);

  // useEffect 钩子会在组件渲染完成（DOM 已更新）后执行
  useEffect(() => {
    if (targetRef.current) {
      scroll();
    }
  }, []); // 空依赖数组：仅在组件首次渲染完成后执行



  return (
        <header id="navbar" className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6 lg:px-10">
            <div className="flex items-center justify-between h-20">
              <a href="" id="nav-animation-logo" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img src="http://47.121.199.238/sofnet/logo/favicon.ico" alt="Sofnet" />
                </div>  
                <span className="text-xl font-bold text-dark">Sofnet Inc.</span>
              </a>


              <nav id="nav-animation-text" className="hidden md:flex items-center space-x-8 nav-animation">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  首页
                </NavLink>
                <NavLink 
                  to="/product" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  业务
                </NavLink>
                <NavLink 
                  to="/service" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  服务
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  关于我们
                </NavLink>
              </nav>

              <div id="nav-animation-logo-scroll" className="">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img src="http://47.121.199.238/sofnet/logo/favicon.ico" alt="Sofnet" ref={targetRef}/>
                </div>
              </div>

            </div>
          </div>
        </header>
  );
};

export default Navbar;
