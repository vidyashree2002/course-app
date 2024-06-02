import { useState } from "react";
import { Button, Card, TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../config";





function AddCourse(){
// this is wholelly for this component , thats why we are using this format, if it was of the previous components 
// parent one , we whould you the one which uses recoil hooks
    const [title , setTitle] = useState("");
    const [discription , setDiscription] = useState("");
    const [image , setImage] = useState("");
    const [price , setPrice] = useState(0)

    return <div style={{display: "flex" , justifyContent:"center", minHeight: "80vh", flexDirection: "column" }}>
        <div style={{display: "flex" , justifyContent: "center"}}>
            <Card variant={"outlined"} style={{width: 400, padding: 20, marginTop: 30, height: "100%"}}>
                <TextField
                style={{marginBottom: 10}}
                onChange={(e)=>{
                    setTitle(e.target.value)   // this taking the input of the user
                }}
                variant="outlined"
                width = "100"
                labell = "title"
                />

                <TextField
                style={{marginBottom: 10}}
                onChange={(e)=>{
                    setDiscription(e.target.value)
                }}
                variant="outlined" // to give the box not of a container but an ouline to it like a text box
                label = "discription"
                width = "100"
                />

                <TextField
                style = {{marginBottom:10}}
                onChange={(e)=>{          // e represents a change event
                    setImage(e.target.value)
                }}
                width = "100"
                variant="outlined"
                label = "image"
                />

                <TextField
                style = {{marginBottom: 10}}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}
                variant="outlined"
                label = "price "
                width = {true}                
                />

                <Button
                size="large"
                variant="outlined"

                onClick={ async ()=>{
                    // const res =   await axios.post(`${BASE_URL}/admin/courses`,{
                        // title: res.title,
                        // discription: res.discription,

                    // you cannot write const res= so on , bcoz this is a method to fetch the response data from the store http server not to store the entered data
                    await axios.post(`${BASE_URL}/admin/courses`,{
                        title: title,
                        discription: discription,
                        image : image,
                        price ,
                        published : true

                    },{
                        Headers: {
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    }
                   );
                   alert("added course");  // comes inside onclick bcoz as soon as button pressed, alert should appear
                }
                }
                >Add course</Button>             

            </Card>

        </div>

    </div>


}








export default AddCourse;
