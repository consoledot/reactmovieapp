import React, { Component } from "react";
import "./App.css";
import Movies from "./containers/Movies/Movies";
import Search from "./components/Search/Search";
import Fullmovie from "./components/FullMovie/Fullmovie";
// import Pagination from "./components/Pagination/Pagination";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      searchText: "",
      page: 1,
      totalResults: 0,
      currentMovie: null,
      searchon: true
    };
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?s=${
        this.state.searchText
        }&plot=full&apikey=e51cc621&page=${this.state.page}`
      )
      .then(movie => {
        console.log(movie.data);
        this.setState({
          movie: movie.data.Search,
          totalResults: movie.data.totalResults
        });
      })
      .catch(err => console.log(err));
    console.log(e.target.input)
  };
  onHandleChange = e => {
    e.preventDefault();
    this.setState({ searchText: e.target.value });

  };
  nextPage = (pageNumber) => {
    this.setState({ page: pageNumber })

    // axios
    //   .get(
    //     `http://www.omdbapi.com/?s=${
    //     this.state.searchText
    //     }&plot=full&apikey=e51cc621&page=${pageNumber}`
    //   )
    //   .then(movie => {
    //     console.log(movie.data.Search);
    //     this.setState({ movie: movie.data.Search, page: pageNumber });
    //   })
    //   .catch(err => console.log(err));
  };
  movieInfo = id => {
    axios.get(`http://www.omdbapi.com/?i=${
      id
      }&plot=full&apikey=e51cc621`)
      .then(res => {
        this.setState({ currentMovie: res.data })
      })
    this.setState({ searchon: false })
  }


  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
    this.setState({ searchon: true })

  }

  render() {
    // const numberPages = Math.floor(this.state.totalResults / 10);
    return (

      <div className="App">
        <header className='App-header'>React Movie Search</header>
        {
          this.state.searchon === true ?
            <Search
              handleSubmit={this.onSubmitForm}
              handleChange={this.onHandleChange}
            /> : null}
        {
          (this.state.currentMovie === null ?
            <>
              <Movies movieInfo={this.movieInfo} movies={this.state.movie} />
              {/* {this.state.totalResults > 10 ? (
                <Pagination
                  pages={numberPages}
                  nextPage={this.nextPage}
                  currentPage={this.state.page}
                />
              ) : null} */}
            </> : <Fullmovie close={this.closeMovieInfo} movie={this.state.currentMovie} />)
        }


      </div>

    );
  }
}

export default App;
