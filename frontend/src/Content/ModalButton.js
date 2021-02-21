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
    const [threadTime, setThreadTime] = useState(false);
    const [threadNumComments, setThreadNumComments] = useState(false);
    
    let handleClick = (time, threadname, threadcommentcount) =>  {
        console.log(time);
        setLgShow(true)
        setModalTitle(threadname);
        setThreadTime(time);
        setModalBody("Temp modal body");
        setThreadNumComments(threadcommentcount);
    };

    let buttons = arrayOfThreads.map((x) => {
        return(
        <Button variant="light" size="lg" active block id={x.createdAt} onClick={() => handleClick(x.createdAt, x.title, x.count)}>
            Thread: {x.title}
        </Button>);
        }
    );

        
    return (
        <div id="mainBodyDiv">
            {buttons}

            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Thread ({threadTime}): {modalTitle} [{threadNumComments} replies]
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>

            </Modal>
        </div>
    );
};

export default ModalButton;