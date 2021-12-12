import React from "react";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Stats from "./Pages/Stats";
import User from "./Pages/User";

export default function Page(props) {

    //load pages here as components. check App.css to set the height of parent

    if (props.currentPage == "home") {
        return (<div className="page-container">
           <Home/>
        </div>
        )
    }

    else if (props.currentPage == "user") {
        return (<div className="page-container">
            <User/>
        </div>
        )
    }

    else if (props.currentPage == "stats") {
        return (<div className="page-container">
            <Stats/>
        </div>
        )
    }

    else if (props.currentPage == "settings") {
        return (<div className="page-container">
            <Settings/>
        </div>
        )
    }


}