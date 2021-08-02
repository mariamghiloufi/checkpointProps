
import './App.css';
import Profile from './profile/Profile';
import imageInSrc from "./imageInSrc.png";




function App() {
  return (
    <div className="App">
     <Profile
                fullName ="Mariam Ghiloufi" 
                bio ="f" 
                profession ="Technologue"
                children = {imageInSrc}
     />
     
     
     
     
     
    </div>
  );
}

export default App;
