import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// function createNote(item) {
//     return (
//         <Note 
//             key={item.key}
//             name={item.title}
//             body={item.content}
//         />
//     );
// }

function App() {

    // store notes in array @ useState[], How would I persist the data with mongoose?
    const [notes, setNotes] = useState([]);

    // access all prev notes and add new one to the end
    function addNote(newNote) {
        setNotes(prevNotes => {
           return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, i) => {
                return i !== id;
            });
        });
    }

    // onAdd created to receive the addNote function
    // use the notes array const and map a new Note component for each item with made props
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map(noteItem => {
                return <Note 
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                />;
            })}
            <Footer />
        </div>
    );
}

export default App;

