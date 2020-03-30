import axios from "axios";

export default {

  populateLibrary: function () {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=harrypotter');
  },

  searchBooks: function (title) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title);
  },

  getBooks: function () {
    return axios.get("/api/books");
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};