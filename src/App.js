import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import ManageItem from './Components/ManageItem/ManageItem';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageInventory from './Components/Manageinventory/ManageInventory';
import AddNewItem from './AddNewItem/AddNewItem';
import NotFound from './NotFound/NotFound';
import MyItem from './Components/Myitem/MyItem';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/LogIn' element={<LogIn></LogIn>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/ManageItem' element={<RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/addnewitem' element={<RequireAuth>
          <AddNewItem></AddNewItem>
        </RequireAuth>}></Route>
        <Route path='/myitem' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes >
      <Footer></Footer>
    </div >
  );
}

export default App;
