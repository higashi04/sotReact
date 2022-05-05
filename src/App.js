import { Route, Routes } from 'react-router-dom';
import Body from './components/body/body';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//pages
import HumanResourcesHome from './pages/hr/home'
import UsersHome from './pages/users/home'
import InvHome from './pages/inv/home';
import MttoHome from './pages/mtto/home';
import ComprasHome from './pages/compras/home';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Body />} />
          <Route path='hr' element={<HumanResourcesHome />} />
          <Route path='inv' element={<InvHome/>} />
          <Route path='mtto' element={<MttoHome/>} />
          <Route path='compras' element={<ComprasHome/>} />
        </Route>
        
        <Route path='users' element={<UsersHome />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
