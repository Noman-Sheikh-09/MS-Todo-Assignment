import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Nav} from './component/nav/Nav.js'
import {Side} from './component/sidebar/Side.js'

import './App.css'
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <Nav />
     <Side />
     

    </div>
  );
}

export default App;
