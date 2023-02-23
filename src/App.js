import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';


function App() {
  return (
  <>
    <Routes>
        <Route path="/" element={<Greeting />} />
    </Routes>
  </>
  );
}

export default App;
