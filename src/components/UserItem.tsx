import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
}

const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 20, border: '1px solid green'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} по улице {user.address.street}
        </div>
    )
}

export default UserItem;

