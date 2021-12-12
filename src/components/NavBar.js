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
    const [statBtnStatus, setstatBtnStatus] = useState("nav-icon");
    const [settingBtnStatus, setsettingBtnStatus] = useState("nav-icon");


    useEffect(()=>{

        setHomeBtnStatus("nav-icon-active");

    },[]);
    const changeBtn = (id) => {
        // toggle button status
        if (id == "btnHome") {
            setHomeBtnStatus("nav-icon-active")
            props.changeTab("home")

            setuserBtnStatus("nav-icon")

            setstatBtnStatus("nav-icon")
            setsettingBtnStatus("nav-icon")

        }
        else if (id == "btnUser") {
            setuserBtnStatus("nav-icon-active")

            props.changeTab("user")

            setHomeBtnStatus("nav-icon")
            setstatBtnStatus("nav-icon")
            setsettingBtnStatus("nav-icon")

        }

        else if (id == "btnStats") {
            setstatBtnStatus("nav-icon-active")

            props.changeTab("stats")

            setHomeBtnStatus("nav-icon")
            setuserBtnStatus("nav-icon")
            setsettingBtnStatus("nav-icon")

        }

        else if (id == "btnSettings") {
            setsettingBtnStatus("nav-icon-active")

            props.changeTab("settings")

            setHomeBtnStatus("nav-icon")
            setstatBtnStatus("nav-icon")
            setuserBtnStatus("nav-icon")

        }
    }



    return (

        <div className="navbar" >

            <NavBtn icon={iconHome} id="btnHome" toggleStatus={homeBtnStatus} changeTab={props.changeTab} currentTab={props.currentTab} changeBtn={(id) => changeBtn(id)} />
            <NavBtn icon={iconUser} id="btnUser" toggleStatus={userBtnStatus} changeTab={props.changeTab} currentTab={props.currentTab} changeBtn={(id) => changeBtn(id)} />
            <NavBtn icon={iconStats} id="btnStats" toggleStatus={statBtnStatus} changeTab={props.changeTab} currentTab={props.currentTab} changeBtn={(id) => changeBtn(id)} />
            <NavBtn icon={iconSettings} id="btnSettings" toggleStatus={settingBtnStatus} changeTab={props.changeTab} currentTab={props.currentTab} changeBtn={(id) => changeBtn(id)} />

        </div>

    );
}