import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';


const Update = () => {

    const {id} = useParams();
    const users = useSelector(state => state.users);
    const existingUser = users.filter( user => user.id == id);
    const {name, email} = existingUser[0]; // because the filter method returns only one user
    const [nameToUpdate, setName] = useState (name);
    const [emailToUpdate, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch (updateUser ({
            id: id,
            name: nameToUpdate,
            email: emailToUpdate
        }))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h2>Update User</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" 
                            className='form-control' 
                            placeholder='Enter Name'
                            value={nameToUpdate}
                            onChange={ e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' 
                            className='form-control'
                            placeholder='Enter Email'
                            value={emailToUpdate}
                            onChange={e => setEmail(e.target.value)}/>
                </div> <br/>
                <button className='btn btn-info'>Update</button>
            </form>
        </div>

    </div>
  )
}

export default Update