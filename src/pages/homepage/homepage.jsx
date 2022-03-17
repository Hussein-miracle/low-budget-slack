import React from "react";

import Header from "../../components/header/header.component";
import Content from "../../components/content/content.component";

const Homepage = function({user}){
    return (
        <div className="homepage">
            <Header user={user}/>
            <Content user={user}/>
        </div>
    )
}

export default Homepage;