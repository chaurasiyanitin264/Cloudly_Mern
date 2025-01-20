import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
const Insert=()=>{
    const [input,setInput]=useState({});
    const [uploadImage,setUploadImage]=useState("");
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input)
    }
    const handleImage=(e)=>{
        console.log(e.target.files[0])
        setUploadImage(e.target.files[0])
    }
    const handleSubmit=async()=>{
        const formData=new FormData();
        formData.append("file", uploadImage);
        formData.append("upload_preset", "myimage");
        formData.append('cloud_name', 'dtwwlicj1');
        const response = await axios.post('https://api.cloudinary.com/v1_1/dtwwlicj1/image/upload', formData); 
        console.log(response.data.url);
        let api="http://localhost:8000/user/datasave";
        // await axios.post(api,{imgname:response.data.url,...input}).then((res)=>{
        //     console.log(res.data)
        //     alert("Data successfully save")
        // })
        const res1=await axios.post(api,{imgname:response.data.url,...input});
        alert("Data successfully save")
    }
    return (
      <div className="form-container">
          <Form className="form-box">
              <Form.Group className="mb-3" controlId="formBasicRollNo">
                  <Form.Label>Roll No.</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="Enter Roll No." 
                      name="rollno" 
                      value={input.rollno || ""} 
                      onChange={handleInput} 
                      className="inputsize" 
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="Enter Name" 
                      name="name" 
                      value={input.name || ""} 
                      onChange={handleInput} 
                      className="inputsize" 
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="Enter City" 
                      name="city" 
                      value={input.city || ""} 
                      onChange={handleInput} 
                      className="inputsize" 
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFees">
                  <Form.Label>Fees</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="Enter Fees" 
                      name="fees" 
                      value={input.fees || ""} 
                      onChange={handleInput} 
                      className="inputsize" 
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFile">
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control 
                      type="file" 
                      name="file" 
                      onChange={handleImage} 
                      className="inputsize" 
                  />
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleSubmit}>
                  Submit
              </Button>
          </Form>
      </div>
  );
};
export default Insert;