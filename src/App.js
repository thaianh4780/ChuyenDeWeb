import logo from './logo.svg';
import Routers from './router/Routers';
import { ToastContainer } from 'react-toastify';

// import './App.css';
// import './css1/bootstrap.min.css'
// import Test from './Test';
// import "./css/bootstrap.min.css"
// import About from './About';
// import MoreProduct from './MoreProduct';
// import Body from './Body';
// import PageSection from './PageSection';
// import Admin from './Admin'; 

function App() {
  return (
    <div className="App"  >
      <Routers />
      <ToastContainer 
      newestOnTop
      limit={3}/>
    </div>
  );
}

export default App;
