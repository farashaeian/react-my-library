import { Navbar, Books } from './components';
import { Link } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      {/* <Books /> */}
      <div className='p-5 flex justify-content-center'>
        <Link to="/books">Books</Link>
        {"    "}
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default App;
