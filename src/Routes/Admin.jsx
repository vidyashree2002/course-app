// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../components/admindashboard/Landing.jsx'; // when u directly use export next to the function use { } flower bracket 
import Signup from '../components/admindashboard/Signup.jsx'; // if u write default exports dont use flower bracket { }
import { adminState } from '../store/atom/admin.js';
// import { Appbar} from "./admindashboard/Appbar.jsx"
import {
  RecoilRoot,
  useSetRecoilState
} from 'recoil';
import axios from "axios";
import {BASE_URL} from "../config.js";
import {useEffect} from "react";



function Admin () {
  return (
    <RecoilRoot>
    <div style={{width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee"}}>


    
          {/* <Appbar/> */} 
          <InitAdmin/>
             <Routes>
                  
                   <Route path= "/admin" element={<Landing/>}/>
                   <Route  path = "/admin/signup" element = {<Signup/>}/>
                   
            </Routes>
       
      </div>
    </RecoilRoot>
  );
}

// this is just to keep the state management chain and also for checking the admin status / if he is a new user or loged in user
 
function InitAdmin(){

  const setUser = useSetRecoilState(adminState);

  // By calling this init function when the App component mounts (using the useEffect hook), you're making sure that the user's authentication status is checked and the necessary state is initialized, even if they refresh the page. 
  // This is an important aspect of providing a seamless user experience and maintaining the user's session.
  const init = async ()=>{
    try{
      const response = await axios.get (`${BASE_URL}/admin/me`, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })

    if(response.data.username){
      setUser({
        isloading : false,
        adminemail: response.data.username
      })
    } else{
      setUser({
        isLoading: false,
        adminEmail: null
    })
    }
    } catch(e){
      setUser({
        isLoading: false,
        adminEmail: null
    });

  }
};
// you are using it inside the useeffect so that this runs only once and once its checked , even if the user/admin represses he land in the same page when he was 
//previously present , no need to check again and again if the user is logged in or not 
useEffect(() => {
  init();
}, );


return <></>


}

  











export default Admin;