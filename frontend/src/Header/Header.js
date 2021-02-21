import React, {  useState  } from 'react';
import hlogo from './logov2.png'; // gives image path
import { Modal, Navbar, Nav, Button} from 'react-bootstrap';
import './Header.css';

function Header () {
    const [lgShow, setLgShow] = useState(false);
    const [modalTitle, setModalTitle] = useState(false);
    const [modalBody, setModalBody] = useState(false);
    let handleClickHeader = () =>  {
        console.log("New topic clicked");
        setLgShow(true);
        setModalTitle("new title");
        setModalBody("new body");

    };

    let handleSubmitNew = () => {
        console.log("submitted data");
        setLgShow(false)
    }

    return (
        <div>
            <div className="header">
                <Navbar bg="primary" expand="lg">
                    <div className="container">
                        <Navbar.Brand href=""><img src={hlogo} alt="Logo Image" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="" onClick={() => handleClickHeader()}><h1>New Topic</h1></Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>

            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    New Thread: {modalTitle}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={() => handleSubmitNew()}>
                    Submit
                </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}


export default Header;