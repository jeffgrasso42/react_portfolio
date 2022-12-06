import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') return <Home />;
    else if (currentPage === 'About') return <About />;
    else if (currentPage === 'Work') return <Work />;
    else return <Contact />;
  }

  const handlePageChange = (page) => setCurrentPage(page);
  console.log(currentPage)

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {/* {renderPage} */}
    </div>
  )
}

export default App
