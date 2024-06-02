// import { Route, Routes , Router} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Admin from './Routes/admin';

// import {
//   RecoilRoot,
//   useSetRecoilState
// } from 'recoil';
// import axios from "axios";
// import {BASE_URL} from "./config.js";
// import {useEffect} from "react";
// App.use("/admin", Admin)
   // if there is to much extension give (..) no means it throws ana error
// import User from  "../Routes/User.jsx"

function App(){    // represents the main  component of your appplication 
return (
  <RecoilRoot>
  <Router>
    <Routes>
      <Route path={"/admin"} element={<Admin/>}/>   
    </Routes>
 </Router>



</RecoilRoot>
 

);

}


 


export default App;