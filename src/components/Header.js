import React from "react";

const Header = (props)=>{
    const heading = props.heading;
    return (
        <header>
            <div className="header-top">
                <h3 className="header-h3">{heading}</h3>
            </div>
        </header>
    );
};

export default Header;