import React from "react";

// callback from Note to trigger delete function in App via props, grabbing the id of the note
// all starts with on click on the button
function Note(props) {

    function handleClick(event) {
        // triggers the function in App
        props.onDelete();
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
    
}

export default Note;