import axios from "axios";
import React from "react";
import { FC, useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import { IUser } from "../types/types";

type UseritemPageParams = {
  id: string;
}

const UseritemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UseritemPageParams>()
    const navigate = useNavigate(); 
  
    useEffect(() => {
      fetchUser()
    }, [])
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(response.data)
      } catch (e) {
        alert(e);
      }
    }
    return (
        <div>
          <button onClick={() => navigate("/users")}>Назад</button>
          <h1>Cтраница пользователя {user?.name}</h1>
          <div>{user?.email}</div>
          <div>{user?.address.city} {user?.address.street} {user?.address.zipCode}</div>
        </div>
    )
}

export default UseritemPage;