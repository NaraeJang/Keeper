import React from "react";
import Heading from "./Header.jsx";
import Footer from "./Footer.jsx";
import NoteTemplate from "./Note.jsx";
import notes from "../note.js";



function App() {
    return (
    <div>
        <Heading />
        {notes.map(note => <NoteTemplate 
            key={note.id}
            title={note.title}
            content={note.content}
        />)}
        <Footer />
    </div>
    );
};

export default App;