import {Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import { adminEmailState } from "../../store/selectors/adminemail.js";
import { isLoading } from "../../store/selectors/isloading.js";


 

export const Landing = () =>{
    const navigate = useNavigate()  //It is used to programmatically navigate between different routes within your application. It allows you to change the URL and trigger route transitions without requiring a full page reload.
    const adminEmail = useRecoilValue(adminEmailState); //So, the purpose of the code is to retrieve the user's email from the Recoil state using the useRecoilValue hook and store it in the userEmail variable.
    const adminLoading = useRecoilValue(isLoading);

    return <div>
    <Grid container style={{padding: "5vw"}}>
        <Grid item xs={12} md={6} lg={6}>
            <div style={{marginTop: 100}}>
                <Typography variant={"h2"}>
                    Coursera Admin
                </Typography>
                <Typography variant={"h5"}>
                    A place to learn 
                </Typography>
                {!adminLoading && !adminEmail && <div style={{display: "flex", marginTop: 20}}>
                    <div style={{marginRight: 10}}>
                        <Button
                            size={"large"}
                            variant={"contained"}
                            onClick={() => {
                                navigate("/Signup")
                            }}
                        >Signup</Button>
                    </div>
                    <div>
                        <Button
                            size={"large"}
                            variant={"contained"}
                            onClick={() => {
                                navigate("/Signin")
                            }}
                        >Signin</Button>
                    </div>
                </div>}
            </div>
            <div>
            </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
            <img src= {"https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png"} width={"100%"} />
        </Grid>
    </Grid>
        </div>

}


