import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import Todoitem from './Todoitem';

const Todospage:FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos()
      }, [])

    async function fetchTodos() {
        try {
          const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
          setTodos(response.data)
        } catch (e) {
          alert(e);
        }
      }

    return (
        <List 
        items={todos} 
        renderItem={(todo: ITodo) => <Todoitem key={todo.id} todo={todo}/>} 
        />
    );
}

export default Todospage;

