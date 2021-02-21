import React, {  useState  } from 'react';

import { Modal, Button } from 'react-bootstrap';
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
    

    const [lgShow, setLgShow] = useState(false);
    const [modalTitle, setModalTitle] = useState(false);
    const [modalBody, setModalBody] = useState(false);
    
    let handleClick = (e, f) =>  {
        console.log(e);
        setLgShow(true)
        setModalTitle(f);
        setModalBody(e);
    };

    let buttons = arrayOfThreads.map((x) => {
        return(
        <Button variant="light" size="lg" active block id={x.createdAt} onClick={() => handleClick(x.createdAt, x.title)}>
            Entry: {x.title}
        </Button>);
        }
    );

        
    return (
        <div id="mainBodyDiv">
            {buttons}

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {modalTitle}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>

            </Modal>
        </div>
    );
};

export default ModalButton;