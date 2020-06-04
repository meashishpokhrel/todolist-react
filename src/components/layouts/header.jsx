import React from "react";

function Header() {
    return(
        <h1 style={titleStyle}>Todo List </h1>
        
    )
}

const titleStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}
export default Header;