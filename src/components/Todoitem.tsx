import React, {FC} from 'react';
import { ITodo } from '../types/types'

interface TodoitemProps {
    todo: ITodo;
}

const Todoitem: FC<TodoitemProps> = ({todo}) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    )
}

export default Todoitem;

