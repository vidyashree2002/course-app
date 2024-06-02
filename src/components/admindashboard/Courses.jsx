import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../config";
import { useState } from "react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "@mui/material";
import { Button, Typography } from "@mui/material";




function Courses(){

    const[ courses , setcourses] = useState([]);

     //This defines an init function that is an asynchronous function. It sends an HTTP GET request to ${BASE_URL}/admin/courses/ to fetch a list of courses. It includes an Authorization header with a token retrieved
    //  from localStorage. Once the response is received, it updates the courses state with the data obtained from the server.
    const init = async () => {
        // we are fetching the course from the server
        const response  = await axios.get(`${BASE_URL}/admin/courses/`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        // now you will set the courses that are been fetched 
        setcourses(response.data.courses)
    }

    useEffect(()=>{
        init();
    }, []);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"center"
        }}>
            {courses.map(course=>{
                return <Course course ={course} key={course._id}/>}
            )}

        </div>
    )
    
}
// this course is a prop your passing 
export function Course({course}){
    const navigate = useNavigate();

    return <Card style={{margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.image} style={{width: 300}} ></img>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={() => {
                navigate("/course/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>

    
      


   
}









export default Courses;