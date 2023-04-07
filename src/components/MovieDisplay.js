



function MovieDisplay({movie}){
    console.log(movie);
    //function to return loaded JSX
    const loaded = () => {
        return (
          <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
          </>
        );
      };
    
      //function to return loading JSX
      const loading = () => {
         <h1>No Movie to Display</h1>;
      };
    
      //Ternary operator will determine which functions JSX we will return
      return movie ? loaded() : loading();
    };
    
    // We must export the component to use it in other files
    export default MovieDisplay;