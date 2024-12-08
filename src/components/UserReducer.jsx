import { createSlice } from "@reduxjs/toolkit";
import {userList} from './Data';

const userSlice = createSlice ({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload; // we are extracting those from action payload
            const userToUpdate = state.find(user => user.id == id);
            if (userToUpdate) {
                userToUpdate.name = name; // the name of the user to update shall come from the retrieved payload
                userToUpdate.email = email;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const userToDelete = state.find(user => user.id == id);
            if (userToDelete) {
                return state.filter(f => f.id !== id) // return everything whose id is not the id from payload
            }
        }
    }

});

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;