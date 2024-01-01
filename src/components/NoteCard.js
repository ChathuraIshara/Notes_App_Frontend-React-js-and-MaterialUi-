import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import  IconButton  from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import { Avatar, Typography } from '@mui/material';
import axios from 'axios';
import { green, yellow } from '@mui/material/colors';
import pink from '@mui/material/colors/pink';
import blue from '@mui/material/colors/blue';



const NoteCard=({note,count,setCount,notes,setNotes})=>
{
    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
          method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes)
      }

    return <div>
        <Card elevation={3}>
            <CardHeader
            avatar={<Avatar 
                sx={{
                    backgroundColor: note.category=="works"
                      ? yellow[700]
                      : note.category == "money"
                      ?  green[500]
                      :  note.category == "todos"
                      ? pink[500]
                      :blue[500]
                    
                    // Add more styles based on your conditions
                  }}

            >{note.category[0].toUpperCase()}</Avatar>}
             action={
                 <IconButton onClick={()=>{
                    handleDelete(note.id)
                 }} aria-label="settings">
                    <DeleteOutlineIcon/>
                 
               </IconButton>     
            }
            title={note.title}
            subheader={note.category}
            
        />
        <CardContent>
            <Typography color="GrayText" variant="body2">{note.details}</Typography>   
        </CardContent>
        </Card>

    </div>
}

export default NoteCard;