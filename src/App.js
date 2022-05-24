import Navebar from './Navbar';
import Home from './Home';

function App() {
  const tittle = 'Welcome to the new blog'
  
  return (
    <div className="App">
      <Navebar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
