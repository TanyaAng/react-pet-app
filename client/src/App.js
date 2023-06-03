import {Route,Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import DemoFuncPage from './components/Demo.js';
import DemoPage from './components/DemoClass.js';


import './App.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Categories/>}/>
        <Route path="categories/:category" element={<Categories/>}/>
        <Route path="/pets/details/:petId" element={<PetDetails/>}/>
        
        <Route path="/demo-func" element={<DemoFuncPage/>}/>
        <Route path="/demo" element={<DemoPage/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
