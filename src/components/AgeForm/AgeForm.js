import React from 'react';

import './AgeForm.css';

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
        <button>Add User</button>
      </div>
    </form>
  );
};

export default AgeForm;
