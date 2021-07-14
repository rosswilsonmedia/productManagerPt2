import logo from './logo.svg';
import './App.css';

import Main from './views/Main';
import Product from './views/Product';
import { Router } from '@reach/router';

function App() {
  return (
    <Router>
      <Main path='/'/>
      <Product path='/:id'/>
    </Router>
  )
}

export default App;
