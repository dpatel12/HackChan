import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Content.css';

var arrayOfThreads =
[
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

function handleClick(input) {
    alert(input);
}

let buttons = arrayOfThreads.map((x) => {
    return(
    <Button variant="light" size="lg" active block id={x.createdAt} onclick={alert(x.createdAt)}>
        Entry: {x.title}
    </Button>);
    }
);
/*
let buttons = []

for (var i in arrayOfThreads) {
    
    buttons.push(
        <Button variant="light" size="lg" active block id={i.createdAt}>
            Entry: {i.title}
        </Button>
    );
}*/

const Content = () => {
    return (
        <div id="mainBodyDiv">
            {buttons}

        </div>
    
    );
}

export default Content;