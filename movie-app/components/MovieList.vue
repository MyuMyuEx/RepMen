<template>
    <div class="container-fluid p-0">
      <div class="row no-gutters justify-content-center align-items-center vh-100" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
        <div class="col-md-8 text-center">
          <h1 class="display-4 mb-4" style="font-family: 'Netflix Sans', sans-serif; color: #fff;">Movie List</h1>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="(movie, index) in movies" :key="index">
              <div class="card">
                <img :src="movie.image" class="card-img-top" alt="Movie Poster">
                <div class="card-body">
                  <h5 class="card-title">{{ movie.title }}</h5>
                  <p class="card-text">{{ movie.description }}</p>
                  <a :href="movie.link" class="btn btn-primary" target="_blank">Watch Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundImage: require('@/assets/background.jpg'),
        movies: [
          {
            title: 'Stranger Things',
            description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
            image: 'https://www.netflix.com/title/80057281',
            link: 'https://www.netflix.com/title/80057281'
          },
          {
            title: 'The Crown',
            description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
            image: 'https://www.netflix.com/title/80025678',
            link: 'https://www.netflix.com/title/80025678'
          },
          {
            title: 'Breaking Bad',
            description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
            image: 'https://www.netflix.com/title/70143836',
            link: 'https://www.netflix.com/title/70143836'
          },
          {
            title: 'The Irishman',
            description: 'An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, through the 1950-70s.',
            image: 'https://www.netflix.com/title/80175798',
            link: 'https://www.netflix.com/title/80175798'
          }
        ]
      }
    }
  }
  </script>
  
  <style>
  .container-fluid {
    height: 100%;
  }
  
  .card {
    border: none;
    border-radius: 0;
    background-color: transparent;
    color: #fff;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 1.2rem;
  }
  
  .btn {
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
  }
  
  @media (max-width: 767px) {
    .display-4 {
      font-size: 2.5rem;
    }
  }
  </style>