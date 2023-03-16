import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";

function App() {
    const [items, setItem] = useState([]);
  
    function addItem(text) {
      setItem((prevItem) => {
        return [...prevItem, text];
      });
    }
  
    function deleteItem(id) {
      setItem((prevItems) => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
        <Header />
        <CreateArea onClick={addItem} />
        {items.map((item, index) => (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteItem}
          />
        ))}
        <Footer />
      </div>
    );
  }
  
  export default App;