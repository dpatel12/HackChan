
import React from 'react';
import Button from 'react-bootstrap/Button';
import hlogo from './HackChan_Logo.png'; // gives image path
import './App.css';
//import Content from './Content/Content';
import ModalButton from './Content/ModalButton'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Request from './components/requests/fetch';

function App() {
  return (
  <div className="App">
    <Header></Header>
     <ModalButton></ModalButton>
     <Footer></Footer>
      <button onClick={() => {
        Request.getCommentsForThread({
            thread_time: "2021-02-21T14_48_43.000Z"
        })
        .then(r => console.log(r))
        .catch(e => console.error(e));

      }}>hi</button>
    </div>


  );

}

export default App;
