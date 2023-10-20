const movieElements = document.querySelectorAll('.movie');
const expandedMovie = document.querySelector('.expanded-movie');
const closeButton = document.querySelector('.close-button');
const expandedMovieImage = expandedMovie.querySelector('img');
const expandedMovieTitle = expandedMovie.querySelector('h2');
const expandedMovieDescription = expandedMovie.querySelector('p');

movieElements.forEach(movieElement => {
    movieElement.addEventListener('click', () => {
        // Get data from the clicked movie element
        const imageSrc = movieElement.querySelector('img').src;
        const title = movieElement.querySelector('h2').textContent;
        const description = movieElement.querySelector('p').textContent;

        // Set data in the expanded movie element
        expandedMovieImage.src = imageSrc;
        expandedMovieTitle.textContent = title;
        expandedMovieDescription.textContent = description;

        // Show the expanded movie element
        expandedMovie.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    // Hide the expanded movie element when the close button is clicked
    expandedMovie.style.display = 'none';
});