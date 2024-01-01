import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import React, { useState } from "react";
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from "@mui/material/TextField";
import  {makeStyles}  from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";



const Create=()=>
{
  const [title,setTitle]=useState("");
  const [details,setDetails]=useState("");
  const [titleError,setTitleError]=useState(false);
  const [detailError,setDetailError]=useState(false);
  const [category,setCategory]=useState("money");

  const navigate=useNavigate();

  const handleSubmit=(event)=>
  {
    event.preventDefault();
    setTitleError(false);
    if(detailError=="true")
    {
      setDetailError(true);

    }
    
    if(title=="")
    {
      setTitleError(true);
    }
    if(detailError=="")
    {
      setDetailError(true);
    }
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => navigate('/'))
      
    } 

  }

 




    return <Container  >
      
        <Typography variant="h4" color="GrayText" component="h2" gutterBottom sx={{paddingTop:10}}>Create a New note</Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField error={titleError} onChange={(e)=>
          {
            setTitle(e.target.value)
          }}  required sx={{marginTop:5,marginBottom:5,display:'block'}}  label="NoteTitle" variant="outlined" color="secondary" fullWidth />
          <TextField error={detailError}  onChange={(e)=>
          {
            setDetails(e.target.value)
          }} required sx={{marginTop:5,marginBottom:5,display:'block'}}  label="Details" variant="outlined" color="secondary" fullWidth multiline rows={4} />  
 
           <FormControl sx={{marginTop:5,marginBottom:5,display:'block'}}>
            <FormLabel sx={{align:"left"}}>Note Category</FormLabel>
           <RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <FormControlLabel control={<Radio color="secondary"/>} label="Money" value="money" / >
            <FormControlLabel control={<Radio color="secondary"/>} label="Todos" value="todos" / >
            <FormControlLabel control={<Radio color="secondary"/>} label="Reminders" value="reminders" / >
            <FormControlLabel control={<Radio color="secondary"/>} label="Works" value="works" / >
          </RadioGroup>

           </FormControl>
          


           <Button 
          color="secondary"
          variant="contained" 
          type="submit"
          //startIcon={<SendIcon/>}
          endIcon={<KeyboardArrowRightIcon/>}
          >
        SUBMIT</Button>

        </form>
       
        <br></br>
          
      
       
    </Container>
}

export default Create;