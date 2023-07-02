import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Addcusine from './Components/Addcusine';
import Footer from './Components/Footer';
import Cusine from './Components/Cusine';


function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cusine/:id' element={<Cusine/>}/>
        
        <Route path='/add' element={<Addcusine data={{cuisineName:"",
type:"",
duration:"",
servings:"",
image:""
}} method="post"/>}/>
        
        {/* <Route path='/about' element={<About/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
