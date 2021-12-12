import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Course from './components/Course';
import About from './components/About';
import List from './components/List';
import Teacher from './components/Teacher';
import Modal from './components/Modal';

function App() {

  const [statePage, setPage] = useState('index');
  const [modal, setModal] = useState(false)

  function openPage (newPage) {
    setPage(newPage);
  }

  function observeModal (newStateModal) {
    setModal(newStateModal);
  }

  function showModal () {
    if (modal) {
      return <Modal props={observeModal}/>
    }
  }

  return (
    <div className="App wrapper">
      <Header 
      updatePage={openPage}/>

      { (() => {
          if (statePage === 'index') {
            return <Index props={observeModal}/>
          } else if (statePage === 'courses') {
            return <Course />
          } else if (statePage === 'teachers') {
            return <Teacher />
          } else if (statePage === 'about') {
            return <About />
          }
        })()
      }

      <Footer />

      {showModal()}
    </div>
  );
}

export default App;
