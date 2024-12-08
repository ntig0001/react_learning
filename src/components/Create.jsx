import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email}));
    navigate('/');

  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <h2>Add New User</h2>
          <div>
            <label htmlFor='name'>Name: </label>
            <input type="text" name='name'
                    className='form-control' 
                    placeholder='Enter name...'
                    onChange={e => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type="text" name='name' 
                    className='form-control'
                    placeholder='Enter Email...'
                    onChange={e => setEmail(e.target.value)}/>
          </div>
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create;