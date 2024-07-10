// Import the Movies functions
import { ObjectId } from "mongodb";
import MovieController from "./controllers/movies.ts";
import type { Movie } from "./models/movies.ts";

const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    const method = req.method;
    if (url.pathname === "/") return new Response("Welcome to the movie database");

    // Routes for the API
    let moviesRoutes = new RegExp(/^\/movies\/?(.*)/);
    const movies = new MovieController();

    // POST /movies
    if (url.pathname.match(moviesRoutes) && method === "POST") {
      const movie: Movie = await req.json();
      return Response.json(await movies.addMovie(movie));
    }
    // GET /movies and GET /movies/:id
    if (url.pathname.match(moviesRoutes) && method === "GET") {
      const routeParams = url.pathname.split("/");
      if (routeParams[2]) {
        const movieId: ObjectId = new ObjectId(routeParams[2]);
        return Response.json(await movies.getMovieById(movieId));
      } else {
        return Response.json(await movies.getMovies());
      }
    }
    // PUT /movies/:id
    if (url.pathname.match(moviesRoutes) && method === "PUT") {
      const movieId: ObjectId = new ObjectId(url.pathname.split("/")[2]);
      const movie: Movie = await req.json();
      return Response.json(await movies.updateMovie(movieId, movie));
    }
    // DELETE /movies/:id
    if (url.pathname.match(moviesRoutes) && method === "DELETE") {
      const movieId: ObjectId = new ObjectId(url.pathname.split("/")[2]);
      return Response.json(await movies.deleteMovie(movieId));
    }

    return new Response("404!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);