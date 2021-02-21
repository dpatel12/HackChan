import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <div>
            <div className="content">
                <Card className="text-center">
                    <Card.Header ><h2>Latest Topics</h2></Card.Header>
                    <Card.Body>
                        <Card.Title><Button variant="secondary"><h2>odd discoveries</h2></Button></Card.Title>
                        <Card.Text>
                             Latest comments go here.
                         </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title><Button variant="secondary"><h2>Site rules:</h2></Button></Card.Title>
                        <Card.Text>
                            Latest comments go here.
                         </Card.Text>
                    </Card.Body>
                   
                </Card>
            </div>
            
        </div>
    
    );
}

export default Content;