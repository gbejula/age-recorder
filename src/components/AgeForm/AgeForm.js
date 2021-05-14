import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AgeForm.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AgeForm = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = event => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid input (non empty input)',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    props.onAddAge(enteredName, enteredAge);
    setEnteredAge('');
    setEnteredName('');
  };

  const NameHandler = event => {
    setEnteredName(event.target.value);
  };

  const AgeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDissmiss={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label>Username</label>
          <input type='text' value={enteredName} onChange={NameHandler} />
          <label>Age (Years)</label>
          <input type='text' value={enteredAge} onChange={AgeHandler} />
          <Button type='submit' onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AgeForm;
