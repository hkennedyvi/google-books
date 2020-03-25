import axios from "axios";

export default {
    populateLibrary: function() {
      return axios.get('https://www.googleapis.com/books/v1/volumes?q=harrypotter');
    }
  };