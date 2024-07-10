// Import the Movies collection
import { moviesCollection } from '../utils/db.ts';
// Import the necessary types
import type { ObjectId } from "mongodb";
import type { Movie } from "../models/movies.ts";

class MovieController {
  /**
   * CRUD operations for the movies collection
   */

  // Add a movie
  public async addMovie(movie: Movie) {
    return await moviesCollection.insertOne(movie);
  }

  // Fetch all the movies
  public async getMovies() {
    return await moviesCollection.find({}).sort({_id: -1}).limit(10).toArray();
  }

  // Fetch one movie
  public async getMovieById(_id: ObjectId) {
    return await moviesCollection.findOne({_id});
  }

  // Update the movies
  public async updateMovie(_id: ObjectId, movie: Movie) {
    return await moviesCollection.updateOne({ _id }, { $set: movie });
  }

  // Delete a single movie
  public async deleteMovie(movieId: ObjectId) {
    return await moviesCollection.deleteOne({ _id: movieId });
  }
}

export default MovieController;