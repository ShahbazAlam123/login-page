import './App.css';
import LoginPage from './LoginPage';
import LoggedIn from './LoggedIn';
import Changepassword from './Changepassword';

import { Route,Routes } from 'react-router-dom'
import NewAccount from './NewAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/loggedin' element={<LoggedIn/>}/>
        <Route path='/newaccount' element={<NewAccount/>}/>
        <Route path='/changepassword' element={<Changepassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
