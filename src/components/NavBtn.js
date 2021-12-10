import React from "react";
import { useState } from "react";


export default function NavBtn(props) {


    return (


        <img src={props.icon} className={props.toggleStatus}
            id={props.id} onClick={() => props.changeBtn(props.id)} />

    )
}