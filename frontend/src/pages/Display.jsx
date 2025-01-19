import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8000/user/displaydata";
        axios.get(api).then((res)=>{
            console.log(res.data)
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td> <img src={key.imgname} width="100pxpx" height="100px" /> </td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <table style={{boxShadow:"0px 0px 10px grey" ,
            margin:"auto",
            border:"2px solid grey",
            height:"auto",
            padding:"20px"}} >
            <tr>
                <th  width="200px" >Image</th>
                <th  width="200px" >RollNo</th>
                <th  width="200px" >Name</th>
                <th  width="200px" >City</th>
                <th  width="200px" >Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;