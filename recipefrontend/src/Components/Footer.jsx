import { Grid, Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
    <div>
        <Grid container>
     <Grid item xs={12} md={12}>
      <div style={{height:"150px",backgroundColor:"#d1965c"}}>
      <CopyrightIcon style={{paddingTop:"50px"}}/><Typography style={{fontSize:"16px",fontWeight:"500"}} >2023</Typography> <Typography style={{fontSize:"16px",fontWeight:"500"}} variant='p'>Tasty Treats</Typography>
      </div>
      </Grid>
      </Grid> 
    </div>
  )
}

export default Footer