
import Background from "./../img/addbackground.jpg"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Button, Card, CardContent, CardHeader, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardHeader, Grid, Paper, TextField, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Addcusine = (props) => {
    const cardStl={
        marginTop:"50px",
        display: "inline"
      }
      const head={
        marginBottom:"30px"
      }
    //   const handleChange = (event) => {
    //     console.log(event);
    //     setTypeName(event.target.value);
    //     console.log(typeName);
    //   };
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        console.log(e.target.files[0].name);
        setInp(setInp => ({
            ...setInp,
            // image: e.target.files[0].name,
            image: e.target.files[0],
        }))
        // inp.image=e.target.files[0].name;
        setFile(URL.createObjectURL(e.target.files[0]));
    }
      var navigate= useNavigate();
      var[inp,setInp]=useState(props.data);
      console.log(props.data);
      console.log(props.method);
      const inputHandler = (e)=>{
        const {name,value}=e.target;
        console.log(e.target);
        setInp((inp)=>({...inp,[name]:value}));
        console.log(inp)
      
      }
      const readHandler=()=>{
        console.log("clicked");
        console.log(inp.image);
        const data = new FormData() 
    data.append('cuisineName', inp.cuisineName);
    data.append('type', inp.type)
    data.append('duration', inp.duration)
    data.append('servings', inp.servings)
    console.log(typeof inp.image);
   
    data.append('image', inp.image)
    
        if(props.method=="post")
        {
        axios.post("http://localhost:3008/addRecipe",data, { headers: {'Content-Type': 'multipart/form-data'}})
        .then((response)=>{
          alert("Data Added");
          navigate('/');
        })
        .catch(err=>console.log(err))
      }
      if(props.method=="put")
      {
        
        axios.put("http://localhost:3008/edit/"+inp._id,data, { headers: {'Content-Type': 'multipart/form-data'}})
        .then((response)=>{
          alert("Data Updated");
          window.location.reload(false);
        })
        .catch(err=>console.log(err))
      }
      }

      
  return (
    <div>
        <div style={{backgroundImage: `url(${Background})`,minHeight:"1000px",backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>




        
        <Grid container spacing={2} style={{backgroundImage: `url(${Background})`,minHeight:"1000px",backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'}}>


<Grid item xs={1} md={1}></Grid>
<Grid item xs={10} md={10} style={cardStl}>



    
        <Typography variant='h3' style={head}>ADD NEW RECIPE</Typography>
        <div style={{textAlign:"left"}}>

        
</div>


 <Grid container spacing={2}>
 <Grid item xs={2}></Grid>
    <Grid item xs={8}>
      <Paper >
      <Card >
        <CardHeader/>
         
     
        <CardContent>

        <Item>
        
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Cuisine Name"
          variant="outlined"
          name="cuisineName"
          value={inp.cuisineName}
          onChange={inputHandler}
          required
        />
      </Item>
      <Item>
       
        <InputLabel id="demo-simple-select-label" style={{textAlign: "left",paddingLeft: "40px",marginBottom: "5px"}}>Type</InputLabel>
  <Select style={{width:"90%"}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={typeName}
    //       onChange={handleChange}
    name="type"
    value={inp.type}
    onChange={inputHandler}
    required 
  >
    <MenuItem value={"Indian"}>Indian</MenuItem>
    <MenuItem value={"Italian"}>Italian</MenuItem>
    <MenuItem value={"American"}>American</MenuItem>
    <MenuItem value={"Chinese"}>Chinese</MenuItem>
  </Select>
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Duration for cooking"
          variant="outlined"
          name="duration"
          value={inp.duration}
          onChange={inputHandler} required
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="No. of servings"
          variant="outlined"
          name="servings"
          value={inp.servings}
          onChange={inputHandler} required
        />
      </Item>
      {/* { props.method=="post" ? ( */}
      
        
            <Item>
        
      <input type="file" label="Image"
          variant="outlined"
          name="image"
        //   value={inp.image}
           onChange={handleChange} style={{ width: "90%" }} required/>
           <img src={file} style={{width:"25%"}}/>
        {/* <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Image"
          variant="outlined"
          name="image"
          value={inp.image}
          onChange={inputHandler}
        /> */}
      
      </Item>
      {/* ):<Item></Item>
} */}


   
      
     
     
      
      <Item>
        <Button
          variant="contained"
     
          onClick={readHandler}
        >
          SUBMIT
        </Button>
      </Item>

        </CardContent>
      </Card>
      </Paper>
    </Grid>
    <Grid item xs={2}></Grid>  
    
   
   
  </Grid>    
     
     
     
     
</Grid>
<Grid item xs={1} md={1}></Grid>
</Grid>

        
        </div>
    </div>
  )
}

export default Addcusine