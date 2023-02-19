import { useState, Fragment } from 'react'
import Media from 'react-media'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import backgroundImage from './assets/img/kandinsky_background_right.jpg'
import smallBackgroundImage from './assets/img/kandinsky_background.jpg'


function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

  const smallBackgroundStyle = {
    backgroundImage: `url(${smallBackgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

  const [backgroundSize, setBackgroundSize] = useState('small')
  const [currentPage, setCurrentPage] = useState('Home');
  const [navDisplay,setNavDisplay] = useState(false)

  const renderPage = () => {
    if (currentPage === 'Home') return <Home />;
    else if (currentPage === 'About') return <About />;
    else if (currentPage === 'Work') return <Work />;
    else return <Contact />;
  }

  const handlePageChange = (page) => {
    setNavDisplay(false);
    setCurrentPage(page);
  };

  return (
    <>
      <Media queries={{
        small: "(max-width: 768px)"
      }}>
        {matches => (
          !matches.small ? setBackgroundSize('large') : setBackgroundSize('small')
        )}
      </Media>
      <div id="my-bg" style={backgroundSize === 'small' ? smallBackgroundStyle : backgroundStyle}>
        <Header 
          currentPage={currentPage} 
          handlePageChange={handlePageChange} 
          navDisplay={navDisplay} 
          setNavDisplay={setNavDisplay} />

        {renderPage()}

        <Footer />
      </div>
    </>
  )
}

export default App
