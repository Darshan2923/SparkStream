import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App" >
      {/* Remember the syntax has changed in recent react-router-dom version 6 
      You need to wrap all in <BrowserRouter,Routes then use element={} inside the <Route> to point the component
      for more doubts visit: https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element/69837100#69837100?newreg=9735e4bf07b64ef19dd03e522d559cfa
      */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
