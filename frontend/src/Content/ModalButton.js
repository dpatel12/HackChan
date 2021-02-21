import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Content.css';
function ModalButton() {
    let arrayOfThreads = [
        {
          "title": "Best bedtime stories thread",
          "count": 10,
          "createdAt": "123456"
        },
        {
          "title": "C# is superior language?",
          "count": 5,
          "createdAt": "987654321"
        }
    ];
    
    let handleClick = e =>  {
        console.log(e);
    };

    let buttons = arrayOfThreads.map((x) => {
        return(
        <Button variant="light" size="lg" active block id={x.createdAt} onClick={() => handleClick(x.createdAt)}>
            Entry: {x.title}
        </Button>);
        }
    );

        
    return (
        <div id="mainBodyDiv">
            {buttons}
            <button>Hello</button>
            <h1>Hi</h1>
        </div>
    );
};

export default ModalButton;