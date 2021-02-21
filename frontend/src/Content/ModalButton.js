import React, {  useState  } from 'react';

import { Form, Modal, Button } from 'react-bootstrap';
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
    const [submitShow, setSubmitShow] = useState(false);
    const [submitBody, setSubmitBody] = useState(false);
    const [bodyInput, setBodyInput] = useState("");


    const [modalTitle, setModalTitle] = useState(false);
    const [modalBody, setModalBody] = useState(false);
    const [threadTime, setThreadTime] = useState(false);
    const [threadNumComments, setThreadNumComments] = useState(false);
    
    let handleClick = (time, threadname, threadcommentcount) =>  {
        console.log(time);
        setLgShow(true);
        setModalTitle(threadname);
        setThreadTime(time);
        setModalBody("Temp modal body");
        setThreadNumComments(threadcommentcount);
    };

    let openCommentModal = () => {
        setSubmitShow(true);
        setSubmitBody(

            <Form.Group>
                <Form.Control size="lg" type="text" as="textarea" rows="5" placeholder="Enter body here" onInput={e => setBodyInput(e.target.value)}></Form.Control>
            </Form.Group>

        );
    }

    let buttons = arrayOfThreads.map((x) => {
        return(
        <Button variant="light" size="lg" active block id={x.createdAt} onClick={() => handleClick(x.createdAt, x.title, x.count)}>
            Thread: {x.title}
        </Button>);
        }
    );

    let handleSubmitReply = () => {
        console.log("submitted data:" + bodyInput);
        setSubmitShow(false);
    }

        
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
                <Modal.Body>
                    <Button variant="light" size="lg" active block onClick={() => openCommentModal()}>
                        Write a comment
                    </Button>
                    
                    {modalBody}
                    
                    
                    
                    
                    </Modal.Body>
            </Modal>
            <Modal
                size="xl"
                show={submitShow}
                onHide={() => setSubmitShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    ID of current thread: {threadTime}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Body of new thread: {submitBody}
                
                    
                    </Modal.Body>
                    <Modal.Footer>
                <Button variant="primary" onClick={() => handleSubmitReply()}>
                    Submit
                </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
};

export default ModalButton;