import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserPage from './components/UserPage';
import Todospage from './components/Todospage';
import { Link } from 'react-router-dom';
import UseritemPage from './components/UseritemPage';
import TodoitemPage from './components/TodoitemPage';

const App = () => {

  return (
      <BrowserRouter>
        <div>
          <div>
            <Link to='/users'>Пользователи</Link>
            <Link to='/todos'>Список дел</Link>
          </div>
          <Routes>
            <Route path='/users' element={<UserPage/>} />
            <Route path='/todos' element={<Todospage/>} />
            <Route path='/users/:id' element={<UseritemPage/>} />
            <Route path='/todos/:id' element={<TodoitemPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
};


export default App;
