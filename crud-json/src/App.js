import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Component/Home'; 
import Create from './Component/Create';
import Update from './Component/Update';
import Read from './Component/Read';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/Read' element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
