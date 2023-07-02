import React, { useEffect, useState } from 'react'
import Background from "./../img/background.jpg"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Button, Card, CardContent, CardHeader, Grid, Paper, TextField, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Addcusine from './Addcusine';
const Home = () => {
  var[recipes,setRecipes]=useState([]);
  var[update,setUpdate]=useState(false);
  var[singleValue,setSingleValue]=useState([]);
    const cardStl={
        marginTop:"50px",
        display: "inline"
      }
      const head={
        marginBottom:"30px"
      }
      useEffect(()=>{
        axios.get("http://localhost:3008/viewRecipe")
        .then((response)=>{
          setRecipes(response.data);
          // setOrgMovies(response.data);
          console.log(response.data)
          console.log(recipes)
        })
      },[])


      var deleteValues=(id)=>{
        console.log(id);
        axios.delete("http://localhost:3008/deleteRecipe/"+id)
        .then((response)=>{
          alert("deleted");
          window.location.reload(false);
        })
        .catch(err=>console.log(err))
      }
      var updateValues=(value)=>{
        console.log("update Clicked")
        setUpdate(true);
        setSingleValue(value);
    
    
      }
      var finalJSX=<div>
      <div style={{backgroundImage: `url(${Background})`,minHeight:"1000px",backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
  
  
  
  
          
          <Grid container spacing={2} style={{backgroundImage: `url(${Background})`,minHeight:"1000px",backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
  
  
  <Grid item xs={1} md={1}></Grid>
  <Grid item xs={10} md={10} style={cardStl}>
  
  
  
      
          {/* <Typography variant='h3' style={head}>Recipe LIST</Typography> */}
          <div style={{textAlign:"left"}}>
  
  </div>
  
  
   <Grid container spacing={2}>
   {recipes.map((value,index)=>{
              return(
      <Grid item xs={12} md={3}>
        {/* <Paper >
        <Card >
          <CardHeader/>
           
       
          <CardContent>
            <img src={"http://localhost:3008/files/" + value.image}/>
  
          </CardContent>
        </Card>
        </Paper> */}
         <Card sx={{ maxWidth: 345 }}>
          
        <CardMedia
          sx={{ height: 140 }}
          // image="http://localhost:3008/files/"+this.value.image
          image={"http://localhost:3008/files/"+ value.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {value.cuisineName}
          </Typography>
        </CardContent>
        <CardActions>
       
        
          <AccessTimeIcon style={{color:"darkviolet",paddingRight:"5px"}}/>  <Typography style={{color:"darkviolet"}} gutterBottom variant="p" component="div">  {value.duration}</Typography>
          <GroupIcon style={{color:"darkorange",paddingLeft:"15px"}}/><Typography style={{color:"darkorange"}} gutterBottom variant="p" component="div">  {value.servings}</Typography>
        <div style={{marginLeft: "auto",marginRight: "0"}}>
        {/* <EditIcon style={{paddingRight:"15px",color:"green"}}/> */}
        <Button variant="outlined" color="success"  startIcon={<EditIcon />} style={{marginRight:"10px",minWidth: "6px",padding: "5px 5px"}} onClick={()=>updateValues(value)}>
      
  </Button>
  <Button variant="outlined" color="error" startIcon={<DeleteIcon />} style={{minWidth: "6px",padding: "5px 5px"}}   onClick={()=>deleteValues(value._id)}></Button>
        {/* <DeleteIcon style={{color:"tomato"}}/> */}
        </div>
        </CardActions>
      </Card>
      </Grid>
      )
    })}
     
      
     
      
    </Grid>    
       
       
       
       
  </Grid>
  <Grid item xs={1} md={1}></Grid>
  </Grid>
  
          
          </div>
         
          
          </div>

if(update) finalJSX = <Addcusine data={singleValue} method='put'/>
return finalJSX;
}


export default Home