import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import PostDetails from './components/Posts/PostDetails';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  return (
    <div className="App">
      <ToastContainer theme='colored' />
      <Routes> 
      
        <Route exact path='/' element={<Login/>}/>

        <Route path='/signup' element={<Signup/>}/>

        <Route path='/forgot/password' element={<ForgotPassword/>}/>

        <Route path='/reset/password/:token' element={<ResetPassword/>}/>
        
        <Route path='/posts' element={<Posts/>}/>

        <Route path='/newpost' element={<Form/>}/>

        <Route path='/sign' element={<Signup/>}/>

        <Route path='/post/:id' element={<PostDetails/>}/>

      </Routes>
    </div>
  );
}

export default App;
