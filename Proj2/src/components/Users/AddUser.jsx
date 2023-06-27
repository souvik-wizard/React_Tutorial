import { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';


// Using State variables-----------------

// const AddUser = (props) => {
//   const [username, setUsername] = useState('');
//   const [age, setAge] = useState('');
//   const [error ,setError]=useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();

//     if (username.trim().length === 0 || age.trim().length === 0) {
//       setError({
//         title:'Invalid input',
//         message:`username or age can't be empty`
//       })
//       return;
//     }

//     if (+age < 1) {
//       setError({
//         title:'Invalid age',
//         message:`age can't be less than 1`
//       })
//       return;
//     }
//     // console.log(username , age);
//     props.onAddUser(username, age)
//     setUsername('');
//     setAge('');
//   };
//   const usernameChangeHandler = (event) => {
//     setUsername(event.target.value);
//   }
//   const ageChangeHandler = (event) => {
//     setAge(event.target.value);
//   }

//   const errorHandler = () => {
//     setError(null);
//   }

//   return (
//     <div>
//       {error && <ErrorModal onPress={errorHandler} title={error.title} message={error.message}/>}
//       <Card className={classes.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input id="username" value={username} onChange={usernameChangeHandler} type="text" />
//           <label htmlFor="age">Age (Years)</label>
//           <input id="age" value={age} onChange={ageChangeHandler} type="number" />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </div>
//   );
// };


// Using Refs(directly inside form tag) / Can be use directly inside input tags----------------------------------

const AddUser = (props) => {
  const inputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(inputRef.current);
    const userDetails = {};
    for (let key of formData.keys()) {
      userDetails[key] = formData.get(key);
    }
    
    const username = userDetails.userid;
    const age = userDetails.usersage;


    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: `username or age can't be empty`
      })
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: `age can't be less than 1`
      })
      return;
    }
    props.onAddUser(username, age)
    inputRef.current.reset();

  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal onPress={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} ref={inputRef}>
          <label htmlFor="username">Username</label>
          <input id="username"  type="text" name='userid' />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" name='usersage' />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
