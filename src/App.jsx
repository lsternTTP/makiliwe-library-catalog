import "./App.css";
import AllBooks from "./Components/Catalog/AllBooks.jsx";
import AllRequests from "./Components/Requests/AllRequests.jsx";
import SearchBar from "./Components/Catalog/SearchBar.jsx"; 
import database from "../BookData.json";
import { useState } from "react";

export default function App() {
  // initialize request list state
  const [myRequests, setMyRequests] = useState([]);
  console.log("requests", myRequests);

  // initalize book list state
  const [myBooks, setMyBooks] = useState(database.catalog);
  console.log("books list", myBooks);

  // function to add a book to the request list
function searchBooksHandler(searchTerm) {
  if (searchTerm === "") {
    setMyBooks(database.catalog);
  } 
  else {
    const filteredBooks = database.catalog.filter(book => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setMyBooks(filteredBooks);
  }
}

  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      return [...myRequests, bookToAdd];
    });
  }

  function removeFromRequestListHandler(bookToRemove) {
    // filter out the bookToRemove from myRequests
    setMyRequests(() => {
      // filter out bookToRemove
      return myRequests.filter((thisRequest) => thisRequest.id != bookToRemove.id);
    })
  }

  return (
    <main>
      <h1>Digital Library Catalog Space </h1>
      <nav>
        <ul>
          
        
        </ul>
      </nav>
      
      <SearchBar onSearch={searchBooksHandler}></SearchBar>
      
      <section id="books-and-requests">
        <AllBooks
          bookList={myBooks}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>
        <AllRequests
          requestList={myRequests}
          removeFromRequestListHandler={removeFromRequestListHandler}
        ></AllRequests>
      </section>
    </main>
  );
}
