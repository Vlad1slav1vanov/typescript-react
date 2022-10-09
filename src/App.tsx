import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from './components/Card';
import UserList from './components/userList';
import { ITodo, IUser } from './types/types';
import axios from "axios";
import List from './components/List';
import UserItem from './components/UserItem';
import Todoitem from './components/Todoitem';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card variant={CardVariant.outlined} width='200px' height='200px'>
        <button>Click</button>
      </Card>
      <List 
      items={users} 
      renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>} 
      />
      <List 
      items={todos} 
      renderItem={(todo: ITodo) => <Todoitem key={todo.id} todo={todo}/>} 
      />
    </div>
  );
};


export default App;
