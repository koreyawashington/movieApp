 
 
 //function to getMovies
 export const getMovie = async (searchTerm) => {
    //make fetch request and store response
    try{
      
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=999569c0&t=${searchTerm}`
      );
   //adding this line to push to github
    const data =  await response.json();
    return data
    } catch (error) {
      console.error(error);
    }
    };

   
  
  
  
  
  
  
  
  