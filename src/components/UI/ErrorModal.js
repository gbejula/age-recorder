import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onDissmiss} />;
};

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onDissmiss}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onDissmiss={props.onDissmiss} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onDissmiss={props.onDissmiss}
        />,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
