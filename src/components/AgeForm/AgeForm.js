import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AgeForm.module.css';
import ErrorModal from '../UI/ErrorModal';

const AgeForm = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
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

  return (
    <div>
      <ErrorModal title='An error occured!' message='Something went wrong!' />
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
    </div>
  );
};

export default AgeForm;
