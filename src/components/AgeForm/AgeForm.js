import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AgeForm.module.css';

const AgeForm = props => {
  const onaddGoalHandler = event => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form>
        <label>Username</label>
        <input type='text' />
        <label>Age (Years)</label>
        <input type='text' />
        <Button type='submit' onClick={onaddGoalHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AgeForm;
