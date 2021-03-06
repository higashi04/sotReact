import { Route, Routes } from 'react-router-dom';
import Body from './components/body/body';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

//pages
import HumanResourcesHome from './pages/hr/home'
import UsersHome from './pages/users/home'
import InvHome from './pages/inv/home';
import MttoHome from './pages/mtto/home';
import BusesHome from './pages/buses/home'
import BusShow from './pages/buses/show';
import ComprasHome from './pages/compras/home';
import Login from './pages/users/login';
import Forgot from './pages/users/forgot';
import Register from './pages/users/register';
import NoMatch from './pages/NoMatch404';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Body />} />
          <Route path='hr' element={<HumanResourcesHome />} />
          <Route path='inv' element={<InvHome/>} />
          <Route path='mtto' element={<MttoHome/>} />
          <Route path ='buses' element={<BusesHome/>}/>
          <Route path='compras' element={<ComprasHome/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='forgot' element={<Forgot/>} />
          <Route path='users' element={<UsersHome />}/>
          <Route path='users/new' element={<Register />}/>

          <Route path='show' element={<BusShow/>}/>
          <Route path='*' element={<NoMatch/>} />
        </Route>
        
  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
