import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { adminState } from "../../store/atom/admin";
import { Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../config";
import{ Button }from "@mui/material";




// here you are not setting the email or password but checking it .
function Signin() {
    const[ email , setEmail] =  useState("")
    const[password , setPassword] = useState("")
    const navigate = useNavigate()
    const setadmin = useSetRecoilState(adminState);  //the hook , provides the function(setadmin) to update the state stored in the adminstate 

    return (
        <div>
            <div style ={{
                paddingTop: 150,
                marginBottom: 10,
                display : "flex",
                justifyContent: "center"
            }}>
                <Typography  variant="h5">
                    welcome to staker. login in below
                </Typography>
            </div>
        <div style={{
            display: "flex",
            justifyContent: "center",    
        }}>
            <Card variant={"outlined" } style={{width: 400 , padding: 20}}>
                <TextField
                    /* this event handler triggers when the user makes a change in the value of form elements like input fields, select dropdowns or checkboxes. */
                    onChange= {(e)=>{
                        setEmail(e.target.value);
                    }}
                    fullWidth={true}
                    label = "Email"
                    variant = "outlined"
                    />
                <br></br>

                <TextField 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Password"
                    variant="outlined"
                    type={"Password"}
                 />   
                <br></br>

                <Button         // the logic to check if the email and password is right or wrong that is the server-side doings, this is the 
                // client-side part of making the request and storing the token
                  size = {"large"}
                  variant= {"contained"}
                  onClick={ async ()=>{
                    const res = await axios.post(`${BASE_URL}/admin/login`,{
                        AdminName : email,
                        password: password

                    } , {
                        headers:{
                            "Content-type": "application/json"
                        }

                    });

                    const data  = res.data;
                   // storing the token after logining in
                    localStorage.getItem("token", data.token);
                   // updating the admin status
                    setadmin({
                        userEmail : email,
                        isloading: false    
                    })

                    navigate("/Courses")

                  }}
                
                >Signin</Button>
                

            </Card>
            </div>    

        </div>
    )



}








export default Signin;