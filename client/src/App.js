import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import GameStatus from './views/GameStatus';
import NewPlayer from './views/NewPlayer';

function App() {
  return (
    <>
    <div className='navBar'>
    <Link to={'/players/list'} >Manage Players</Link>
    |
    <Link to={'/status/game/1'} >Manage Player Status</Link>
    </div>
    <Routes>
      <Route path='/players/list' element={<Dashboard/>} />
      <Route path='/players/addplayer' element={<NewPlayer/>} />
      <Route path='/status/game/:id' element={<GameStatus/>} />
    </Routes>
    </>
  );
}

export default App;
