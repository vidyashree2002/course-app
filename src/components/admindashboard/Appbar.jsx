// import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoading } from "../../store/selectors/isloading";
import { adminEmailState } from "../../store/selectors/adminemail";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { adminState } from "../../store/atom/admin";

// import {useSetRecoilState} from "recoil"





function Appbar(){
    const Navigate =  useNavigate()
    const isadminLoading = useRecoilValue(isLoading);
    const adminEmail = useRecoilValue(adminEmailState);
    const setadmin = useSetRecoilState(adminState);
    


    if(isadminLoading){
        <></>
    }

    if(adminEmail){
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1,
            color: "grey"

        }}>
            <div style={{marginleft:10 , cursor: "pointer"}} onClick={()=>{
                Navigate("/")
            }} >
                <img src= {"https://www.bing.com/images/search?q=Random+Logo+Transparent&FORM=IRTRRL"} width= "20"></img>
                <Typography variant = {"h6"}> Stacker</Typography>

            </div>

            <div style={{ display: "flex"}}>
                <div style = {{marginRight: 10, display: "flex"}}>
                    <div style = {{marginRight: 10}}>
                        <Button
                            variant={"contained"}
                            onClick={()=>{
                                localStorage.getItem("token" , null);
                                setadmin({
                                    adminEmail:  null,
                                    isloading: false

                                })
                            }}
                           

                        >Logout</Button>

                    </div>

                </div>

            </div>

        </div>

    }else{
        return  <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                Navigate("/")
            }}>
                <img src={"https://www.bing.com/images/search?q=Random+Logo+Transparent&FORM=IRTRRL"} width= "20"></img>
                <Typography variant={"h6"}>Stacker</Typography>
            </div>
        </div>
    }













}

















export default Appbar;