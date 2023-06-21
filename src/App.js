import './App.css';
import Home from './components/Dashboard/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddPark from './components/parkingform/addpark';
import ParkList from './components/parkingList/parkLis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-park' element={<AddPark/>}/>
        <Route path='/view-park-list' element={<ParkList/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
