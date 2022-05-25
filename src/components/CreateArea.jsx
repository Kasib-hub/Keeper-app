import React, { useState } from "react";

// trigger Addnote by getting hold of props that gets passed over (props.onAdd)
function CreateArea(props) {

    // accessed by value in the html - const to keep track of title and content
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    // use function to handle change - 
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        })
    }

    // function to pass note back to App - needed as prop as well
    function submitNote(event) {
        // prevent refresh
        event.preventDefault();
        
        // pass current created note
        props.onAdd(note);
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note.." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

