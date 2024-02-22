import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Header from './components/Header';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

const App = () => {
  const [isHeaderVisible, setHeaderVisible] = React.useState(false);

  React.useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setHeaderVisible(false);
      }else if (scrollTop < 0.1 * window.innerHeight) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='box-border'>
      {isHeaderVisible && <Header  isHeaderVisible={isHeaderVisible}/>}
      <section>
        <Page1 isHeaderVisible={isHeaderVisible} />
      </section>
      <section>
        <Page2 />
      </section>
      <section>
        <Page3 />
      </section>
      <section>
        <Page4 />
      </section>
      <section>
        <Page5 />
      </section>
    </div>
  )
}

export default App;