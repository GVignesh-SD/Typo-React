import Login from './Login'
import IndexPage from './IndexPage';
import Admin from './Admin';
import {Route,Routes} from 'react-router-dom';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Contact from './Contact'
function App() {

  return (
    <Routes>
      <Route path={"/"} element={<IndexPage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/admin"} element = {<Admin />} />
      <Route path={"/gallery"} element = {<Gallery />} />
      <Route path={"/nav"} element={<Navbar />} />
      <Route path={"/contact"} element={<Contact />}/>
    </Routes>
  );
}

export default App
