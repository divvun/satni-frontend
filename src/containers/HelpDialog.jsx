import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { SearchWelcome, DictWelcome } from './Welcome';

const HelpDialog = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        ?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="help_header">
          <Modal.Title>Help</Modal.Title>
          <Button className="help_title" variant="light" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <SearchWelcome />
          <DictWelcome />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default HelpDialog;
