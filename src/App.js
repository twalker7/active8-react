
import './App.css';
import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [currentPage, setCurrentPage] = useState('Homepage');

  function changePage(){
    switch(currentPage){
      case 'Homepage':
        return <About/>
      case 'Projects':
        return <Projects/>
      case 'Contact':
        return <Contact/>

        default:
          return 
    }
  }
  return (
    <div className="App">
      <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage}>
     
      </Header>

      <main className="main-back">
        {changePage()}
      </main>

      <Footer>
      </Footer>
    </div>
  );
}

export default App;
