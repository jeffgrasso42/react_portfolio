import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {
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
    <div>
      <Header 
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
        navDisplay={navDisplay} 
        setNavDisplay={setNavDisplay} />

      {renderPage()}

      <Footer />
    </div>
  )
}

export default App
