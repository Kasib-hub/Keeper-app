import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes';

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
    return (
        <div>
            <Header />
            {notes.map(item => (
                <Note 
                    key={item.key}
                    name={item.title}
                    body={item.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;