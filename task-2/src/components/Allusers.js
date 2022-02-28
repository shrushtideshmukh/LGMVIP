import React, { useState } from 'react'
import User from './User';
import br from '../images/brand-preview.png';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


export function Allusers() {

    const classes = useStyles();
const [user,setUser]=useState([]);
const [alluser,setallUser]=useState([]);
const [showSpinner,setShowSpinner]=useState(false);

const getData=async()=>
{
    setShowSpinner(true);
    var res=await fetchUrl("https://reqres.in/api/users?page=1");
    
    setallUser(pre=>[...res.data]);
    setUser(pre=>[...res.data]);
}

async function fetchUrl(url)
{
    var res=await fetch(url);
    
    var res=await res.json();
    

    return res;
}


    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        const filteredUser = alluser.filter(user => (`${user.first_name} ${user.last_name}`.toLowerCase().includes(value)));
        setUser(filteredUser);
    }

    return (
        <>
        
        <header class="navbar">
        <div class="nav-data">
            <div className="brand">
              <img src={br} alt=""/>
            </div>
            <div className="search-box" style={{marginTop:"1.5rem",width:"fit-content"}}>
                <input className="search-box" placeholder="Search..." onInput={filterCards}/>
            </div>
        </div>
        <div style={{background:"yellow"}}></div>
        </header>
        


        {user && user.length>0 ?
        
        

        <div className="users">

        { user.map(user=>
        {
         
        return (
         <User key={user.id} avatar={user.avatar} name={user.first_name+" "+user.last_name} email={user.email} about={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat"} />
        )
        
        }) } </div>:
        (<>
        <button onClick={()=>getData()} className="middle getuser" style={{marginTop:"18rem",width:"fit-content"}}> Get User</button>
        {showSpinner ? 
              <Backdrop className={classes.backdrop} open>
              <CircularProgress color="inherit" />
            </Backdrop>
           :null}
        
        </>)
        
        
         }

        </>
    )
}