import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/aboutMe' element={<AboutMe/>}/>
        <Route path='/myWork' element={<MyWork/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
