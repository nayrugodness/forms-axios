import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginForm } from './Components/Pages/LoginForm/LoginForm';
import { RegisterForm } from './Components/Pages/RegisterForm/RegisterForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>}></Route>          
          <Route path='/register' element={<RegisterForm />}></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
