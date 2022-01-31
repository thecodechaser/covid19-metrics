import React from "react";
import { BsFillMicFill } from "@react-icons/all-files/bs/BsFillMicFill";
import { IoIosSettings } from "@react-icons/all-files/io/IoIosSettings";

const Header = (props)=>{
    const heading = props.heading;
    return (
        <header>
            <div className="header-top">
                <h3 className="header-h3">{heading}</h3>
                <BsFillMicFill />
                <IoIosSettings />
            </div>
        </header>
    );
};

export default Header;