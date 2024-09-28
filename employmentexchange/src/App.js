
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Add from './component/Add';
import Edit from './component/Edit';

function App() {
  return (
    
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/addnew'  element={<Add/>}/>
       <Route path='/edit/:id' element={<Edit/>}/>
      
    </Routes>
    </>
  );
}

export default App;
