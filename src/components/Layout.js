import  Drawer  from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import  List  from "@mui/material/List";
import  ListItem  from "@mui/material/ListItem";
import  ListItemIcon  from "@mui/material/ListItemIcon";
import  ListItemText  from "@mui/material/ListItemText";
import  SubjectOutlined  from "@mui/icons-material/SubjectOutlined";
import  AddCircleOutlineOutlined  from "@mui/icons-material/AddCircleOutlineOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import '../index.css';
import  AppBar from "@mui/material/AppBar";
import  Toolbar  from "@mui/material/Toolbar";
import {format} from 'date-fns'
import  Avatar  from "@mui/material/Avatar";



const Layout=({children})=>
{
   // const classes=useStyles();

   const navigation=useNavigate();
   const location=useLocation();

   const menuItems=[
    {
        text:"My Notes",
        icon:<SubjectOutlined color="secondary"/>,
        path:"/"
    },
    {
        text:"Create Note",
        icon:<AddCircleOutlineOutlined color="secondary"/>,
        path:"/create"
    }
   ];



    return <div className="root">
        <AppBar sx={{paddingLeft:25,background:"#ffff"}}>
            <Toolbar>
                <Typography sx={{flexGrow:1}} color="black">Today is the {format(new Date(),'do MMMM Y')}</Typography>
                <Typography color="black">Mario</Typography>
                <Avatar sx={{marginLeft:3}} src="pexels-simon-robben-614810.jpg"/>
            </Toolbar>
        </AppBar>
        <div >
            <Drawer
            className="drawer"
            variant="permanent"
            anchor="left"
        //   classes={{  paper: drawerPaper  }}
            >
                <div>
                    <Typography variant="h5">Ninja Notes</Typography>
                </div>
                <List>
                  {menuItems.map((item)=>(
                    <ListItem className={location.pathname === item.path ? 'active' :null} button onClick={()=>{
                        navigation(item.path)
                    }} key={item.text}
                    
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                  ))}
                   
                   
                </List>
            </Drawer>
           

        {children}

        </div>
        
    </div>
}

export default Layout;