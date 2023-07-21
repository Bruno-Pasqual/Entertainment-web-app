import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importando componentes
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Entertainment-web-app" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
