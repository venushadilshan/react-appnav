import React from "react";

export default function Page(props) {

    //load pages here as components. check App.css to set the height of parent

    if (props.currentPage == "home") {
        return (<div className="page-container">
            <h1>Home</h1>
        </div>
        )
    }

    else if (props.currentPage == "user") {
        return (<div className="page-container">
            <h1>User</h1>
        </div>
        )
    }

    else if (props.currentPage == "stats") {
        return (<div className="page-container">
            <h1>Stats</h1>
        </div>
        )
    }

    else if (props.currentPage == "settings") {
        return (<div className="page-container">
            <h1>Settings</h1>
        </div>
        )
    }


}