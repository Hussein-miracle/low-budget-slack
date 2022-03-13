import React from "react";

import Header from "../../components/header/header.component";
import Content from "../../components/content/content.component";

const Homepage = function(){
    return (
        <div className="homepage">
            <Header />
            <Content/>
        </div>
    )
}

export default Homepage;