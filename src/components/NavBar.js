import React from "react";
import { useState, useRef, useEffect } from "react";
import iconHome from "../assets/img/home.svg";
import iconUser from "../assets/img/user.svg";
import iconStats from "../assets/img/stats.svg";
import iconSettings from "../assets/img/settings.svg";
import NavBtn from "./NavBtn";

export default function NavBar(props) {
    const [homeBtnStatus, setHomeBtnStatus] = useState("nav-icon");
    const [userBtnStatus, setuserBtnStatus] = useState("nav-icon");
     
    const changeBtn=()=>{
        clearActive()
        if(props.currentTab=="home")
        {
            setHomeBtnStatus("nav-icon-active")
           
        }
        else if(props.currentTab=="user")
        {
            setuserBtnStatus("nav-icon-active")
           
        }
    }

    const clearActive=()=>{
        if(props.currentTab=="home")
        {
            setuserBtnStatus("nav-icon")
        }
        else if (props.currentTab=="user")
        {
            setHomeBtnStatus("nav-icon")
        }
    }
   

    return (

        <div className="navbar" >

            <NavBtn icon={iconHome} id="btnHome" toggleStatus={homeBtnStatus} changeTab={props.changeTab} currentTab={props.currentTab} changeBtn={()=>changeBtn()}/>
            <NavBtn icon={iconUser} id="btnUser" toggleStatus={userBtnStatus} changeTab={props.changeTab} currentTab={props.currentTab} changeBtn={()=>changeBtn()}/>
            <NavBtn icon={iconStats} id="btnStats" toggleStatus={false} changeTab={props.changeTab} currentTab={props.currentTab} />
            <NavBtn icon={iconSettings} id="btnSettings" toggleStatus={false} changeTab={props.changeTab} currentTab={props.currentTab} />

        </div>

    );
}