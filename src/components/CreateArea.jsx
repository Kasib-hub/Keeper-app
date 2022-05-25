import React, { useState } from "react";

function CreateArea() {

    // accessed by value in the html
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    // use function to handle change
    function handleChange(event) {
        const { name, value } = event.target;
    

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        })
    }
    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note.." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;