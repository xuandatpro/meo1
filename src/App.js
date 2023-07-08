import './App.css';
import Bai11 from './Bai11';
import Co from './Co';
import Bai2 from './Bai2';
import Bai3 from './Bai3';
import Bai4 from './Bai4';
import Bai5 from './Bai5';
import Bai6 from './Bai6';
import {Route,Routes,Link} from 'react-router-dom'
import Hom2 from './pages/Hom2';
import Hom3 from './pages/Hom3';
import Home1 from './pages/Home1';
import { TodoList } from './features/todo/TodoList';
function App() {
  return (
    <div className="App">
      <TodoList/>
      <Bai11/>
      <Bai6/>
      <Bai5/>
      <Bai4/>
      <Bai3/>
      <Co/>
      <Bai2/>
      <ul>
        <li><Link to="/">menu</Link></li>
        <li><Link to="/anh">anh</Link></li>
        <li><Link to="/phap">phap</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Hom2/>}/>
        <Route path='/anh' element={<Hom3/>}/>
        <Route path='/phap' element={<Home1/>}/>
      </Routes>
    </div>
  );
}

export default App;
