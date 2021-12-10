import React from "react";
import { useState } from "react";


export default function NavBtn(props) {

    const [BtnToggle, setBtnToggle] = useState("nav-icon")

    const toggleBtn = () => {
        props.changeBtn();
       
       if (props.id=="btnHome")
       {
        props.changeTab("home")
      
      
       }

       else if (props.id=="btnUser")
       {
        props.changeTab("user")
    
       }

       
     
        
    }


    return (


        <img src={props.icon} className={props.toggleStatus}
            id={props.id} onClick={() => toggleBtn()} />
    )
}