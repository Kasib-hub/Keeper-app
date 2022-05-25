import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function createNote(item) {
    return (
        <Note 
            key={item.key}
            name={item.title}
            body={item.content}
        />
    );
}

function App() {
    return (
        <div>
            <Header />
            <CreateArea />
            <Note key={1} title='Note title' content='Note content' />
            <Footer />
        </div>
    );
}

export default App;