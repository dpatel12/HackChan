import { Component } from 'react';
import Topics from './components/Topics';
import logo from './logo.png';
import './App.css';


class App extends Component{
  state={
    topics: [
      {
        id:1, 
        title:"Minecraft World!! ",
        reply:10
      },
      {
        id:2, 
        title:"Work-out tips",
        reply: 5
      },
      {
        id:3, 
        title:"Home-cleaning discussion",
        reply: 3
      },
      {
        id:4, 
        title:"COVID-19 Updates",
        reply: 2
      }
    ]
  }

  render(){
    console.log(this.state.topics)
    return (
      <div className="App">
        <h1 style={{color: "#b38aff"}}>Welcome to HackChan</h1>
        
          <Topics topics={this.state.topics}/>
        </div>
    );
  }
}

export default App;
