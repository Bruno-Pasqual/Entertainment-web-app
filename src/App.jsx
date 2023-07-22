import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importando componentes
import Login from './Components/login-SignUp/Login/Login';
import SignUp from './Components/login-SignUp/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Entertainment-web-app" element={<Login />} />
          <Route path="/Entertainment-web-app/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
