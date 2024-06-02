

import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { adminState } from "../../store/atom/admin";
import {Card, Typography} from "@mui/material";
import { BASE_URL } from '../../config';
import axios from "axios";



function Signup(){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate  = useNavigate()
    const setadmin = useSetRecoilState(adminState);    //  In a signup application, you would likely want to update the user
    //  state when a new user signs up. After the user successfully signs up, you might want to update the userState atom to reflect 
    // the newly signed-up user's information, such as their username, email, or any other relevant details.

    return <div>
        <div style={{  // this style is for the text
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant = {"h6"}>
                welcome to stacker . you can signup below

            </Typography>
        </div>
    <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
        <Card variant={"outlined"} style={{width: 400, padding: 20}}>
            <TextField  // for a input box use textfield
                onChange={ (e)=>{
                    setEmail(e.target.value);
                }}
                fullWidth= {true}
                label = "Email"
                variant="outlined"
                />
                <br></br>
            <TextField       // T should be in caps no means u get ana error
                onChange={ (e)=>{
                    setPassword(e.target.value);      
                }}
                fullWidth= {true}
                label = "password"
                variant = "outlined"
                type = {"password"}
      //The variant prop is being assigned a static string value, "outlined", which is
     //  why you don't need to enclose it in curly braces. Curly braces are used when you need to insert a dynamic JavaScript expression,
              />
              <br></br>

              <Button 
              size = {"large"}
              variant = "contained"
              onClick={ async()=>{
                const response  = await axios.post(`${BASE_URL}/admin/signup`,{
                    username : email,
                    password : password
                })
                let data = response.data;
                localStorage.setItem("token" , data.token);
                setadmin({adminEmail: email , isLoading: false})
                navigate("/admin/courses")

              }}
              > Signup</Button>

                

            </Card>

        </div>
    </div>  
            
}

export default Signup;