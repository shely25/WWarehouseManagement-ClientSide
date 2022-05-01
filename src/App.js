import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/LogIn' element={<LogIn></LogIn>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>

    </div >
  );
}

export default App;
