import { Route, Routes } from 'react-router-dom';
import Body from './components/body/body';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//pages
import HumanResourcesHome from './pages/hr/home'
import UsersHome from './pages/users/home'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route path='/hr' element={<HumanResourcesHome />} />
        </Route>
        
        <Route path='users' element={<UsersHome />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
