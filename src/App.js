import React, { useState } from 'react';
import AgeForm from './components/AgeForm/AgeForm';
import UsersList from './components/AgeForm/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUserList => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AgeForm onAddAge={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
