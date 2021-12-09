import React from "react";
import { useState } from "react";
import iconHome from "../assets/img/home.svg";
import iconUser from "../assets/img/user.svg";
import iconStats from "../assets/img/stats.svg";
import iconSettings from "../assets/img/settings.svg";

export default function NavBar() {
    return (
        <div className="navbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24.64" height="24.643" className="nav-icon"
            viewBox="0 0 24.64 24.643">
                <path d="M23.978,10.718l0,0L13.924.664a2.268,2.268,0,0,0-3.208,0L.669,10.711l-.01.01a2.268,2.268,0,0,0,1.51,3.865q.035,0,.07,0h.4v7.4a2.658,2.658,0,0,0,2.655,2.655H9.227a.722.722,0,0,0,.722-.722v-5.8a1.213,1.213,0,0,1,1.211-1.211h2.32a1.213,1.213,0,0,1,1.211,1.211v5.8a.722.722,0,0,0,.722.722h3.933A2.658,2.658,0,0,0,22,21.987v-7.4h.372a2.269,2.269,0,0,0,1.605-3.872Zm0,0" transform="translate(0 0.001)" fill="#656565" /></svg>
            <img src={iconStats} className="nav-icon" />
            <img src={iconUser} className="nav-icon" />
            <img src={iconSettings} className="nav-icon" />

        </div>

    );
}