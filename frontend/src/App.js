
import React from 'react';
import Button from 'react-bootstrap/Button';
import hlogo from './HackChan_Logo.png'; // gives image path
import './App.css';
//import Content from './Content/Content';
import ModalButton from './Content/ModalButton'
import Header from './Header/Header';
import Footer from './Footer/Footer';


function App() {
  return (
  <div className="App">
    <div id="wrap">
      
    <Header></Header>
     <ModalButton></ModalButton>
     </div>
     <Footer></Footer>

    </div>


  );

}

export default App;