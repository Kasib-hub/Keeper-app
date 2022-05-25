import React from "react";
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

    function addNote(note) {
        console.log(note);
    }

    // onAdd created to receive the addNote function
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            <Note key={1} title='Note title' content='Note content' />
            <Footer />
        </div>
    );
}

export default App;

