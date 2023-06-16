const fetch = require('node-fetch');

export async function getTrendingData(genre: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZhMjZmNDIzZmQ1YmFiMjNjMjJjZmI3YjgwNWYwYiIsInN1YiI6IjY0OGFlMTc1NDJiZjAxMDBhZTJmYzQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EIIPfg5czfmQJiwV4C5apQEo9wWD5DObH02UBAXU530'
        }
    };

    let data;

    await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated': 'trending/movie/day'}?language=en-US`, options)
        .then(response => response.json())
        .then(response => {
            data = response;
        })
        .catch(err => console.error(err));

    return data;
}