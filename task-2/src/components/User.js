import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


export default function User(props) {

    const {email,name,avatar,about}=props;
    console.log(email)

    return (
        
       
        <div className="user-profile">
            <div className="border">
            <div class="avatar">
                <img src={avatar} />
            </div>
        </div>
            
            <div class="user-data">
                <h3>{name}</h3>
                <h5 class="blur">Email :</h5>
                <p>{email}</p>
                {about}
                <br/><br/>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                </div>
            </div>
            
            
        </div>
      
        
    )
}