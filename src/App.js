import Auth from './components/auth'
import Players from './components/Players';
import "./App.css";



function App() {
  return (
    <div className='App'>
      Firebase
      <Auth/>
      <Players/>
    </div>
  );
}

export default App;
