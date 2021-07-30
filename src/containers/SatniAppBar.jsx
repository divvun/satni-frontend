import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import MetaLanguageSelector from './MetaLanguageSelector';
import HelpDialog from './HelpDialog';

const SatniAppBar = ({ setSearchExpression }) => {
  const [setOpenHelpDialog] = useState(false);
  const handleClickHelpDialog = () => {
    setOpenHelpDialog(true);
  };

  return (
    <Navbar bg="light">
      <Container>
        <Nav.Item>
          <Navbar.Brand href="#home" className="nds_title">
            Neahttadigisánit
          </Navbar.Brand>
        </Nav.Item>
        <Nav>
          <Nav.Item>
            <Nav.Link
              href="#home"
              to="/"
              onClick={() => setSearchExpression('')}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="outline-success"
              aria-label="Settings"
              href="#click-in-text"
            >
              Click-in-text
            </Button>
          </Nav.Item>
          &nbsp;
          <Nav.Item>
            <Button
              variant="outline-success"
              aria-label="Settings"
              href="#about"
              onClick={handleClickHelpDialog}
            >
              About
            </Button>
          </Nav.Item>
          &nbsp;
        </Nav>
        <Nav className="ms-auto">
          <Nav.Item>
            <MetaLanguageSelector />
          </Nav.Item>
          &nbsp;
          <Nav.Item>
            <HelpDialog />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

SatniAppBar.propTypes = {
  setSearchExpression: PropTypes.func.isRequired,
};

export default SatniAppBar;
