const movieElements = document.querySelectorAll('.movie');
const expandedMovie = document.querySelector('.expanded-movie');
const closeButton = document.querySelector('.close-button');
const expandedMovieImage = expandedMovie.querySelector('img');
const expandedMovieTitle = expandedMovie.querySelector('h2');
const expandedMovieDescription = expandedMovie.querySelector('p');

movieElements.forEach(movieElement => {
    movieElement.addEventListener('click', () => {
       
        const imageSrc = movieElement.querySelector('img').src;
        const title = movieElement.querySelector('h2').textContent;
        const description = movieElement.querySelector('p').textContent;

        
        expandedMovieImage.src = imageSrc;
        expandedMovieTitle.textContent = title;
        expandedMovieDescription.textContent = description;

       
        expandedMovie.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    
    expandedMovie.style.display = 'none';
});