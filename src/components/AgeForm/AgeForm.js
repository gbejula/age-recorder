import React from 'react';

import './AgeForm.css';

const onaddGoalHandler = event => {
  event.preventDefault();
};

const AgeForm = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' />
        <label>Age (Years)</label>
        <input type='text' />
      </div>
      <div>
        <button type='submit' onClick={onaddGoalHandler}>
          Add User
        </button>
      </div>
    </form>
  );
};

export default AgeForm;
