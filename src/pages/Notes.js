import  Container  from "@mui/material/Container";
import { useEffect } from "react";
import { useState } from "react";
import  Grid  from "@mui/material/Grid";
import  Paper  from "@mui/material/Paper";
import NoteCard from "../components/NoteCard";
import  Typography  from "@mui/material/Typography";




const Notes=()=>
{
    const [notes,setNotes]=useState([]);
    const [count,setCount]=useState(0);


    useEffect(()=>
    {
        fetch('http://localhost:8000/notes')
        .then(res=> res.json())
        .then(data=>{
            setNotes(data);
        })
    },[]);





    return <Container>

        <Typography variant="h4" color="GrayText" sx={{paddingTop:10,paddingBottom:5}}>Notes</Typography>
        <Grid container spacing={3}>
        {notes.map((note)=>(
            <Grid item key={note.id} xs={12} md={6} lg={4} >
                <NoteCard count={count} setCount={setCount} notes={notes} setNotes={setNotes} note={note}/>

            </Grid>
        )
        )}
           
        </Grid>
       

    </Container>
}
export default Notes;