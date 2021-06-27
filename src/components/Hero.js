import React, {useState}  from "react";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const Hero=({handleLogout})=>{
    
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
          return [...prevNotes, newNote];
        });
      }
    
      function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    return(
        <section className="hero">
            <nav>
                <h2>TO-DO APP</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
              return (
               <Note
                 key={index}
                 id={index}
                 title={noteItem.title}
                 date={noteItem.date}
                 time={noteItem.date}
                 content={noteItem.content}
                 onDelete={deleteNote}
                />
               );
            })}
        </section>
    );
};

export default Hero;