import React, {useContext} from 'react';
import { AuthContext } from '../AuthContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Profile = () => {
    const {logOut} = useContext(AuthContext);
    return (
        <div className='profile'>
            Вы вошли в профиль
            <Button onClick={()=>{logOut()}} variant='outlined'>LogOut</Button>
        </div>
    );
};

export default Profile;