import {Route,Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Categories/>}/>
        <Route path="categories/:category" element={<Categories/>}/>
        <Route path="/pets/details/:petId" element={<PetDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
