import React from "react";

const User = (props) => {
    return (
        <div>
            <h1>User Component</h1>
            <h3>{props.data.id}</h3>
        </div>
    )
}

export default User;