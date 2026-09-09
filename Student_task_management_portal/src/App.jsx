import"./App.css"
import Navbar from "./components/Navbar";
import DashBoard  from "./components/DashBoard";
import Welcome from "./components/Welcome";
function App(){
  return(
    <div>
       <Navbar/>
       <Welcome/>
      <DashBoard/>
        </div>
  );
  
}
export default App;